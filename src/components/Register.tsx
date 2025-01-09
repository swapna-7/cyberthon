import React from 'react'

function Register() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Register</h1>
        <form className='w-full max-w-md'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email
                </label>
                <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white' id='email' type='email' placeholder='Enter your email' />
            </div>
            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Password
                </label>
                <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white' id='password' type='password' placeholder='******************' />
            </div>
            <div className='flex justify-center'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'>
                    Register
                </button>
            </div>
            <div className='text-center text-gray-500'>
                Already have an account? <a href='/login'>Login</a>
            </div>

        </form>
    </div>
  )
}

export default Register
