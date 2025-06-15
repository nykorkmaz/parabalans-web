'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/parabalans_logo.png"
                alt="ParaBalans Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold gradient-text">ParaBalans</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-parabalans-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-parabalans-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Özellikler
              </Link>
              <Link
                href="/guide"
                className="text-gray-700 hover:text-parabalans-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Kullanım Kılavuzu
              </Link>
              <Link
                href="/sss"
                className="text-gray-700 hover:text-parabalans-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                SSS
              </Link>
              <a
                href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                İndir
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-parabalans-blue focus:outline-none focus:text-parabalans-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-700 hover:text-parabalans-blue block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-parabalans-blue block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Özellikler
              </Link>
              <Link
                href="/guide"
                className="text-gray-700 hover:text-parabalans-blue block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kullanım Kılavuzu
              </Link>
              <Link
                href="/sss"
                className="text-gray-700 hover:text-parabalans-blue block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SSS
              </Link>
              <a
                href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white block px-3 py-2 rounded-lg text-base font-medium mx-3 mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                İndir
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
