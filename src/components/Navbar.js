import { useState } from 'react'
import {IoBookSharp, IoMenu, IoClose} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let Links = [
    {name: 'Home', link: '/'},
    {name: 'Tools', link: '/tools'},
    {name: 'Services', link: '/services'},
    {name: 'About', link: '/about'},
  ]
  
  const [open, setOpen] = useState(false)

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex justify-between items-center bg-white py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                <span className="text-3xl text-indigo-600 mr-2 pt-2">
                <IoBookSharp />
                </span>
                Assignment 2
            </div>
            <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                { !open ? <IoMenu /> : <IoClose />}
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                {
                    Links.map((link) => (
                        <li className="md:ml-8 text-md md:my-0 my-7">
                            <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar