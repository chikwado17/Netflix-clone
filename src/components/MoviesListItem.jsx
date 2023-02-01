import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserAuth } from '../context/AuthContext';



const MoviesListItem = ({item}) => {

  const { user } = UserAuth();

  const navigate = useNavigate();

  const checkUser = () => {
    if(user?.email) {

     return navigate(`/watch/${item?.id}`);

    }else {
      return toast.error('Please sign in to view movie details.');
    }
  }


  return (
    <>
      <div onClick={checkUser} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
          <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
      
          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
          </div>
      </div>
    </>
  )
}

export default MoviesListItem