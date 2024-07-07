"use client";

import { userData } from "@/utils/Data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:flex sm:justify-center pl-1 pr-1 gap-x-2 h-full max-w-full bg-gray-900">
      {userData.map((user) => (
        <div key={user.id} className="w-full flex flex-col sm:flex-row items-center justify-center max-w-full p-4">
          <div className="relative group cursor-pointer w-full sm:w-[40%] flex items-center justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full flex items-center justify-center bg-gray-800 p-6 rounded-full">
              <Image
                className="rounded-full"
                src={user.imageUrl}
                width={400}
                height={400}
                alt="image"
              />
            </div>
          </div>
          <div className="w-full sm:w-[60%] flex flex-col items-center sm:items-start justify-center max-w-full mt-5 sm:mt-0 sm:ml-5">
            <div className="desc text-white p-4 sm:p-8 bg-gray-800 rounded-lg">
              {user.description}
            </div>
            <div className="btn mt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-5">
              <Link href="/contact" className="border rounded-full p-2 text-white hover:bg-white hover:text-gray-900 transition duration-300">
                Hire Me
              </Link>
              <button className="border rounded-full p-2 text-white hover:bg-white hover:text-gray-900 transition duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
