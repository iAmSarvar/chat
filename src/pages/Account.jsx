import { UserAuth } from "../context/AuthContext"

const Account = () => {
    const { logOut, user } = UserAuth()
    const handle = () => {
        logOut()
    }
    return(
        <div>
            Account
            <button onClick={handle}>Log out</button>
        </div>
    )
}

export default Account