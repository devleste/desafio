import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <Link
      href='/#'
      className='flex flex-col sm:flex-row w-full items-center sm:items-baseline justify-center mb-14'
    >
      <Logo className='w-56 flex-shrink-0 mb-8' />
      <h1 className='text-4xl text-font-first font-medium'>
        <span className='text-7xl text-gray-500'>C</span>
        ontact
      </h1>
    </Link>
  );
};

export default Header;
