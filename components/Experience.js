import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";


export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-Epilogue lg:text-6xl md:text-6xl text-4xl lg:mt-3 md:mt-3 mt-0 font-semibold text-white/90 text-center flex items-center justify-center space-x-3">
          <LuBriefcaseBusiness className="text-white lg:text-6xl md:text-6xl text-4xl" /> {/* Responsive icon size */}
          <span>Experience</span>
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Software engineer with over 2 years of experience.
        </p>

        {/* Experience Cards */}
        <div className="mt-8 space-y-6">
          {/* Card 1: Research Assistance */}
          <motion.div
            className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Vertical Line (Hidden on Mobile) */}
            <div className="w-1 h-24 bg-gray-500 hidden md:block"></div>

            {/* Logo */}
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <Image
                src="/semo-logo.png"
                alt="Semo Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="font-Epilogue text-2xl font-semibold">Research Assistance</h3>
                  <p className="text-gray-400 font-baskerville pl-1">Southeast Missouri State University</p>
                  <div className="font-baskerville flex items-center text-gray-400 mt-1 pl-2 hidden md:flex">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Cape Girardeau, Missouri</span>
                  </div>
                </div>
                
                {/* Duration (Visible on Mobile and Desktop) */}
                <div className="flex items-center text-gray-400 bg-gray-700 px-3 py-1 rounded-lg shadow mt-4 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>Jan 2025 - Present</span>
                </div>
              </div>

              <p className="mt-2 text-gray-300 pl-1">
                Deep learning and neural networks development, building an emotion recognition model using a dataset of 4000+ images across 7+ categories.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Bajaj Finserv */}
          <motion.div
            className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-1 h-24 bg-gray-500 hidden md:block"></div>

            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <Image
                src="/bajaj-logo.png"
                alt="Bajaj Finserv Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="font-Epilogue text-2xl font-semibold">Software Engineer</h3>
                  <p className="font-baskerville text-gray-400 pl-1">Bajaj Finserv</p>
                  <div className="font-baskerville flex items-center text-gray-400 mt-1 pl-2 hidden md:flex">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>

                {/* Duration (Visible on Mobile and Desktop) */}
                <div className="flex items-center text-gray-400 bg-gray-700 px-3 py-1 rounded-lg shadow mt-4 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>Jan 2023 - Jul 2024</span>
                </div>
              </div>

              <p className="mt-2 text-gray-300 pl-1">
                Developed a Progressive Web App (PWA) for Android to meet business requirements and built a release distribution platform similar to AppCenter.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Binary Dots */}
          <motion.div
            className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-1 h-24 bg-gray-500 hidden md:block"></div>

            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <Image
                src="/binarydots.png"
                alt="Binary Dots Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="font-Epilogue text-2xl font-semibold">Android Developer</h3>
                  <p className="font-baskerville text-gray-400 pl-1">Binary-Dots Pvt Ltd</p>
                  <div className="font-baskerville flex items-center text-gray-400 mt-1 pl-2 hidden md:flex">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Jhansi, Uttar Pradesh</span>
                  </div>
                </div>

                {/* Duration (Visible on Mobile and Desktop) */}
                <div className="flex items-center text-gray-400 bg-gray-700 px-3 py-1 rounded-lg shadow mt-4 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>Apr 2022 - Jun 2022</span>
                </div>
              </div>

              <p className="mt-2 text-gray-300 pl-1">
                Built and optimized Android SDKs, improved app performance.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
