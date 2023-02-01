import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import unnamed from '../img/unnamed.png';

const ShowCast = ({id}) => {

    const [watch, setWatch] = useState([]);

   
    useEffect(() => {
        const getMoviesWatch = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d4cb78c8a72af259b4999d1ac9c25afc&append_to_response=videos`);
   
            setWatch(response.data.cast);
       }
        getMoviesWatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const SlideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const SlideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    var cast = watch.slice(0, 12);

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4 mt-11'>Top Billed Cast</h2>
        <div className='relative flex items-center group'>
            
        {/* {left scroll bar} */}
            <MdChevronLeft onClick={SlideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

            <div id={'slider'} className="w-full mb-11 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {
                    cast.map((item, id) => (
                        <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
                        <img className='w-full h-auto block' src={item?.profile_path === null  ? unnamed : `https://image.tmdb.org/t/p/w500/${item?.profile_path}`} alt={item?.title} />
                    
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.name}</p>
                        </div>
                    </div>

                    ))
                }
            </div>
            
        {/* {right scroll bar} */}
            <MdChevronRight onClick={SlideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

        </div>
    </>
  )
}

export default ShowCast