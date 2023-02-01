import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const AddFavorite = ({item}) => {

    const [likes, setLikes] = useState(false);


    const {user} = UserAuth();

     //getting movie id
     const movieID = doc(db, 'users', `${user?.email}`);


     //function to save movie when it is been clicked as favorite to firestore
     const saveShow = async () => {
         if(user?.email) {
             setLikes(!likes);
             await updateDoc(movieID, {
                 savedShows: arrayUnion({
                     id: item.id,
                     title: item.title,
                     img: item.backdrop_path
                 })
             });
         }else {
             toast.error('Please sign in to save movie to your favorite.');
         }
     }
 
  return (
    <>
        <div>
            <p onClick={saveShow}>{likes ? <FaHeart className=' text-red-700' /> : <FaRegHeart className='text-gray-400 ' />}</p>
        </div>
    </>
  )
}

export default AddFavorite