import { UserAuth } from "../context/AuthContext"

const Account = () => {
    const { logOut, user } = UserAuth()
    const handle = () => {
        logOut()
    }
    return(
        <div>
            Account
            <button className="px-4 py-2 bg-blue-500 rounded-md ml-5" onClick={handle}>Log out</button>
        </div>
    )
}

export default Account