"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
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
            speed={30}
            repeat={Infinity}
          />
          </h2>
          <p className="text-[#BFBFCC] text-lg lg:text-xl">
              My Name is Muaz Muhamad Hafidz. Im passionately in coding, programming, and problem solving.
          </p>
          <div>
            <button className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700 text-white hover:border'>Hire Me</button>
            <button className='rounded-full w-full md:w-fit px-6 py-3 mx-2 my-3 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700 text-white hover:border'>Download CV</button>
          </div>
        </div>
        
        <div className="col-span-5 place-self-center py-5">
          <div className="overflow-hidden rounded-full bg-[#212121] w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
            <Image 
              src="/images/Hero-Image.png"
              alt='MuazMHafidz'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection