'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fetchedProjectData, setFetchedProjectData] = useState<any[]>([]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? fetchedProjectData.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === fetchedProjectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const getAllProjectData = async () => {
      try {
        const response = await axios.get('/api/get-projects');
        console.log(response.data);
        setFetchedProjectData(response.data.projects);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };
    getAllProjectData();
  }, []);

  if (fetchedProjectData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <p>No Projects Found</p>
      </div>
    );
  }

  const current = fetchedProjectData[currentImageIndex];

  return (
    <div className="flex flex-col lg:flex-row text-white min-h-screen bg-slate-900">
      {/* Info Section */}
      <div className="lg:w-1/2 w-full p-6 lg:p-12 flex flex-col items-center my-5 text-lg space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{current.heading}</h2>
          <p className="text-xl font-normal my-5">
            <span className="font-bold italic text-gray-400 mr-2">About the Project:</span>
            {current.desc}
          </p>
          <p className="text-xl font-normal">
            <span className="font-bold italic text-gray-400 mr-2">Tech Stack:</span>
            {current.techStack}
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-5">
            {current.gitRepo && (
              <Link href={current.gitRepo} target="_blank" rel="noopener noreferrer">
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  GitHub
                </button>
              </Link>
            )}
            {current.hostedUrl && (
              <Link href={current.hostedUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  Live Demo
                </button>
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* Image Carousel */}
      <div className="lg:w-1/2 w-full flex flex-col items-center p-6 lg:p-12">
        <div className="relative w-full" data-carousel="slide">
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg shadow-lg">
            {fetchedProjectData.map((item, index) => (
              <div
                key={item._id || index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Image
                  src={item.url}
                  layout="fill"
                  objectFit="cover"
                  alt={`Slide ${index + 1}`}
                  className="block w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
            {fetchedProjectData.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            onClick={prevImage}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
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
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            onClick={nextImage}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
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
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
