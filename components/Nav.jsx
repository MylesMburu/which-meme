
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { RxCrumpledPaper } from "react-icons/rx";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-violet-100 border-b border-gray-200 text-black top-0 fixed w-full">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          {!isOpen && (
            <Link href="/" className='flex flex-row gap-2 font-bold text-xl'>
                WhichMeme
              <RxCrumpledPaper className='mt-1' />
            </Link>
          )}

          {/* Menu Toggle Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX className="text-black cursor-pointer mb-24" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-black cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex ${isOpen ? 'flex flex-col mr-24 gap-2 ' : 'hidden'} md:flex-row gap-4`}>
            <li><Link href="/about"><span className="nav-hov" onClick={() => setIsOpen(false)}>About</span></Link></li>
            <li><Link href="/submit-meme"><span className="nav-hov" onClick={() => setIsOpen(false)}>Submit a Meme</span></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
