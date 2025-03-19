"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [gradient, setGradient] = useState("linear-gradient(0deg,rgb(40, 50, 50),rgb(0, 0, 0))");

  const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any; }) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    const xPercent = ((clientX - left) / width) * 100;
    const yPercent = ((clientY - top) / height) * 100;
    
    // Generate a dynamic gradient based on cursor position
    setGradient(`radial-gradient(circle at ${xPercent}% ${yPercent}%,rgba(40, 50, 50, 0.7), rgb(0, 0, 0)`);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    style={{ background: gradient }}
        onMouseMove={handleMouseMove}>
      <header>
        {/* Button to toggle menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-3 absolute top-0 right-0 m-4 z-40"
        >
          <Image src="/burger.svg" alt="burger" width={24} height={24} />
        </button>

        <div className={`fixed top-0 right-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50 transform transition-transform duration-700 ease-in-out ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}>

          {menuOpen && (
            <div
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)} 
            ></div>
          )}
          <Link href="/" className="flex gap-2 py-2 text-2xl z-50" onClick={() => setMenuOpen(false)}>
            <Image src="/home.svg" alt="Home icon" width={16} height={16} />
            Home
          </Link>
          <Link href="/about" className="flex gap-2 py-2 text-2xl z-50" onClick={() => setMenuOpen(false)}>
            <Image src="/user.svg" alt="User icon" width={16} height={16} />
            About Me
          </Link>
          <Link href="/projects" className="flex gap-2 py-2 text-2xl z-50" onClick={() => setMenuOpen(false)}>
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Projects
          </Link>
        </div>

        {/* Header for other content */}
        <div className="row-start-1 hidden sm:flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2">
          <a className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600">
            <Image src="/home.svg" alt="Home icon" width={16} height={16} />
            Home
          </a>
          <Link
            className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
            href="/about"
          >
            <Image src="/user.svg" alt="User icon" width={16} height={16} />
            About Me
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
            href="/projects"
          >
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Projects
          </Link>
        </div>
      </header>

      <main className="flex flex-col sm:flex-row-reverse gap-8 row-start-2 items-center p-12 border-2 border-gray-300 rounded-3xl">
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
        <div className="flex gap-5 flex-col sm:text-left">
          <a className="text-xl font-light font-[family-name:var(--font-geist-mono)]">
            Welcome! My name is
          </a>
          <a className="text-5xl font-light font-[family-name:var(--font-geist-mono)]">
            Yun Keng (Troy) Leong
          </a>
          <a className="text-2xl font-light font-[family-name:var(--font-geist-mono)]">
            I am a {" "}
            < ReactTyped
            strings={["Software", "App", "Web"]}
            typeSpeed={100}
            backSpeed={150}
            loop
            showCursor={false}
            />{" "}
            Developer!
          </a>
        </div>
      </main>
    </div>
  );
}