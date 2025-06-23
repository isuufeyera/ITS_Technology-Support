'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // You can use any icon library
import Search from './Search';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md relative z-50'>
      <div className='flex justify-between items-center max-container padding-container py-5 max-w-7xl mx-auto'>
        {/* Logo */}
        <Link href='/'>
          <Image src='/itsc_logo.avif' alt='logo' width={74} height={29} />
        </Link>

        {/* Desktop Nav Links */}
        <ul className='hidden lg:flex h-full gap-12 items-center'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='relative group'>
              <Link
                href={link.href}
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
              >
                {link.label}
              </Link>

              {link.submenu && (
                <div className='absolute top-full left-0 mt-2 w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50'>
                  <ul className='flex bg-white border border-gray-200 rounded shadow-lg px-4 py-2 space-x-4 whitespace-nowrap'>
                    {link.submenu.map((sublink, idx) => (
                      <li key={idx}>
                        <Link
                          href={sublink.href}
                          className='text-sm text-gray-800 hover:text-blue-500 transition'
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search & Mobile Toggle */}
        <div className='flex items-center gap-4'>
          <Search />
          <button
            className='lg:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-white px-6 pb-6'>
          <ul className='flex flex-col gap-4'>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className='block py-2 text-gray-700 font-medium hover:text-blue-600'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>

                {link.submenu && (
                  <ul className='ml-4 mt-1 space-y-1'>
                    {link.submenu.map((sublink, idx) => (
                      <li key={idx}>
                        <Link
                          href={sublink.href}
                          className='block text-sm text-gray-600 hover:text-blue-500'
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
