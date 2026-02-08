import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


export default function Certificates() {
  const certificates = [
    { name: "AWS Certified Cloud Practitioner", year: "2025", logo: "/Certificates/aws.png", link: "https://www.credly.com/badges/9ea3bb74-2a7a-4be2-b280-b587a2097014/public_url" },
    { name: "MongoDB Essential Training", year: "2025", logo: "/Certificates/mongodb.png", link: "https://www.linkedin.com/learning/certificates/6fd0e73a9d7934d7736871cda3d29f746ed7f6c908b7eb031c9fd743daf5d152?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FjuIYVi1QYqpK%2BdaXYlLOw%3D%3D" },
    { name: "SQL Essential Training", year: "2025", logo: "/Certificates/sql.png", link: "https://www.linkedin.com/learning/certificates/68591b5a3d42ad01619724b9ae4dc43957284800cd5ecf7706c47bafe31b5cc7?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FjuIYVi1QYqpK%2BdaXYlLOw%3D%3D" },
    { name: "Data Analytics Essentials", year: "2024", logo: "/Certificates/data-analytics.png", link: "https://www.credly.com/badges/bede7f95-4cb3-4742-998b-b0242bbf556a/linked_in_profile" },
    { name: "Microsoft Azure Fundamentals", year: "2022", logo: "/Certificates/azure.png", link: "https://www.credly.com/badges/a97f8de4-fc20-4488-b0f3-eacf0c85200c/linked_in_profile" },
    { name: "Essential Google Cloud Infrastructure", year: "2022", logo: "/Certificates/gcp.png", link: "https://partner.skills.google/public_profiles/6b2d6685-b05d-455a-a321-c812271dbaa5/badges/2544951?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % certificates.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleCerts = [
    certificates[startIndex % certificates.length],
    certificates[(startIndex + 1) % certificates.length],
    certificates[(startIndex + 2) % certificates.length],
  ];

  return (
    <section className="bg-black text-white py-16 px-3">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold mb-10">
          Certificates & Training
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            className="grid grid-cols-3 gap-3 md:flex md:gap-6 justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {visibleCerts.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-32 md:h-48 rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url(${cert.logo})` }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col justify-center h-full p-2 md:p-6 text-center">
                  <h3 className="text-xs md:text-lg font-semibold leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-base mt-1">
                    {cert.year}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}