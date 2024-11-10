import Image from "next/image";
import Link from "next/link"; 

export default function About() {
    return (
      <div className="grid grid-rows-[20px_0.3fr] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="row-start-1 flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2 max-w-screen-lg mx-auto">
          <Link className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/">
            <Image
              aria-hidden
              src="/home.svg"
              alt="Home icon"
              width={16}
              height={16}
            />
            Home
          </Link>
          <a className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600 ">
            <Image
              aria-hidden
              src="/user.svg"
              alt="User icon"
              width={16}
              height={16}
            />
            About Me
          </a>
  
          <a
            className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
            href=""
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Projects
          </a>
  
        </header>
  
        <main className="flex gap-2 row-start-2 justify-start">
          <div className="flex flex-col items-center gap-5">
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
              aria-hidden
              src="/phone.svg"
              alt="Phone icon"
              width={20}
              height={20}
              />
              : +(61) 426 070 118
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              aria-hidden
              src="/mail.svg"
              alt="Mail icon"
              width={20}
              height={20}
              />
              : troyleong@hotmail.com
            </a>
            <a className=" flex text-xl font-light font-[family-name:var(--font-geist-mono)]">
              <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={20}
              height={20}
              />
              : linkedin.com/in/yun-keng-leong/
            </a>
          </div>
          <div className="flex-1 ml-8 h-[650px] overflow-y-scroll no-scrollbar" >
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida arcu id lacus hendrerit, ut vulputate lorem volutpat. Aenean sit amet euismod leo. Sed auctor purus in purus varius, nec viverra lorem interdum.</p>
          </div>
        </main>
      </div>
    );
  }
  