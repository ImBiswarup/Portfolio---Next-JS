"use client"

import { userData } from '@/utils/Data'
import { techStacks } from '@/utils/techStack'
import Image from 'next/image'
import { userAgent } from 'next/server'
import React from 'react'


const page = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font py-5">
        <div className="container px-5 mx-auto flex flex-wrap">
          <span className="text-center text-3xl font-bold">Academics</span>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>

            {userData.map((user) => (
              <div key={user.id} className="w-full">
                {/* Profile Description */}
                <div className="mb-10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    &gt;
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mt-6">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">Class {user.class10.class}</h2>
                    </div>
                  </div>
                </div>

                {/* Class 10 Details */}
                <div className="mb-10">
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                      <Image
                        src={user.class10.url}
                        alt="Class 10 School"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">{user.class10.class10School}</h2>
                      <p className="leading-relaxed">Marks: {user.class10.class10Marks}</p>
                    </div>
                  </div>
                </div>

                {/* Class 12 Details */}
                <div className="mb-10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    &gt;
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mt-6">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">Class {user.class12.class}</h2>
                    </div>
                  </div>
                </div>

                {/* Class 10 Details */}
                <div className="mb-10">
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                      <Image
                        src={user.class12.url}
                        alt="Class 10 School"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">{user.class12.class12School}</h2>
                      <p className="leading-relaxed">Marks: {user.class12.class12Marks}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    &gt;
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mt-6">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">{user.college.course}</h2>
                    </div>
                  </div>
                </div>

                {/* Class 10 Details */}
                <div className="mb-10">
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                      <Image
                        src={user.college.url}
                        alt="Class 10 School"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-white mb-1 text-xl">{user.college.name}</h2>
                      <p className="leading-relaxed">{user.college.dept}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Tech Stacks</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Though I'm a MERN stack developer but I'm comfortable in the following technologies
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {techStacks.map((techStack, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative h-full flex items-center bg-gray-900 border border-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 group-hover:text-white">
                    <img
                      alt={techStack.name}
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={techStack.url}
                    />
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-300 group-hover:text-red-600">{techStack.name}</h2>
                      <p className="text-gray-500 group-hover:text-violet-600">
                        I have {techStack.fluency} fluency in this tech
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default page