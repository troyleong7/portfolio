import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2">
        <a
          className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600 "
        >
          <Image
            aria-hidden
            src="/home.svg"
            alt="Home icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <a
          className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/about"
        >
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

    <main className="flex gap-8 row-start-2 items-center">
        <div className="flex gap-5 flex-col ">
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
      </main>
    </div>
  );
}
