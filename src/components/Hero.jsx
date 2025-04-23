import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import pp from '../assets/profile/windipp.JPG';

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
    <section className="mb-12 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <Typewriter
            words={["Hello, I'm Windi Saputra"]}
            typeSpeed={70}
            delaySpeed={1000}
            cursor={showCursorH2}
          />
        </h2>

        {showH3 && (
          <h3 className="text-xl md:text-2xl text-primary-500 mb-4">
            <Typewriter
              words={['Front End Programmer']}
              typeSpeed={60}
              delaySpeed={500}
              cursor={showCursorH3}
            />
          </h3>
        )}

        {showP && (
          <p className="text-lg mb-6">
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
            className="px-6 py-3 rounded-lg font-medium bg-primary-500 hover:bg-primary-600 text-white transition"
          >
            Contact Me
          </button>
        )}
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-300">
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
    </section>
  );
}
