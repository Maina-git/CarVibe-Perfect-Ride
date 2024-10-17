import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full h-auto min-h-[120vh] flex flex-col justify-center items-center bg-blue-950 p-5">
      
      <h1 className="my-10 p-3 text-3xl md:text-4xl font-bold text-white border-[3px] border-white">
        Car Vibe
      </h1>

      <div className="text-gray-300 px-5 md:px-10 py-5 text-center text-sm md:text-base lg:text-lg max-w-2xl">
        At <span className="font-bold text-white">Car Vibe</span>, we are dedicated to delivering the most accurate and visually stunning
        representation of vehicles. Whether you're browsing for your dream car or exploring the latest models, our platform is designed
        to provide a seamless experience with high-quality images that capture every detail. We go beyond just looks—each image is paired
        with comprehensive information, so you can explore key features, specs, and options with ease.
      </div>

      <div className="flex flex-col gap-10 justify-center items-center w-full mt-10">
        <h2 className="text-white text-2xl md:text-3xl border-[2px] border-white p-2">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 px-5 w-full max-w-4xl">
          
          <div className="flex justify-center">
            <img
              className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover rounded-full shadow-lg"
              src="/images/WhatsApp Image 2024-10-08 at 21.25.50_22f0cb24.jpg"
              alt="Profile"
            />
          </div>

      
          <div className="text-gray-300 text-[14px] md:text-base lg:text-lg w-full md:w-[60%] leading-relaxed bg-blue-900 p-5 rounded-lg shadow-lg">
            <p>
              Hi, I'm Francis, a passionate web developer who thrives on creativity and problem-solving. What excites me the most about web development is the perfect blend of technical challenges and artistic expression. From writing clean code to designing intuitive user interfaces, every step fuels my passion for the craft.
            </p>
            <p className="mt-3">
              The idea of creating something from scratch, transforming ideas into fully functional websites or applications with just a few lines of code, is truly thrilling for me. I embrace every opportunity to solve problems, whether it's debugging an issue or optimizing performance for the best user experience.
            </p>
            <p className="mt-3">
              Constant learning is integral to my journey in web development, and I stay ahead of the curve by exploring new technologies and design trends. For me, web development is not just a job—it's a passion. I'm driven by the joy of creating things that others can interact with and enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;





//import React, { useState } from 'react';
//import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../config/Firebase';
//import { storage } from '../config/Firebase';
/*
const UploadImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload failed', error);
        setUploadError('Upload failed. Please try again.');
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, 'images'), {
            name: file.name,
            url: downloadURL,
          });
          alert('File uploaded successfully');
          setFile(null);
          setUploadProgress(0);
        } catch (error) {
          console.error('Error saving file data to Firestore:', error);
          setUploadError('Failed to save file information.');
        }
      }
    );
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadProgress > 0 && <p>Upload progress: {uploadProgress.toFixed(2)}%</p>}
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
    </div>
  );
};

*/





















































