import Chats from "../components/Chats"
import SelectedChatContent from "../components/SelectedChatContent"
import Sidebar from "../components/Sidebar"
import { UserAuth } from "../context/AuthContext"

const Account = () => {
    const { logOut, user } = UserAuth()
    const handle = () => {
        logOut()
    }
    return(
        <div className="w-screen h-screen flex">
            <Sidebar />
            <Chats />
            <SelectedChatContent />
            {/* <button className="px-4 py-2 bg-blue-500 rounded-md ml-5" onClick={handle}>Log out</button> */}
        </div>
    )
}

export default Account