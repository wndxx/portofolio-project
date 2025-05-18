import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import pp from '../assets/profile/windipp.JPG';
import videoBg from '../../public/video/evangelion1.mp4'; 

export default function Hero({ setActiveSection }) {
  const [showH3, setShowH3] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [showCursorH2, setShowCursorH2] = useState(true);
  const [showCursorH3, setShowCursorH3] = useState(true);
  const [showCursorP, setShowCursorP] = useState(true);

  useEffect(() => {
    // H2 selesai dalam 2.5 detik
    const h2End = setTimeout(() => setShowCursorH2(false), 2500);
    const h3Start = setTimeout(() => setShowH3(true), 2600);
    const h3End = setTimeout(() => setShowCursorH3(false), 4400);
    const pStart = setTimeout(() => setShowP(true), 4600);
    const pEnd = setTimeout(() => setShowCursorP(false), 8500);
    const btnStart = setTimeout(() => setShowButton(true), 8800);

    return () => {
      clearTimeout(h2End);
      clearTimeout(h3Start);
      clearTimeout(h3End);
      clearTimeout(pStart);
      clearTimeout(pEnd);
      clearTimeout(btnStart);
    };
  }, []);

  return (
    <section className="relative mb-12 py-12 flex items-center min-h-[80vh] md:min-h-screen overflow-x-hidden">
      {/* Background Video - Responsif */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="min-w-full min-h-full object-cover scale-110"
          style={{ transform: 'scale(1.5)' }}
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Konten - Responsif */}
      <div className="w-full px-[4vw] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Bagian Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <Typewriter
                words={["Hello, I'm Windi Saputra"]}
                typeSpeed={70}
                delaySpeed={1000}
                cursor={showCursorH2}
              />
            </h2>

            {showH3 && (
              <h3 className="text-xl md:text-3xl lg:text-4xl text-primary-500 mb-4">
                <Typewriter
                  words={['Front End Programmer']}
                  typeSpeed={60}
                  delaySpeed={500}
                  cursor={showCursorH3}
                />
              </h3>
            )}

            {showP && (
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-white max-w-2xl mx-auto md:mx-0">
                <Typewriter
                  words={[
                    "I'm passionate about database development and currently enhancing my skills in web application development."
                  ]}
                  typeSpeed={35}
                  delaySpeed={300}
                  cursor={showCursorP}
                />
              </p>
            )}

            {showButton && (
              <button
                onClick={() => setActiveSection("contact")}
                className="px-6 py-3 text-lg md:text-xl rounded-3xl font-medium bg-primary-500 hover:bg-primary-600 text-white transition transform hover:scale-105"
              >
                Contact Me
              </button>
            )}
          </div>

          {/* Bagian Gambar - Responsif */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-300">
              <img
                src={pp}
                alt="Profile Picture"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/256?text=Profile+Image';
                  e.target.className = 'w-full h-full object-contain p-4';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}