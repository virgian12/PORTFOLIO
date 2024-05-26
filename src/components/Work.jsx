import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'



const Work = () => {
  return (
    <div className='w-full mx-auto p-5 bg-black'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative p-4'>
                <img src={proj1} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Website Pencatatan KIA</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/capstone-project-kelompok-2/pencatatan-KIA">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Lihat
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative p-4'>
                <img src={proj2} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Pemesanan Hotel</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/virgian12/VSGA-JWD-2024">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Lihat
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative p-4'>
                <img src={proj3} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Desain Nosting</span>
                    <div className='pt-8 text-center'>
                        <a href="https://www.figma.com/design/5JRbTq2bDWxakm3MS70Ijg/pengabdian_stunting?node-id=615-139&t=oz13Jbpt1AzJpIoV-0">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Lihat
                            </button>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Work