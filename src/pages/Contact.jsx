import React from 'react';
import bg from '../assets/heroSectionBg.png'
function Contact() {
    return (
        <>
            <div className="flex bg-cover bg-center py-5 px-20"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%), url(${bg})`,

                }}
            >
                <div className='flex flex-direction justify-around'>
                    <div className="container mx-auto p-8 pr-15">
                        <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
                        <form>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 rounded-xl bg-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 rounded-xl bg-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    className="w-full px-3 py-2 rounded-xl bg-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button className="w-full px-6 py-3 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <img src="src\assets\contact.png" alt="VR Girl" className='aspect-auto w-200 py-5 rounded-full' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
