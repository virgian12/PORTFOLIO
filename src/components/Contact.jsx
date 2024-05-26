import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='w-full mx-auto bg-black sm:py-20 p-5 relative z-10' id='contact'>

        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        </div>


        <div className='max-w-[800px] mx-auto'>

            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                        <div className='flex items-center'>
                            <MdOutlineEmail size={30} className='text-gray-400 mr-4'/>
                            <a href="mailto:virgiamadhan@gmail.com" className='text-gray-400 hover:text-white text-lg font-medium'>
                                virgiamadhan@gmail.com
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <BsWhatsapp size={30} className='text-gray-400 mr-4'/>
                            <a href="https://api.whatsapp.com/send?phone=6282257042708" className='text-gray-400 hover:text-white text-lg font-medium'>
                                +62 822-5704-2708
                            </a>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact