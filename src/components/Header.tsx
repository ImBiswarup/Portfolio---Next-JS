"use client";

import Link from 'next/link';
import React from 'react';
import AuthModal from './AuthModal';


const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl"><span className='text-blue-600'>B</span>iswarup</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">Home</Link>
          <Link href="/about" className="mr-5 hover:text-white">About</Link>
          <Link href="/projects" className="mr-5 hover:text-white">Projects</Link>
          <Link href="/contact" className="mr-5 hover:text-white">Contact</Link>
        </nav>
        <AuthModal />
      </div>
    </header>
  );
};

export default Header;
