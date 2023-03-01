import { useContext, createContext, useState, useEffect } from "react";
import { auth } from '../firebase/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return(
        <UserContext.Provider value={{user, signUp, signIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}