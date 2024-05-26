import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import laravel from '../assets/laravel.png'
import bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div className='bg-black text-gray-400 w-full px-4 py-8'>
    
      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold mb-8 text-center'>
        My Tech Stack
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>
        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={html} alt="HTML" width={100} height={100}/>
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={css} alt="CSS" width={100} height={100} />
          <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={javascript} alt="Javascript" width={100} height={100}/>
          <p className='mt-2'>Javascript</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={react} alt="React Js" width={100} height={100}/>
          <p className='mt-2'>React Js</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={tailwind} alt="Tailwind CSS" width={100} height={100}/>
          <p className='mt-2'>Tailwind CSS</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={laravel} alt="Laravel" width={100} height={100}/>
          <p className='mt-2'>Laravel</p>
        </div>

        <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
          <img src={bootstrap} alt="Bootstrap" width={100} height={100}/>
          <p className='mt-2'>Bootstrap</p>
        </div>
      </div>
    </div>
  )
}

export default Skills


// const Skills = () => {
//   return (
//     <div className='bg-black text-gray-400 md:h-[150px] w-full px-4 grid grid-cols-3
//                      place-items-center md:flex md:justify-between md:items-center'>
     

//       <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-8 text-center'>
//         My Tech Stack
//       </h2>

//       <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//         <img src={html} alt="" />
//         <p className='mt-2'>HTML</p>
//       </div>

//       <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//         <img src={css} alt="" width={100} height={100}/>
//         <img src={css} alt="CSS" width={100} height={100} />
//         <p className='mt-2'>CSS</p>
//       </div>

//       <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
//         <img src={javascript} alt="Javascript" width={100} height={100}/>
//         <p className='mt-2'>Javascript</p>
//       </div>

//       <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
//         <img src={react} alt="React Js" width={100} height={100}/>
//         <p className='mt-2'>React Js</p>
//       </div>

//       <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
//         <img src={tailwind} alt="Tailwind CSS" width={100} height={100}/>
//         <p className='mt-2'>Tailwind CSS</p>
//       </div>

//       <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
//         <img src={laravel} alt="Laravel" width={100} height={100}/>
//         <p className='mt-2'>Laravel</p>
//       </div>

//       <div className='flex flex-col items-center w-[80px] md:w-[100px]'>
//         <img src={bootstrap} alt="Bootstrap" width={100} height={100}/>
//         <p className='mt-2'>Bootstrap</p>
//       </div>

//     </div>
//   )
// }

// export default Skills