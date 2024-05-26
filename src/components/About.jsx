import React from 'react'
import aboutImg from '../assets/about.jpg'

 const About = () => {
  return (
    <div className='text-white w-full mx-auto px-4 py-8 bg-black' id='about'>

      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
              Saya merupakan mahasiswa semester 7 di program studi Teknologi Rekayasa Perangkat Lunak
              dan memiliki ketertarikan pada beberapa hal seputar pemrograman dan desain. 
              Dengan pengalaman mengerjakan berbagai project selama kuliah, saya terus berusaha mengembangkan
              keterampilan dan selalu mencari pengalaman serta pengetahuan baru di dunia pemrograman.
            </p>
          </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt='' width={300} height={300} />
      </div>
    </div>
  )
}

export default About
