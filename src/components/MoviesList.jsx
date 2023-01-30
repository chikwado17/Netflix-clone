import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesListItem from './MoviesListItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const MoviesList = ({title, fetchURL, RowID}) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios(fetchURL);
            setMovies(response.data.results);
        }

        fetchMovies();
    },[fetchURL]);

    const SlideLeft = () => {
        var slider = document.getElementById('slider' + RowID );
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const SlideRight = () => {
        var slider = document.getElementById('slider' + RowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            
        {/* {left scroll bar} */}
            <MdChevronLeft onClick={SlideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

            <div id={'slider' + RowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {
                    movies.map((item, id) => (
                       <MoviesListItem key={id} item={item} />  
                    ))
                }
            </div>
            
        {/* {right scroll bar} */}
            <MdChevronRight onClick={SlideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

        </div>
    </>
  )
}

export default MoviesList;