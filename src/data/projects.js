import mountain from "../assets/projects/mountain.png"
import fruit from "../assets/projects/fruitCatcher.png"
import trashbin from "../assets/projects/trashbin.jfif"
import bmi from "../assets/projects/bmi.png"
import peneleh from "../assets/projects/penerbit_peneleh.png"

export default [
    // {
    //   title: "Automatic Trash Can",
    //   description: "Built using Arduino and HCSR04 sensor to automatically open when detecting human presence.",
    //   technologies: ["Arduino", "Arduino IDE", "Ultrasonic Sensor"],
    //   localImage: trashbin ,
    //   externalLink: "https://jurnal.ubd.ac.id/index.php/rubin/article/download/2092/1386/6353"
    // },
    {
      title: "Penerbit Peneleh Landing Page (Published Soon)",
      description: "A Landing page website for Penerbit Peneleh, an independent publisher based in Indonesia. On this work, I was responsible for developing the front-end using Next.js for landing page for several menus and for the admin dashboard for several menus.",
      technologies: ["Next.js", "GoLang", "PostgreSQL", "Tailwind CSS"],
      localImage: peneleh 
      // externalLink: "https://bmi-calculator-gamma-eosin-82.vercel.app/"
    },
    {
      title: "HikeMate",
      description:
        "A web application for managing mountain climbing tickets with user authentication and booking system.",
      technologies: ["React", "Node.js", "Java Spring Boot", "PostgreSQL"],
      localImage: mountain ,
      externalLink: "https://hikemate-z9e6.vercel.app/"
    },
    {
      title: "Fruit Catcher",
      description: "A desktop game that uses hand gesture tracking technology to move the cursor with certain gestures. The purpose of making this game is to help children with Down syndrome stimulate their fine motor skills.",
      technologies: ["Python", "MediaPipe", "OpenCV", "NumPy", "PyGame"],
      localImage: fruit ,
      // externalLink: "https://github.com/wndxx/fruit-catcher"
    },
    // {
    //   title: "BMI Calculator",
    //   description: "A bmi calculator web application.",
    //   technologies: ["Javascript", "Bootstrap", "React"],
    //   localImage: bmi ,
    //   externalLink: "https://bmi-calculator-gamma-eosin-82.vercel.app/"
    // },
  ];