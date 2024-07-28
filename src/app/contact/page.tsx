"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { userData } from "@/utils/Data";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const contactMe = async () => {
        console.log(name, email, message)
        try {
            const response = await axios.post("/api/users/contact", {
                name, email, message
            });
            toast.success("Message sent successfully!");
            setMessage('')
            console.log(response.data.msg);
        } catch (error) {
            toast.error("Error sending message. Please try again.");
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <ToastContainer />
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Get in touch with me</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Ask whatever you want to know</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name">Your Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='ex: Biswarup Ghosh' id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email">Your email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='ex: biswaurpg451@gmail.com' id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message">Message</label>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="ex: It's a nice project in Next JS" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={contactMe} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <IoMdSend size={25} />
                                </button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <p className="text-indigo-400">biswaurpg451@gmail.com</p>
                                <p className="leading-normal my-5">Ichapur
                                    <br />Kolkata, West Bengal
                                </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <Link href={userData[0].facebook} target="_blank">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </Link>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <Link href={userData[0].twitter} target="_blank">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </Link>
                                    </a>

                                    <a className="ml-4 text-gray-500">
                                        <Link href={userData[0].insta} target="_blank">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </Link>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <Link href={userData[0].linkedin} target="_blank">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452H16.78V14.953c0-1.312-.026-3.004-1.832-3.004-1.833 0-2.114 1.434-2.114 2.917v5.586H9.176V9.748h3.53v1.466h.049c.491-.932 1.693-1.917 3.486-1.917 3.729 0 4.416 2.453 4.416 5.641v5.514zM5.337 8.287a2.062 2.062 0 01-2.062-2.062 2.062 2.062 0 012.062-2.062 2.062 2.062 0 012.062 2.062 2.062 2.062 0 01-2.062 2.062zM7.119 20.452H3.557V9.748h3.562v10.704zM22.225 0H1.771C.791 0 0 .792 0 1.771v20.457C0 23.208.791 24 1.771 24h20.457c.98 0 1.771-.792 1.771-1.771V1.771C23.996.792 23.205 0 22.225 0z"></path>
                                            </svg>
                                        </Link>

                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <Link href={userData[0].github} target="_blank">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M12 0.297C5.372 0.297 0 5.669 0 12.297c0 5.3 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.041-.016-2.042-3.338.724-4.042-1.612-4.042-1.612-.546-1.386-1.332-1.755-1.332-1.755-1.087-.743.083-.727.083-.727 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.806 1.303 3.492.997.108-.775.418-1.303.76-1.603-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.982-.398 3.003-.403 1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.84 1.235 1.912 1.235 3.222 0 4.608-2.805 5.625-5.476 5.92.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.217.694.825.577C20.565 22.092 24 17.593 24 12.297 24 5.669 18.627.297 12 .297z"></path>
                                            </svg>
                                        </Link>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;
