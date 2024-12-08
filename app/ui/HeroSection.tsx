"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  const [cvv, setCvv] = useState(false)
  const [currentImage, setCurrentImage] = useState('/images/Hero-Image.png');

  const images = [
    '/images/Hero-Image.png',
    '/images/Hero-Image2.png', 
    '/images/Hero-Image3.png',
    '/images/Hero-Image4.png'   
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length; 
        if(currentImage == images[3]) {
          return images[0];
        } 
        return images[nextIndex];
      });
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-transparent mb-4 text-4xl lg:text-5xl font-extrabold bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-blue-300">
            Hello I'm Muaz
          </h1>
          <h2 className='mb-4 text-3xl lg:text-4xl font-extrabold text-white'>
          <TypeAnimation
            sequence={[
              'A Programmer',
              1000,
              'A Web Developer',
              1000,
              'A Mobile Developer',
              1000,
              'A Game Developer',
              1000,
            ]}
            wrapper="span"
            speed={35}
            repeat={Infinity}
          />
          </h2>
          <p className="text-[#BFBFCC] text-lg lg:text-xl">
              My Name is Muaz Muhamad Hafidz. Im passionately in coding, programming, and problem solving.
          </p>
          <div>
            <button className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700 text-white hover:border'>Hire Me</button>
            <button onClick={() => setCvv(!cvv)} className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700 text-white hover:border'>Download CV</button>
          </div>
          {cvv && (<div>
            <span className='text-white'>Choose One : </span>
            <button className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-700 via-purple-700 to-blue-700 text-white hover:border'>Indonesian CV</button>
            <button className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-700 via-purple-700 to-blue-700 text-white hover:border'>English CV</button>
          </div>)}
        </div>
        
        <div className="animate-myHeroImage2 col-span-5 place-self-center p-5">
          <div className="animate-myHeroImage rounded-full overflow-hidden bg-[#212121] w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
            <Image 
              src={currentImage}
              alt='MuazMHafidz'
              width={400}
              height={400}
              className="object-cover w-full h-full"
              style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection