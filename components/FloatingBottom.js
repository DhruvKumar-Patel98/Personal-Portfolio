import { FaLinkedin, FaGithub, FaHome, FaEnvelope } from "react-icons/fa"; // Importing icons from react-icons

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center mb-4">
      {/* Black Background Card with Rounded Corners */}
      <div className="bg-black p-4 rounded-full shadow-lg flex space-x-8">
        <a
          href="https://www.linkedin.com/in/dhruvkumarpatel1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-2xl md:text-3xl hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DhruvKumar-Patel98"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="/"
          className="text-white text-3xl sm:text-2xl md:text-3xl hover:text-red-500 transition duration-300"
        >
          <FaHome />
        </a>
        <a
          href="mailto:dhruvkumarpatel9726@gmail.com"
          className="text-white text-3xl sm:text-2xl md:text-3xl hover:text-green-500 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
