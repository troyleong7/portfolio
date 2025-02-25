"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
      <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-3 absolute top-0 right-0 m-4">
          <Image src="/burger.svg" alt="burger" width={24} height={24} />
        </button>

        {menuOpen && (
  <>
    <div
      className="fixed inset-0 bg-black opacity-50 z-40"
      onClick={() => setMenuOpen(false)} 
    ></div>

    {/* Menu */}
    <div
      className={`fixed top-0 right-0 w-2/3 h-full bg-black text-white flex flex-col items-center justify-center z-50 p-8 transform transition-transform duration-50000 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Link href="/" className="flex gap-2 py-2 text-2xl" onClick={() => setMenuOpen(false)}>
        <Image src="/home.svg" alt="Home icon" width={16} height={16} />
        Home
      </Link>
      <Link href="/about" className="flex gap-2 py-2 text-2xl" onClick={() => setMenuOpen(false)}>
        <Image src="/user.svg" alt="User icon" width={16} height={16} />
        About Me
      </Link>
      <Link href="/projects" className="flex gap-2 py-2 text-2xl" onClick={() => setMenuOpen(false)}>
        <Image src="/file.svg" alt="File icon" width={16} height={16} />
        Projects
      </Link>
    </div>
  </>
)}

        <div className="row-start-1 hidden sm:flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2">
        <a
          className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600 "
        >
          <Image
            src="/home.svg"
            alt="Home icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <Link
          className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/about"
        >
          <Image
            src="/user.svg"
            alt="User icon"
            width={16}
            height={16}
          />
          About Me
        </Link>
        <Link
          className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/projects"
        >
          <Image
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Projects
          </Link>
          </div>
      </header>

      <main className="flex flex-col sm:flex-row-reverse gap-8 row-start-2 items-center">
      <div className="w-64 h-64 rounded-full overflow-hidden border-gray-600 border-2 mb-8 sm:mb-0">
          <Image
            className="object-fill scale-150"
            src="/linkedin.jpeg"
            alt="profile pic"
            width={250}  
            height={250} 
            quality={100} 
          />
        </div>
        <div className="flex gap-5 flex-col sm:text-left ">
          <a className="text-xl font-light font-[family-name:var(--font-geist-mono)]">
            Welcome! My name is 
          </a>
          <a className="text-5xl font-light font-[family-name:var(--font-geist-mono)]">
            Yun Keng (Troy) Leong
          </a>
          <a className="text-2xl font-light font-[family-name:var(--font-geist-mono)]">
            I am a Software/App/Web Developer!
          </a>
        </div>
      </main>
    </div>
  );
}
