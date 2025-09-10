import React from 'react';
import { Link } from 'react-router-dom';
import bg from './assets/heroSectionBg.png'

function Navbar() {
    return (
        <>
            <nav style={{
                backgroundImage: `url(${bg})`,
            }}
                className="flex justify-around items-center p-4 ">
                <div className='text-2xl font-extrabold text-white flex'>
                    <img src="public\logo.png" alt="logo" className='aspect-auto w-10 ' />
                    <p className='pl-4'>digiland</p>
                </div>
                <div className='text-white'>
                    <input
                        type="text"
                        value="search item here..."
                        style={{
                            backgroundColor: 'rgba(211, 211, 211, 0.15)',
                            color: 'rgba(255, 255, 255, 0.5)',
                        }}
                        className="rounded-full px-3 py-0.5"
                    />
                </div>

                <div>
                    <Link
                        to="/"
                        className="mx-4 text-white font-semibold text-sm hover:scale-110 hover:text-violet-500 transition duration-300 inline-block"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="mx-4 text-white font-semibold text-sm hover:scale-110 hover:text-violet-500 transition duration-300 inline-block"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="mx-4 text-white font-semibold text-sm hover:scale-110 hover:text-violet-500  transition duration-300 inline-block"
                    >
                        Contact
                    </Link>
                </div>
                <div>
                    <button
                        className="bg-violet-500 rounded-full px-4 py-2 text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 transition duration-300 ease-in-out shadow-lg hover:scale-105"
                    >
                        Connect Wallet
                    </button>
                </div>

            </nav>
        </>
    );
}

export default Navbar;