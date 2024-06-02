import React from 'react'
import GithubIcon from '../../public/github.svg'
import LinkedinIcon from '../../public/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 py-24 gap-4'>
        <div>
            <h2 id='about' className='text-white text-center font-semibold text-3xl'>Let's Connect</h2>
            <p className='text-[#aaaace] mb-4 max-w-md'>
                I'm Currently Looking for new Opportunities, my inbox is always open. Wheter you have a question or just want to say hi, I'll try my best to get back to you.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/muazmhafidz" passHref={true} target="_blank">
                    <Image src={GithubIcon} alt='Github' width={40} height={40}/>
                </Link>
                <Link href="https://linkedin.com" passHref={true} target="_blank">
                    <Image src={LinkedinIcon} alt='Linkedin' width={40} height={40}/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-2">
                <label htmlFor="email" className='text-white text-sm font-medium block'>Your Email</label>
                <input 
                    type="email" id="email"
                    required placeholder='youremail@example.com' 
                    className='bg-[#212125] border border-[#33333F] placeholder-[#ababce] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' 
                />
                <label htmlFor="subject" className='mt-2 text-white text-sm font-medium block'>Subject</label>
                <input 
                    type="text" id="subject" 
                    required placeholder='I want say Hi' 
                    className='bg-[#212125] border border-[#33333F] placeholder-[#ababce] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' 
                />
                <label htmlFor="subject" className='mt-2 text-white text-sm font-medium block'>Message</label>
                <textarea
                    name="message" id="message" 
                    required placeholder='Hi, Nice to meet you....' 
                    className='bg-[#212125] border border-[#33333F] placeholder-[#ababce] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' 
                />
                <button
                    type='submit'
                    className='bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700 text-white hover:border w-full text-sm font-medium px-5 py-2 rounded-lg'
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection