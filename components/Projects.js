export default function Projects() {
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-gray-400 text-center mt-2">
            Some of my recent work.
          </p>
  
          {/* Project List */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Blink-It Grocery Store</h3>
              <p className="text-gray-400">E-commerce platform on Azure</p>
              <a href="#" className="text-green-400 underline mt-2 inline-block">
                View Project →
              </a>
            </div>
  
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">LearnGuardAI</h3>
              <p className="text-gray-400">
                AI-powered teaching assistant with ethical AI governance.
              </p>
              <a href="#" className="text-green-400 underline mt-2 inline-block">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  