import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Account from "./pages/Account"
import Error from "./pages/Error"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const App = () => {
    return(
        <div>
            <Routes>
                <Route index element={
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                } />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App