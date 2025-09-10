import bg from '../assets/heroSectionBg.png'
import React, { useState, useEffect } from 'react';
import react from '../assets/reactLogo.png'
import angular from '../assets/angular.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import cpp from '../assets/cpp.png'
import dart from '../assets/dart.png'
import flutter from '../assets/flutter.png'
import django from '../assets/django.png'
import pfp1 from '../assets/pfp1.png'
import pfp2 from '../assets/pfp2.png'
import pfp3 from '../assets/pfp3.png'
import pfp4 from '../assets/pfp4.png'
import pfp5 from '../assets/pfp5.png'
import pfp6 from '../assets/pfp6.png'
import pfp7 from '../assets/pfp7.png'
import pfp8 from '../assets/pfp8.png'
import pfp9 from '../assets/pfp9.png'
import pfp10 from '../assets/pfp10.png'


function Home() {
    const services = [
        { id: 1, image: react, name: "React" },
        { id: 2, image: angular, name: "Angular" },
        { id: 3, image: python, name: "Python" },
        { id: 4, image: mongodb, name: "MongoDB" },
        { id: 5, image: javascript, name: "JavaScript" },
        { id: 6, image: cpp, name: "C plus plus" },
        { id: 7, image: dart, name: "Dart" },
        { id: 8, image: django, name: "Java" },
        { id: 9, image: flutter, name: "FLutter" },
        { id: 10, image: mysql, name: "MySQL" },
    ];
    const customerReviews = [
        { id: 1, image: pfp1, name: "Sophia Anderson", review: "React has made frontend development so much easier! It's fast, efficient, and incredibly intuitive." },
        { id: 2, image: pfp2, name: "Mark Davis", review: "Angular is perfect for large-scale projects. The robust framework ensures our applications are always performant." },
        { id: 3, image: pfp3, name: "Emily Roberts", review: "Python has been a game-changer for data analysis and backend development. Its simplicity is unmatched!" },
        { id: 3, image: pfp4, name: "Emily Roberts", review: "Python has been a game-changer for data analysis and backend development. Its simplicity is unmatched!" },
        { id: 4, image: pfp5, name: "James Lee", review: "JavaScript is the backbone of our web projects. Its versatility never ceases to amaze me." },
        { id: 5, image: pfp6, name: "Olivia Martinez", review: "C++ is our go-to for high-performance applications. The control it offers is phenomenal." },
        { id: 6, image: pfp7, name: "Liam Johnson", review: "Dart and Flutter have revolutionized mobile app development. The cross-platform capabilities are a huge plus!" },
        { id: 7, image: pfp8, name: "Ella Brown", review: "Java is rock-solid for enterprise-level applications. Its reliability is second to none." },
        { id: 8, image: pfp9, name: "Noah Walker", review: "MongoDB is so scalable and efficient, perfect for modern database requirements." },
        { id: 9, image: pfp10, name: "Mia Adams", review: "MySQL has been our choice for relational databases. The ease of use and stability are remarkable!" }
    ];
    const [service, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        setServices(services);
        setReviews(customerReviews);
    }, []);
    return (
        <>
            <div className="flex bg-cover bg-center py-5 px-20"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%), url(${bg})`,

                }}
            >
                <div className='py-15 pr-25'>
                    <p className='text-violet-600 font-medium'>DIGILAND MARKET</p>
                    <p className='font-bold text-5xl text-white py-5'>Create, sell or collect <br />digital items.</p>
                    <p className='text-neutral-500 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi consequatur numquam consectetur illo ipsam harum optio facilis sit, aut delectus dolorum molestiae fugiat debitis enim fugit molestias quas tempore quo!</p>
                    <div className='py-5'>
                        <button
                            className="bg-violet-500 rounded-full px-4 py-2 text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 transition duration-300 ease-in-out shadow-lg hover:scale-105"
                        >
                            Connect Wallet
                        </button>
                    </div>
                    <div className='text-white flex flex-direction justify-between'>
                        <div>
                            <p className='font-bold text-3xl'>94215</p>
                            <p className='font-semibold'>Collaborates</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>94215</p>
                            <p className='font-semibold'>Collaborates</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>94215</p>
                            <p className='font-semibold'>Collaborates</p>
                        </div>

                    </div>
                </div>
                <div className='mr-10'>
                    <img src="src\assets\frontImage.png" alt="VR Girl" className='aspect-auto w-300' />
                </div>
            </div>
            <div className=' bg-black py-5 px-20' >
                <h2 className='text-white font-medium text-3xl'>Services</h2>
                {services.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <ul
                        className="text-white flex overflow-x-auto whitespace-nowrap"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {services.map((service) => (
                            <li key={service.id} className="bg-violet-600/10 rounded-2xl m-4 pb-4 text-center flex-shrink-0 hover:bg-violet-600/30 transition hover:scale-105">
                                <img src={service.image} className="aspect-auto w-50" alt={service.name} /> {service.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="bg-black py-5 px-20 ">
                <h2 className="text-white font-medium text-3xl">Customer Reviews</h2>
                {customerReviews.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="text-white flex flex-wrap ">
                        {customerReviews.map((review) => (
                            <li
                                key={review.id}
                                className="bg-violet-600/10 hover:bg-violet-600/30 transition hover:scale-105 rounded-xl m-2 p-3 text-center flex-shrink-0 w-48 break-words"
                            >
                                <div className="flex flex-row items-center justify-center">
                                    <img
                                        src={review.image}
                                        className="aspect-auto w-20 h-20 object-cover"
                                        alt={review.name}
                                    />
                                    <span className="font-bold text-sm ml-0 text-left">{review.name}</span>
                                </div>
                                <span className="text-xs">{review.review}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Home;





