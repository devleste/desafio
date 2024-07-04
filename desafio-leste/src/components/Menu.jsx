'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-4 mb-10'>
      <ul className='flex gap-10'>
        <li>
          <Link
            href='/contatos'
            className={`text-2xl transition duration-300 ease-in-out ${
              pathname === '/contatos'
                ? 'text-font-first'
                : 'text-gray-800 hover:text-font-first'
            }`}
          >
            Contatos
          </Link>
        </li>
        <li>
          <Link
            href='/dashboard'
            className={`text-2xl transition duration-300 ease-in-out ${
              pathname === '/dashboard'
                ? 'text-font-first'
                : 'text-gray-800 hover:text-font-first'
            }`}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
