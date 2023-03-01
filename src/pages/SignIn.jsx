import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {
    const { user, signIn } = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        try {
            signIn(email, password)
        } catch (error) {
            console.error(error)
            alert('error')
        }
    }

    useEffect(() => {
        // console.log(user)
        if(user !== null){
            navigate('/')
        }
    }, [user])

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <form className='min-w-[500px] h-min flex flex-col border p-[40px]' onSubmit={handleSubmit}>
            <h2 className='text-4xl mb-5'>Sign in</h2>
            <label className='mb-3 mt-7 text-xl' htmlFor="email">Email</label>
            <input className='w-100 h-[45px] border border-gray-500 px-3 rounded-md text-xl' name='email' type="text" id='email' />
            <label className='mb-3 mt-7 text-xl' htmlFor="passwrod">Password</label>
            <input className='w-100 h-[45px] border border-gray-500 px-3 rounded-md text-xl' name='password' type="password" id='password'/>
            <button className='w-100 h-[45px] bg-blue-500 rounded-md my-10 text-white text-xl font-bold'>Sign in</button>
            <p className='self-center'>Don't have an account yet? <Link className='underline text-gray-600' to='/signup'>SIGN UP</Link></p>
        </form>
    </div>
  )
}

export default SignIn