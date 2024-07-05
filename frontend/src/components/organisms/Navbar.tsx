'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.svg';
import SearchBar from '@components/cells/SearchBar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border border-gray-200  px-4 md:px-16 lg:px-24 py-2.5 rounded relative z-30">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center pl-0 p-2"
        >
          <Image
            src={logo}
            height={48}
            width={135}
            className="h-9 w-28 md:h-12 md:w-32"
            alt="logo"
            title="logo"
          />
        </Link>
        {pathname === '/' && <SearchBar />}
      </div>
    </nav>
  );
};

export default Navbar;
