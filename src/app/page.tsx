"use client";

import { userData } from "@/utils/Data";
import Image from "next/image";
import Link from "next/link";
import myImg from "../../public/myImg.jpg"
import { useTypewriter } from 'react-simple-typewriter'

export default function Home() {
    const [text] = useTypewriter({
        words: ["Fullstack Dev", "Programmer", "Teacher", "Learner"],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 40,
    });

    return (
        <div className="sm:flex sm:justify-center px-4 py-8 gap-x-6 h-full max-w-full bg-gray-900">
            {userData.map((user) => (
                <div key={user.id} className="w-full flex flex-col sm:flex-row items-center justify-center max-w-full p-4">
                    <div className="relative group cursor-pointer w-full sm:w-[40%] flex items-center justify-center">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-full flex items-center justify-center bg-gray-800 p-6 rounded-full shadow-lg">
                            <Image
                                className="rounded-full"
                                src={myImg}
                                width={400}
                                height={400}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-[60%] flex flex-col items-center sm:items-start justify-center max-w-full mt-5 sm:mt-0 sm:ml-5">
                        <div className="desc text-white p-6 sm:p-8 rounded-lg 
                         transition-transform ease-out transform hover:scale-105">
                            <p className="mb-8 leading-relaxed text-gray-300 text-base md:text-lg lg:text-xl xl:text-2xl font-medium first-letter:text-7xl first-letter:font-bold">
                                A Passionate and aspiring <span className='text-blue-400 font-semibold'>{text}</span> <br /> currently pursuing my B.Tech in <span className='text-blue-400 font-semibold'>Computer Science & Engineering</span> <br /> Throughout my academic journey, I have cultivated a strong foundation in <span className='text-blue-400 font-semibold'>Programming</span> and <span className='text-blue-400 font-semibold'>Development</span>, and I am eager to apply my skills in real-world projects.
                            </p>
                        </div>
                        <div className="btn mt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-5">
                            <Link href="/contact" className="border rounded-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-md transform hover:scale-105 text-xl font-semibold">
                                Hire Me
                            </Link>
                            <button className="border rounded-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-md transform hover:scale-105 text-xl font-semibold">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
