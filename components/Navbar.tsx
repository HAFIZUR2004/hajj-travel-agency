"use client";
import { useState, useEffect } from "react";
import { Landmark, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: 'হোম', href: '/' },
  { name: 'হজ্জ প্যাকেজ', href: '/hajj-packages' },
  { name: 'ওমরাহ প্যাকেজ', href: '/umrah-packages' },
  { name: 'সেবাসমূহ', href: '/services' },
  { name: 'গ্যালারি', href: '/gallery' },
  { name: 'যোগাযোগ', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // বর্তমান পেজের পাথ

  // স্ক্রল হলে শ্যাডো বাড়ানোর জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // মোবাইল মেনু ওপেন থাকলে স্ক্রোল ব্লক করা
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg" 
                 style={{background: 'linear-gradient(135deg, #0B4D2E, #1A6B3A)'}}>
              <Landmark size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-lg transition-colors group-hover:text-[#C9A84C]" style={{color: '#0B4D2E'}}>
                NoorTravel
              </span>
              <p className="text-xs" style={{color: '#C9A84C', lineHeight: 1}}>হজ্জ ও ওমরাহ</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative transition-colors group ${
                    isActive ? 'text-[#C9A84C]' : 'hover:text-[#C9A84C]'
                  }`}
                  style={{color: isActive ? '#C9A84C' : '#374151'}}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                        style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-sm font-medium px-4 py-2 rounded-lg border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{borderColor: '#0B4D2E', color: '#0B4D2E'}}
            >
              লগইন
            </Link>
            <Link 
              href="/booking" 
              className="text-sm font-semibold px-5 py-2 rounded-lg text-white transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
                backgroundSize: '200% 200%',
                color: '#0B4D2E'
              }}
            >
              বুকিং করুন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="মেনু"
          >
            {menuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide in animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'text-[#C9A84C] bg-yellow-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 px-4 flex flex-col gap-3">
              <Link 
                href="/login" 
                className="w-full text-center text-sm font-medium py-3 rounded-lg border transition-colors hover:bg-gray-50"
                style={{borderColor: '#0B4D2E', color: '#0B4D2E'}}
                onClick={() => setMenuOpen(false)}
              >
                লগইন
              </Link>
              <Link 
                href="/booking" 
                className="w-full text-center text-sm font-semibold py-3 rounded-lg text-white transition-all hover:shadow-md"
                style={{background: '#C9A84C', color: '#0B4D2E'}}
                onClick={() => setMenuOpen(false)}
              >
                বুকিং করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}