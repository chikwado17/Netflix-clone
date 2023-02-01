import React from 'react'
import SavedShows from '../components/SavedShows'

const UserDashboard = () => {
  return (
    <>
      <div className='w-full text-white'>
          <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/0b073210-50a7-4f11-8133-10a5d773eff7/NG-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
          <div className='absolute top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-bold'>My Favorite Shows</h1>
          </div>
      </div>
      <SavedShows />
    </>
  )
}

export default UserDashboard