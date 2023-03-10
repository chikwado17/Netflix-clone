import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        {user?.email ? (
          <div>
          <Link to='/user-dashboard'>
              <button className='border text-white mr-1 border-gray-300 font-bold px-3 py-2 '>Account</button>
          </Link>
            <button onClick={handleSignOut} className='text-white font-bold bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
        </div>
        ) : (
          <div>
            <Link to='/login'>
                <button className='text-white font-bold pr-4'>Sign In</button>
            </Link>
            <Link to='/register'>
                <button className='text-white font-bold bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default Navbar