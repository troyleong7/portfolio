import Image from "next/image";
import Link from "next/link"; 

export default function Projects() {
    return (
      <div className="grid grid-rows-[20px_0.3fr] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="row-start-1 flex gap-8 flex-wrap items-center justify-center bg-black p-1 rounded-3xl border-gray-700 border-2 max-w-screen-lg mx-auto">
          <Link className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/">
            <Image
              src="/home.svg"
              alt="Home icon"
              width={16}
              height={16}
            />
            Home
          </Link>
          <Link className="flex items-center gap-2 p-2 rounded-3xl hover:bg-gray-800 transition-all duration-700"
          href="/about">
            <Image
              src="/user.svg"
              alt="User icon"
              width={16}
              height={16}
            />
            About Me
          </Link>
  
          <a className="flex items-center gap-2 p-2 rounded-3xl bg-gray-600 ">
            <Image
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
            <p className="text-4xl  font-bold">Internship Projects</p>
            <p className="text-2xl font-bold">Two Bays App</p>
            <Image
              style={{ borderRadius: "20px" }}
              src="/twobaysapp.png"
              alt="Two Bays"
              width={200}
              height={200}
            />
            
            <p className="text-xl"> Australia&apos;s education system is failing to transform eco-anxiety into action, and it is affecting young people&apos;s wellbeing, engagement, productivity, social connections, and overall life progression. The Two Bays App will equip young people with the ecological literacy and leadership skills they need for life through digital learning journeys that explore local urban ecosystems and waterways. For this project, I am fortunate enough to be selected as the Scrum Master. My responsibilities are:</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">Fully manage the app&apos;s frontend development using Flutter</li>
              <li className="text-xl">Collaborate with the company&apos;s design team and developed UI for the app</li>
              <li className="text-xl">Ensuring that all team members share common goals and a unified vision, while proactively solving any obstacles the team faces</li>
              <li className="text-xl">Conducted comprehensive frontend testing and debugging across multiple devices to ensure a seamless user experience and reliable cross-platform compatibility.</li>
            </ul>
            <p className="text-4xl  font-bold mt-10">University Projects</p>
            <p className="text-2xl font-bold">Unirec Group Project</p>
            <Image
              style={{ borderRadius: "20px" }}
              src="/unirec.png"
              alt="UniRec"
              width={200}
              height={200}
            />
            <p className="text-xl">Unirec is a web-based database that records all the buildings at the University of Melbourne. Its main purpose is to track these buildings and allow students and alumni to rate their features, highlight strengths, and offer recommendations. The goal is to enhance the university experience by creating a community where students can share their thoughts about campus buildings and facilities. My role is to:</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">Serve as a frontend developer for Unirec, a web database application for storing university building details and community ratings</li>
              <li className="text-xl">Designed and implemented user interfaces using JavaScript, HTML/CSS, Axios, and the React library to enhance the user experience</li>
            </ul>

            <p className="text-2xl font-bold mt-5">SensorShip Android Mobile Game Group Project</p>
            <Image
              style={{ borderRadius: "20px" }}
              src="/sensorship.png"
              alt="sensoreship"
              width={200}
              height={200}
            />
            <p className="text-xl">SensorShip is an Android space shooter game that can be played using three different sensors on your phone. The game offers three playstyles: face movement with voice (using the camera and microphone), touchscreen (using the screen sensor), and tilting your phone (using the gyroscope). Each time the ship is hit by an alien, part of the screen becomes censored—hence the name SensorShip. My role is to:</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">Create the base game within Android Studio using Java and libGDX package</li>
              <li className="text-xl">Designed the game UI and implemented the touchscreen setting </li>
            </ul>

            <p className="text-2xl font-bold mt-5">Automated Fact Checking System Project</p>
            <p className="text-xl">The task is to train a model with a labelled claim file. Then, when given an unlabelled claim file, the model we built has to go through a list of relevant evidence and classify the claim. My role is to:</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">Investigated TF-IDF and Bag of Words (BOW) techniques for transforming words into a format computers can decipher</li>
              <li className="text-xl">Implement a non-pre-trained LSTM model to extract and assess important text components relevant to fact-checking process</li>
            </ul>

            <p className="text-2xl font-bold mt-5">Generic Real Estate Consulting Project</p>
            <p className="text-xl">The rental prices of residential properties vary across Victoria. The team must investigate this issue by identifying the internal and external factors influencing these differences. As a result, the team should provide insights into areas with higher livability and affordability, as well as predictions on potential rental price increases. My role is to:</p>
            <ul className="list-disc ml-8">
              <li className="text-xl">Carried out research and data scraping to identify factors influencing rental prices for homes and apartments across Victoria</li>
              <li className="text-xl">Plotted detailed graphs and tables using Python and Jupyter Notebook to visualise and interpret research findings</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
  