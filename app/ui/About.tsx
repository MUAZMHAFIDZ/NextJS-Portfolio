"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export const About = () => {
    const [textAbout, setTextAbout] = useState<string>('Skill')
  return (
    <section>
        <h2 id='about' className='text-white text-center mt-24 font-semibold text-3xl'>About Me</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 mx-3'>
            <Image src="/images/about-image.jpg" alt='About Image' width={500} height={500} />
            <div className='flex flex-col text-white mt-5 md:mt-1'>
                <div>
                    <p className='text-white'>My Name is Muaz Muhamad Hafidz. Im passionately in Coding, Programming, and Problem Solving. I have experience with Javascript, Node.Js, React, Next.Js, Express.Js, PHP, Laravel and Git.</p>
                </div>
                <div className='flex flex-row m-5'>
                    <span onClick={() => setTextAbout('Skill')} className={textAbout === 'Skill' ? 'mx-1 cursor-pointer' : 'text-[#aaaace] mx-1 cursor-pointer'}>Skill</span>
                    <span onClick={() => setTextAbout('Education')} className={textAbout === 'Education' ? 'mx-1 cursor-pointer' : 'text-[#aaaace] mx-1 cursor-pointer'}>Education</span>
                    <span onClick={() => setTextAbout('Certification')} className={textAbout === 'Certification' ? 'mx-1 cursor-pointer' : 'text-[#aaaace] mx-1 cursor-pointer'}>Certification</span>
                </div>
                {
                    textAbout === 'Skill' ? (
                        <ul className='mx-2'>
                            <li>Node.Js, React.Js, Express.Js, Next.Js, Laravel</li>
                        </ul>
                    ) : textAbout === 'Education' ? (
                        <ul className='md:mx-2'>
                            <li>Politeknik Negeri Madiun , Information Technology</li>
                        </ul>
                    ) : (
                        <ul className='md:mx-2'>
                            <li>FCC Responsive Web Design Certification</li>
                            <li>FCC Legacy Javascript Algorithm and Data Structures Certification</li>
                            <li>FCC Frontend Development Libraries Certification</li>
                            <li>FCC Backend Development and APIs Certification</li>
                            <li>FCC Information Security Certification</li>
                        </ul>
                    )
                }
            </div>
        </div>
    </section>
  )
}
export default About