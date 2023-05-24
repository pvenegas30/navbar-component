import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div className="flex justify-between">
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <Image
                  width={28}
                  height={28}
                  src={Logo}
                  alt='logo'
                  title='logo'
                />
              </Link>
            </div>

            {/* TITLE */}
            <div className="ml-8 flex items-center text-center">
              <h1 className="md:block hidden text-xl">TITLE</h1>
            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className='md:hidden'>
                <button
                  className='p-2 text-green-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={30} />
                  ) : (
                    <AiOutlineMenu size={30} />
                  )}
                </button>
              </div>
          </div>
          {/* SECTIONS */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className='h-screen md:h-auto items-center justify-center md:flex '>
                <li className='pb-4 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-green-900  border-green-900  md:hover:text-green-600 md:hover:bg-transparent'>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className='pb-4 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent'>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className='pb-4 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent'>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className='pb-4 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent'>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
