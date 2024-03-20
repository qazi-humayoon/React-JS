import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='shadow sticky z-50 top-0 bg-black'>
            <nav className='flex items-center justify-between p-5 text-white'>
                <div className='sm:pl-1 lg:pl-7'>
                    <p className='text-sm font-serif'>Studio</p>
                    <h1 className='md:text-xl font-sans font-medium'>B u t e n g e w o o n</h1>
                </div>

                <div className='hidden lg:flex items-center justify-center flex-1'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-500 mr-6 hover:underline" : "text-white mr-6 hover:underline"}>Projecten</NavLink>

                    <NavLink to="/anpak" className={({ isActive }) => isActive ? "text-gray-500 mr-6 hover:underline" : "text-white mr-6 hover:underline"}>Anpak</NavLink>

                    <NavLink to="/overons" className={({ isActive }) => isActive ? "text-gray-500 mr-6 hover:underline" : "text-white mr-6 hover:underline"}>Over ons</NavLink>

                    <NavLink to="/starterkits" className={({ isActive }) => isActive ? "text-gray-500 mr-6 hover:underline" : "text-white mr-6 hover:underline"}>Starter Kits</NavLink>

                    <NavLink to="/inzichiten" className={({ isActive }) => isActive ? "text-gray-500 hover:underline" : "text-white hover:underline"}>Inzichiten <i className="ri-external-link-line"></i></NavLink>
                </div>


                <div className='hidden lg:block'>
                    <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-400 border rounded-2xl mr-7 pt-1 pb-1 pl-4 pr-4 hover:underline hover:bg-slate-500' : 'text-white border rounded-2xl mr-7 pt-1 pb-1 pl-4 pr-4 cursor-pointer hover:underline hover:bg-slate-500'}>About</NavLink>
                </div>

                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:hidden ${menuOpen ? 'flex' : 'hidden'} fixed top-0 right-0 bg-black p-5 text-white mt-12 rounded-2xl`}>

                    <ul className='flex flex-col items-end'>
                        <NavLink to="/" className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline mb-2" : "text-white mr-6 mb-2 hover:underline"}  onClick={toggleMenu}><i class="ri-arrow-right-line"></i>Projecten</NavLink>

                        <NavLink to="/anpak" className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline mb-2" : "text-white mr-6 mb-2 hover:underline"}  onClick={toggleMenu}><i class="ri-arrow-right-line"></i>Anpak</NavLink>

                        <NavLink to="/overons" className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline mb-2" : "text-white mb-2 mr-6 hover:underline"}  onClick={toggleMenu}><i class="ri-arrow-right-line"></i>Over ons</NavLink>

                        <NavLink to="/starterkits"  className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline mb-2" : "text-white mb-2 mr-6 hover:underline"}  onClick={toggleMenu}><i class="ri-arrow-right-line"></i>Starter Kits</NavLink>

                        <NavLink to="/inzichiten" className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline mb-2" : "text-white mb-2 mr-6 hover:underline"} activeClassName='text-gray-500' onClick={toggleMenu}><i class="ri-arrow-right-line"></i>Inzichiten</NavLink>

                        <NavLink to="/about" className= {({isActive}) => isActive ? "text-gray-500 mr-6 hover:underline" : "text-white mr-6 hover:underline"} activeClassName='text-gray-500' onClick={toggleMenu}><i class="ri-arrow-right-line"></i>About</NavLink>
                    </ul>

                </div>
            </nav>

            
        </header>
    );
}

export default Header;
