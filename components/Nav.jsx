
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

import logo1 from '@/public/logo1.svg';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 text-black top-0">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          {!isOpen && (
            <Link href="/">
              <Image src={logo1} alt="Policy CTRL Logo" width={100} height={100} style={{ cursor: 'pointer' }} />
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
            <li><Link href="/about"><span className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</span></Link></li>
            <li><Link href="/submit-meme"><span className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</span></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
