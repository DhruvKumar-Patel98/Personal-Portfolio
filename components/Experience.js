import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-Epilogue lg:text-6xl md:text-6xl text-4xl lg:mt-3 md:mt-3 mt-0 font-semibold text-white/90 text-center">
          Experience
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Software engineer with over 2 years of experience.
        </p>

        {/* Experience Cards */}
        <div className="mt-8 space-y-6">
          {/* Card 1: Research Assistance */}
          <motion.div
            className="flex items-start space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Vertical Line */}
            <div className="w-1 h-24 bg-gray-500"></div>

            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src="/semo-logo.png"
                alt="Semo Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full relative">
              <h3 className="text-2xl font-semibold">Research Assistance</h3>
              <p className="text-gray-400">Southeast Missouri State University</p>
              <div className="absolute right-6 top-6 flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>Jan 2025 - Present</span>
              </div>
              <p className="mt-2 text-gray-300">
                Working on deep learning, neural networks, and image processing.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Bajaj Finserv */}
          <motion.div
            className="flex items-start space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Vertical Line */}
            <div className="w-1 h-24 bg-gray-500"></div>

            {/* Company Logo */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src="/bajaj-logo.png"
                alt="Bajaj Finserv Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full relative">
              <h3 className="text-2xl font-semibold">Software Engineer</h3>
              <p className="text-gray-400">Bajaj Finserv</p>
              <div className="absolute right-6 top-6 flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>2021 - 2023</span>
              </div>
              <p className="mt-2 text-gray-300">
                Developed Android applications and cloud solutions on Azure.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Binary Dots */}
          <motion.div
            className="flex items-start space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Vertical Line */}
            <div className="w-1 h-24 bg-gray-500"></div>

            {/* Company Logo */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src="/binarydots.png"
                alt="Binary Dots Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md w-full relative">
              <h3 className="text-2xl font-semibold">Android Developer</h3>
              <p className="text-gray-400">Binary-Dots Pvt Ltd</p>
              <div className="absolute right-6 top-6 flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>2019 - 2021</span>
              </div>
              <p className="mt-2 text-gray-300">
                Built and optimized Android SDKs, improved app performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
