export default function About() {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white border-b pb-2">
        About <span className="text-primary-500">Me</span>
      </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="p-4 rounded-3xl bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              <h4 className="font-bold">Buddhi Dharma University</h4>
              <p>Bachelor of Computer Science</p>
              <p>GPA: 3.61</p>
              <p className="text-sm mt-2">2020 - 2024</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="p-4 rounded-3xl bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              <h4 className="font-bold">PT Inovasi Mitra Sejati</h4>
              <p>Here, my role is as a full-stack developer developing a multi-financing application with a "clean architecture" and implementing 
                microservices under the project name "360." My job here is to create the API and interface for this application across various 
                modules such as loan origination, operating leases, and others. </p>
              <p className="text-sm mt-2">2024 - Now</p>
            </div>
          </div>
          
          <div/>

          <div>
            {/* <h3 className="text-xl font-semibold mb-4">Experience</h3> */}
            <div className="p-4 rounded-3xl bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              <h4 className="font-bold">Enigmacamp Trainee</h4>
              <p>Learn for 4 months fullstack developer using java springboot, react js and react native</p>
              <p className="text-sm mt-2">2024 - 2025</p>
            </div>
          </div>
        </div>
      </section>
    );
  }