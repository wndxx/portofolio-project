export default function About() {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              <h4 className="font-bold">Buddhi Dharma University</h4>
              <p>Bachelor of Computer Science</p>
              <p>GPA: 3.61</p>
              <p className="text-sm mt-2">2020 - 2024</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              <h4 className="font-bold">Enigmacamp Trainee</h4>
              <p>Learn for 4 months fullstack developer using java springboot, react js and react native</p>
              <p className="text-sm mt-2">2024 - 2025</p>
            </div>
          </div>
        </div>
      </section>
    );
  }