import mountain from "../assets/projects/mountain.png"
import fruit from "../assets/projects/fruitCatcher.png"
import trashbin from "../assets/projects/trashbin.jfif"
import bmi from "../assets/projects/bmi.png"

export default [
    {
      title: "Automatic Trash Can",
      description: "Built using Arduino and HCSR04 sensor to automatically open when detecting human presence.",
      technologies: ["Arduino", "Arduino IDE", "Ultrasonic Sensor"],
      localImage: trashbin ,
      externalLink: "https://jurnal.ubd.ac.id/index.php/rubin/article/download/2092/1386/6353"
    },
    {
      title: "HikeMate",
      description:
        "A web application for managing mountain climbing tickets with user authentication and booking system.",
      technologies: ["Reactjs", "Nodejs", "Java Spring Boot", "PostgreSQL"],
      localImage: mountain ,
      externalLink: "https://hikemate-z9e6.vercel.app/"
    },
    {
      title: "Fruit Catcher",
      description: "A desktop game that uses hand gesture tracking technology to move the cursor with certain gestures. The purpose of making this game is to help children with Down syndrome stimulate their fine motor skills.",
      technologies: ["Python", "MediaPipe", "OpenCV", "NumPy", "PyGame"],
      localImage: fruit ,
      externalLink: "https://github.com/wndxx/fruit-catcher"
    },
    {
      title: "BMI Calculator",
      description: "A bmi calculator web application.",
      technologies: ["Javascript", "Bootstrap", "ReactJs"],
      localImage: bmi ,
      externalLink: "https://bmi-calculator-gamma-eosin-82.vercel.app/"
    },
  ];