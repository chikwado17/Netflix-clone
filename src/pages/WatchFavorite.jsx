import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import ShowCast from '../components/ShowCast';
import { toast } from 'react-toastify';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import {AiOutlineClose} from 'react-icons/ai';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
 
const WatchFavorite = () => {

    const [watch, setWatch] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isOpen, setOpen] = useState(false);
  
    const match = useParams();
    const navigate = useNavigate();

    const { user } = UserAuth();

    

    useEffect(() => {
        const getMoviesWatch = async (id) => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${match.id}?api_key=d4cb78c8a72af259b4999d1ac9c25afc&append_to_response=videos`);
   
            setWatch(response.data);
       }
        getMoviesWatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    },[user?.email]);


        //function to delete data from firestore    
    const deleteMovie = async (movieId) => {
        try {
            await updateDoc(doc(db, 'users', `${user?.email}`), {
                savedShows: movies.filter((movie) => movie.id!== movieId)
            });
            
            toast.success('Movie was successfully removed as favorite.');
            navigate('/user-dashboard');
        }catch(error) {
            toast.error(error.message);
        }
    }

  return (
    <>
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${watch?.backdrop_path}`} alt='movies' />

                <div className='absolute w-full top-[20%] p-4 md:p-8'>

                {/* <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${watch?.backdrop_path}`} alt='movies' /> */}



                    <h1 className='text-3xl md:text-5xl font-bold'>{watch?.title}</h1>
                    <div className='my-4'>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={watch?.length < 1 ? 'No video' : watch?.videos.results[0].key} onClose={() => setOpen(false)} />
                            <button className="btn-info" onClick={()=> setOpen(true)}>
                                <i className="fa fa-play"><span className='border bg-red-700 text-white border-red-900 py-2 px-5' style={{marginLeft: '10px'}}>Play Trailer</span></i>
                            </button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {watch?.release_date}</p>
                    <div className='my-4 flex items-center mt-4'>
                       <h2 className='font-bold mr-3'>Delete from favorite</h2>  <p onClick={() =>deleteMovie(watch?.id)} className=' text-red-700 text-3xl font-bold'><AiOutlineClose /></p>
                    </div>
                    <h6 className='font-bold text-xl mt-4'>Overview</h6>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{watch?.overview}</p>
                </div>
            </div>
        </div>
        
        <ShowCast id={match?.id} />
    </>
  )
}

export default WatchFavorite