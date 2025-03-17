"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

export default function About() {

  const [openDropdown, setOpenDropdown] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleDropdown = (identifier: string) => {
    setOpenDropdown((prev) => (prev === identifier ? "" : identifier));
  };


    return (
      <div className="grid grid-rows-[20px_0.3fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header>
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


        <div className="row-start-1 hidden sm:flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2">
          <Link
            className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
            href="/"
          >
            <Image src="/home.svg" alt="Home icon" width={16} height={16} />
            Home
            </Link>
          <a className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600">
            <Image src="/user.svg" alt="User icon" width={16} height={16} />
            About Me
          </a>
          <Link
            className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
            href="/projects"
          >
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Projects
          </Link>
        </div>
      </header>
  
        <main className="flex gap-2 row-start-2 justify-start">

        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="sm:hidden p-3 absolute top-0 left-0 m-4 z-40"
        >
          <Image src="/contact.svg" alt="contact" width={24} height={24} />
          </button>
          
          <div className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50 transform transition-transform duration-700 ease-in-out ${
                contactOpen ? "translate-x-0" : "-translate-x-full"
              }`}>

          {contactOpen && (
            <div
              className="fixed inset-0 bg-black z-40"
              onClick={() => setContactOpen(false)} 
            ></div>
          )}
          <div className="relative z-50 w-100 p-5 bg-black shadow-lg flex flex-col items-center gap-5">
            <div className="w-64 h-64 rounded-full overflow-hidden border-gray-600 border-2">
              <Image
                className="object-fill scale-150"
                src="/linkedin.jpeg"
                alt="profile pic"
                width={250}  
                height={250} 
                quality={100} 
              />
            </div>
            <a className="text-xl font-light font-[family-name:var(--font-geist-mono)]">
              Yun Keng (Troy) Leong
            </a>
            <a className="text-xl font-[family-name:var(--font-geist-mono)]">
              Contacts
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              src="/mail.svg"
              alt="Mail icon"
              width={20}
              height={20}
              />
              : troyleong@hotmail.com
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={20}
              height={20}
              />
              : linkedin.com/in/yun-keng-leong/
            </a>
          </div>
          </div>
          
          <div className="hidden sm:flex flex-col items-center gap-5">
            <div className="row-start-1 w-64 h-64 rounded-full overflow-hidden border-gray-600 border-2">
              <Image
                className="object-fill scale-150"
                src="/linkedin.jpeg"
                alt="profile pic"
                width={250}  
                height={250} 
                quality={100} 
              />
            </div>
            <a className="text-xl font-light font-[family-name:var(--font-geist-mono)]">
              Yun Keng (Troy) Leong
            </a>
            <a className="text-xl font-[family-name:var(--font-geist-mono)]">
              Contacts
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              src="/mail.svg"
              alt="Mail icon"
              width={20}
              height={20}
              />
              : troyleong@hotmail.com
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={20}
              height={20}
              />
              : linkedin.com/in/yun-keng-leong/
            </a>
          </div>
          <div className="flex-1 ml-8 pr-4 h-[650px] overflow-y-scroll my-scrollbar flex flex-col gap-y-4 font-[family-name:var(--font-geist-mono)]" >
            <p className="text-4xl  font-bold ">Introduction</p>
            <p className="text-xl">Hi, I am Troy, a passionate software developer with expertise in creating intuitive and scalable applications. I thrive on problem-solving, continuous learning, and building technology solutions that make an impact.</p>
            
            <p className="text-4xl font-bold mt-10">Education</p>
            <div className="flex justify-between">
              <p className="text-xl">Master of Information Technology - Computing</p>
              <p className="text-xl">Jul 2023- Dec 2024</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">Bachelor of Science - Computing and Software Systems</p>
              <p className="text-xl">Feb 2020- Jul 2023</p>
            </div>
            
            <p className="text-4xl font-bold mt-10">Work Experiences</p>
            <p className="text-xl italic opacity-65">Click on them for more details</p>
            <div className="flex justify-between">
              <p className="text-xl cursor-pointer" onClick={() => toggleDropdown("regeneration")}>App Developer Intern at Regeneration Projects</p>
              <p className="text-xl ">Jul 2024 - Oct 2024</p>
            </div>
            {openDropdown === "regeneration" && (
            <ul className="list-disc ml-8">
              <li className="text-xl">Led as Scrum Master for development of Two Bays mobile application, responsible for managing all frontend development</li>
              <li className="text-xl">Facilitated agile ceremonies and coordinated cross-functional teams to track progress and maintain timely delivery of features</li>
              <li className="text-xl">Developed responsive, user-friendly interfaces in Flutter by translating UI/UX design mockups into interactive components</li>
              <li className="text-xl">Integrated Dart pages for seamless navigation, optimising performance through code refactoring to ensure smooth transitions</li>
              <li className="text-xl">Executed rigorous testing and debugging on multiple devices to ensure cross-platform compatibility</li>
            </ul>
              )}
            <div className="flex justify-between mt-5">
              <p className="text-xl cursor-pointer" onClick={() => toggleDropdown("aakonsult")}> Junior Software Developer & UI Design Intern at AAkonsult</p>
              <p className="text-xl ">Nov 2023- Feb 2024</p>
            </div>
            {openDropdown === "aakonsult" && (
            <ul className="list-disc ml-8">
              <li className="text-xl">Led a team of interns to create 3 presentations on the company&apos; web application, highlighting its functionality and competitor analysis, utilised in live client demonstrations</li>
              <li className="text-xl">Implemented visually appealing email body templates using HTML and CSS, tailored to align with clients&apos;  branding</li>
              <li className="text-xl">Conducted comprehensive testing of constructed application, identifying and recommending 2 solutions for improvements</li>
              <li className="text-xl">Collaborated with senior developers on evaluating 8 clients&apos;  technical enquiries and proposing practical solutions to head developer</li>
              <li className="text-xl">Partnered with Marketing department to enhance client&apos;s knowledge by updating 10 knowledge base articles</li>
            </ul>
            )}
            <div className="flex justify-between mt-5">
              <p className="text-xl cursor-pointer" onClick={() => toggleDropdown("bankofchina")}>Data Division Intern at Bank of China</p>
              <p className="text-xl ">Jan 2022- Feb 2022</p>
            </div>
            {openDropdown === "bankofchina" && (
            <ul className="list-disc ml-8">
              <li className="text-xl">Suggested a new initiative in data collection from partnering company and execute preprocessing on Oracle</li>
              <li className="text-xl">Executed Python code to perform key values extraction from documents, plotting graphs and tables to present results for clients</li>
              <li className="text-xl">Coordinated with the team to analyse the company&apos;s monthly datasets, identifying trends for marketing and sales strategic decisions using Power BI</li>
              <li className="text-xl">Managed and compiled customers&apos; data using a Microsoft SQL Server </li>
            </ul>
            )}
            <p className="text-4xl font-bold mt-10">Certification & Skills</p>
            <p className="text-xl font-bold">Certification</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">AWS Certified Cloud Practitioner</li>
            </ul>
            <p className="text-xl font-bold">Programming Languages</p>
            <ul className="list-disc ml-8 columns-2">
              <li className="text-xl">Python</li>
              <li className="text-xl">C</li>
              <li className="text-xl">C Sharp</li>
              <li className="text-xl">Java</li>
              <li className="text-xl">JavaScript</li>
              <li className="text-xl">TypeScript</li>
              <li className="text-xl">Dart</li>
              <li className="text-xl">HTML/CSS</li>
              <li className="text-xl">SQL</li>
              <li className="text-xl">R</li>
            </ul>
            <p className="text-xl font-bold">Communication Languages</p>
            <ul className="list-disc ml-8">
            <li className="text-xl">English</li>
              <li className="text-xl">Mandarin</li>
              <li className="text-xl">Malay</li>
              <li className="text-xl">Cantonese</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
  