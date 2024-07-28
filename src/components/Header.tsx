"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? 'mr-5 text-blue-600 font-bold animate-text bg-gradient-to-r from-blue-500 via-slate-300 to-blue-500 bg-clip-text text-transparent text-xl font-black'
      : 'mr-5 hover:text-white';

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 mr-5 text-blue-600 font-bold animate-text bg-gradient-to-r from-slate-800 via-slate-300 to-slate-800 bg-clip-text text-transparent text-xl">Biswarup's Page</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className={linkClasses('/')}>Home</Link>
          <Link href="/about" className={linkClasses('/about')}>About</Link>
          <Link href="/projects" className={linkClasses('/projects')}>Projects</Link>
          <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
        </nav>
        <AuthModal />
      </div>
    </header>
  );
};

export default Header;
