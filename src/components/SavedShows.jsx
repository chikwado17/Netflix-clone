import React, {useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import SavedShowList from './SavedShowList';

import { UserAuth } from '../context/AuthContext';


const SavedShows = () => {

    const [movies, setMovies] = useState([]);

    
    const { user } = UserAuth();


    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
        
    },[user?.email]);


    const SlideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const SlideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


   
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Favorite Shows</h2>
        
            <div className='relative flex items-center group'>
                
            {/* {left scroll bar} */}
                <MdChevronLeft onClick={SlideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

                <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {
                        movies?.map((item, id) => (
                            <SavedShowList item={item} key={id} />
                        ))
                    }
                </div>
                
            {/* {right scroll bar} */}
                <MdChevronRight onClick={SlideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

            </div>
    </>
  )
}

export default SavedShows