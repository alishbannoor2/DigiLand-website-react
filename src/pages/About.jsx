import React from 'react';
import bg from '../assets/heroSectionBg.png'

function About() {
    return (
        <>
            <div className="flex bg-cover bg-center py-35 px-20"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%), url(${bg})`, }}>
                <div>
                    <img src="src\assets\about.png" alt="VR Girl" className='aspect-auto w-200  ' />
                </div>
                <div>
                    <div className='text-white font-normal text-5xl p-3'>
                        We provide services <br /> which no one does!
                    </div>
                    <div className='text-neutral-500 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo dolore ab, quaerat culpa libero eaque, nulla voluptas quibusdam sed necessitatibus! Quos, beatae? Suscipit eaque iure tempora, perspiciatis et necessitatibus.</div>
                    <div className='py-5'>
                        <button
                            className="bg-violet-500 rounded-full px-4 py-2 text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 transition duration-300 ease-in-out shadow-lg hover:scale-105"
                        >
                            Join the Team
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;