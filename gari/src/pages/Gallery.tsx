import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../config/Firebase';
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

interface ImageData {
  id: string;
  url: string;
  likes: number;
  likedByMe: boolean;
}
const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'images'));
        const imageList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          url: doc.data().url,
          likes: doc.data().likes || 0,   
          likedByMe: false                 
        }));
        setImages(imageList);
      } catch (err) {
        setError('Failed to fetch images');
        console.error('Error fetching images:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleLike = async (id: string, likes: number, likedByMe: boolean) => {
    const updatedImages = images.map((img) =>
      img.id === id
        ? { ...img, likes: likedByMe ? likes - 1 : likes + 1, likedByMe: !likedByMe }
        : img
    );
    setImages(updatedImages);

    const imageDocRef = doc(db, 'images', id);
    await updateDoc(imageDocRef, { likes: likedByMe ? likes - 1 : likes + 1 });
  };

  const handleDownload = async (imageUrl: string) => {
    try {
      if (imageUrl.startsWith('http')) {
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'downloaded_image.jpg';
        a.click();
      } else {
        const storageRef = ref(storage, imageUrl);
        const downloadUrl = await getDownloadURL(storageRef);

        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'downloaded_image.jpg';
        a.click();
      }
    } catch (error){
      console.error('Error downloading image:', error);
    }
  };

  if (loading){
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="p-5 border-[3px] border-blue-950">
          <p className="text-blue-950 text-3xl font-bold">Car Vibe.....</p>
        </div>
        <span className="text-xs text-blue-950 my-10">Perfect Ride</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-gray-500 text-5xl font-bold my-10">Ooops!!</h1>
        <p className="text-gray-500 text-2xl">{error} 404</p>
      </div>
    );
  }
  return (
    <div className="h-screen w-full bg-gray-200">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5 p-3 sm:p-5 overflow-y-scroll h-[80vh]">
        {images.map((image) => (
          <div className="w-full sm:w-[90%] lg:w-[80%] m-3 rounded-[10px]" key={image.id}>
            <img src={image.url}
              alt={`Uploaded ${image.id}`}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded"/>
            <nav className="w-full h-auto p-2 flex justify-between items-center px-3 sm:px-5">
              <button className="bg-blue-950 text-white text-xs sm:text-sm px-4 py-1 rounded" onClick={() => handleDownload(image.url)}>
                Download
              </button>

              <button onClick={() => handleLike(image.id, image.likes, image.likedByMe)} className="flex items-center space-x-1">
                {image.likedByMe ? <FcLike className="text-2xl sm:text-3xl" /> : <CiHeart className="text-2xl sm:text-3xl" />}
                <span className="text-xs sm:text-sm">{image.likes}</span>
              </button>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;