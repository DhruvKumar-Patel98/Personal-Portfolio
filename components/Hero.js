export default function Hero() {
    const text = "Hey! I'm Dhruvkumar";
    const words = text.split(" ");
  
    return (
      <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-8 animate-page-wave">
        {/* Neon Spotlights (Responsive) */}
        <div className="absolute top-[-13%] right-[-10%] sm:right-[-15%] md:right-[-10%] w-[150px] sm:w-[250px] md:w-[350px] h-[80px] sm:h-[120px] md:h-[180px] bg-gradient-to-br from-green-600 via-green-400 to-transparent rounded-bl-full blur-3xl opacity-45 shadow-xl"></div>
        <div className="absolute top-[-15%] left-1/4 sm:left-1/3 md:left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[250px] md:w-[350px] h-[80px] sm:h-[120px] md:h-[180px] bg-gradient-to-br from-yellow-400 via-yellow-200 to-transparent rounded-bl-full blur-3xl opacity-40 shadow-xl"></div>
  
        {/* Fireflies */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 6;
            const opacity = Math.random() * 0.4 + 0.6;
  
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-firefly"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              ></div>
            );
          })}
        </div>
  
        {/* Hero Text - Responsive & Animated */}
        <div className="text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight flex flex-wrap justify-center space-x-2">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block animate-word-wave opacity-0"
                style={{
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>
  
          {/* Looping Sentences on the Same Line with Animation */}
          <div className="mt-4 text-lg sm:text-xl md:text-2xl text-white relative">
            <div className="looping-sentences">
              <p className="sentence">Welcome to my portfolio</p>
              <p className="sentence">A Software Engineer</p>
              <p className="sentence">A Fullstack Developer</p>
              <p className="sentence">A Problem Solver</p>
            </div>
          </div>
  
          {/* "Get in Touch!" Button */}
          <div className="mt-6 flex justify-end w-full max-w-lg">
            <a
              href="#contact"
              className="relative bg-green-500 text-black font-semibold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
            >
              <span>Get in touch!</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
  