import React from 'react';
import { Link } from 'react-router-dom';
 
const Login = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/0b073210-50a7-4f11-8133-10a5d773eff7/NG-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>

                        <form className='w-full flex flex-col py-4'>
                            <input className='p-3 my-2 bg-gray-300 rounded' type="email" placeholder='Email' autoComplete="email" />
                            <input className='p-3 my-2 bg-gray-300 rounded' type="password" placeholder='Password' autoComplete="current-password" />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>

                            <div className='flex text-sm text-gray-600 justify-between items-center'>
                                <p> <input className='mr-2' type="checkbox" /> Remember me </p>
                                <p className='py-4'>
                                    <span className='text-gray-600 font-bold'>New to Netflix?</span>{' '} <Link className='text-white font-bold' to='/register'>Sign Up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </> 
  )
}

export default Login