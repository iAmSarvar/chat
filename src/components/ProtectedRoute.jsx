import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth()
    console.log(user)
    if(!user) {
        return <Navigate to='/signin'/>
    }

    return children
}

export default ProtectedRoute