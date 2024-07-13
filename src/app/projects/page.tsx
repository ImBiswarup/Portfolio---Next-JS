"use client";

import React, { useState } from 'react';
import { projectData } from '@/utils/projectData';
import Link from 'next/link';


const Page = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col lg:flex-row text-white min-h-screen bg-slate-900">
            <div className="lg:w-1/2 w-full p-6 lg:p-12 flex flex-col items-center my-5 text-lg space-y-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{projectData[currentImageIndex].heading}</h2>
                    <p className="text-xl font-normal my-5">
                        <span className='font-bold italic text-gray-400 mr-2'>About the Project:</span>
                        {projectData[currentImageIndex].desc}
                    </p>
                    <p className="text-xl font-normal">
                        <span className='font-bold italic text-gray-400 mr-2'>Tech Stacks for the project:</span>
                        {projectData[currentImageIndex].techStack}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 my-5">
                        <Link href={projectData[currentImageIndex].gitRepo} target='_blank'>
                            <button className='px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-md transform hover:scale-105'>
                                Github
                            </button>
                        </Link>
                        <Link href={projectData[currentImageIndex].hostedUrl} target='_blank'>
                            <button className='px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-md transform hover:scale-105'>
                                Live Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col items-center p-6 lg:p-12">
                <div className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        {projectData.map((item: any, index: any) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                data-carousel-item
                            >
                                <img
                                    src={item.url.src}
                                    className="block w-full h-full object-cover rounded-lg"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                        {projectData.map((_: any, index: any) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
                                    }`}
                                aria-current={index === currentImageIndex}
                                aria-label={`Slide ${index + 1}`}
                                data-carousel-slide-to={index}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                        onClick={prevImage}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                            <svg
                                className="w-4 h-4 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1L1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                        onClick={nextImage}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                            <svg
                                className="w-4 h-4 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 9l4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Page;
