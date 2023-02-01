import React from 'react'
import { Link } from 'react-router-dom';




const SavedShowList = ({item}) => {

  return (
    <>
    <Link to={`/watch-favorite/${item?.id}`}>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
        
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
            </div>
        </div>
    </Link>
    </>
  )
}

export default SavedShowList