// new code
import React from 'react'

const Navbar = () => {

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth'});
        }
    };
  return (
    <div className='bg-gray-800 text-white h-[100px] w-full px-8 flex justify-between items-center'>

        <h1 className='text-3xl font-bold primary-color ml-6'>Virgia's.</h1>

        <ul className='hidden md:flex'>
            <li className='nav-link p-6'>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
            </li>
            <li className='nav-link p-6'>
                <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>Work</a>
            </li>
            <li className='nav-link p-6'>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
            </li>
        </ul>

    </div>
        
  )
}

export default Navbar





// import React from 'react'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// const Navbar = () => {
    // const nav = useState(false)
    // const [nav, setNav] = useState(false)

    // const handleNav = () => {
    //     setNav(!nav)
    // }

//   return (
    // <div>
        /* <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'> */
        // <div className='bg-gray-700 text-white h-[100px] w-full px-8 flex justify-between items-center scroll-smooth focus:scroll-auto'>
            

        //     <h1 className='text-3xl font-bold primary-color ml-4'>Virgia's.</h1>
        //     <ul className='hidden md:flex'>
        //         <li className='nav-link scroll-smooth p-5'><a href="#about">About</a></li>
        //         <li className='nav-link scroll-smooth p-5'><a href="#work">Work</a></li>
        //         <li className='nav-link scroll-smooth p-5'><a href="#contact">Contact</a></li>
        //     </ul>
            
            /* <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div> */

            /* <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Virgia's</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href="#home">Home</a></li>
                    <li className='p-2'><a href="#about">About</a></li>
                    <li className='p-2'><a href="#work">Work</a></li>
                    <li className='p-2'><a href="#experience">Experience</a></li>
                    <li className='p-2'><a href="#contact">Contact</a></li>
                </ul>
            </div> */

//         </div>
//     </div>
    
//   )
// }

// export default Navbar