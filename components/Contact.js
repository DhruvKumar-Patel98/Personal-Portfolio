import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setSuccess(false);
      }

      // Hide message after 5 seconds
      setTimeout(() => setSuccess(null), 5000);

    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      setTimeout(() => setSuccess(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold flex items-center space-x-3">
          <span className="text-3xl">📧</span> 
          <span>Contact</span>
        </h2>
        <p className="text-gray-400 mt-2">Send me a message using this form.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="w-full md:w-1/2 p-3 bg-gray-800 text-white rounded" 
              onChange={handleChange} 
              value={formData.name}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="w-full md:w-1/2 p-3 bg-gray-800 text-white rounded" 
              onChange={handleChange} 
              value={formData.email}
              required 
            />
          </div>

          <textarea 
            name="message" 
            placeholder="Message" 
            className="w-full p-3 bg-gray-800 text-white rounded" 
            rows="4" 
            onChange={handleChange} 
            value={formData.message}
            required
          ></textarea>

          <button 
            type="submit" 
            className="bg-green-500 px-6 py-3 text-white rounded font-semibold w-full hover:bg-green-600 transition-all"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {success !== null && (
          <p className={`mt-4 ${success ? "text-green-400" : "text-red-400"}`}>
            {success ? "Message sent successfully!" : "Error sending message."}
          </p>
        )}
      </div>
    </section>
  );
}
