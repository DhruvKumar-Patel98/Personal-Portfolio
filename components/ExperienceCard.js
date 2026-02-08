import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export function ExperienceCard({
  logo,
  title,
  company,
  location,
  duration,
  points,
}) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const ref = useRef(null);

  const ITEMS_PER_PAGE = 3;

  // Click outside → collapse
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setExpanded(false);
        setPage(0);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visiblePoints = expanded
    ? points.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
    : points.slice(0, 1);

  const hasMore =
    (page + 1) * ITEMS_PER_PAGE < points.length;

  function handleButton() {
    if (!expanded) {
      setExpanded(true);
      return;
    }

    if (hasMore) {
      setPage((p) => p + 1);
    }
    else {
    // When Done is clicked → reset to original state
    setExpanded(false);
    setPage(0);
    }
  }

  return (
    <motion.div
      ref={ref}
      layout
      className="flex flex-col md:flex-row items-start gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Timeline line */}
      <div className="w-1 h-24 bg-gray-500 hidden md:block" />

      {/* Logo */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
        <Image
          src={logo}
          alt="logo"
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>


      {/* Card */}
      <motion.div
        layout
        className="relative p-6 bg-gray-800 rounded-xl shadow-lg w-full"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-gray-400">{company}</p>

            <div className="hidden md:flex items-center text-gray-400 mt-1">
              <FaMapMarkerAlt className="mr-2" />
              {location}
            </div>
          </div>

          <div className="flex items-center text-gray-400 bg-gray-700 px-3 py-1 rounded-lg">
            <FaCalendarAlt className="mr-2" />
            {duration}
          </div>
        </div>

        {/* Bullet Points */}
       {/* Bullet Points */}
<motion.ul className="mt-4 space-y-3">
  <AnimatePresence mode="wait">
    <motion.div
      key={page} // ✅ forces clean transition between pages
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {visiblePoints.map((p) => (
        <li
          key={p}
          className="flex items-start gap-3 text-gray-300"
        >
          {/* Accent Dot */}
          <span className="mt-2 w-2.5 h-2.5 bg-white rounded-full shrink-0" />

          {/* Text */}
          <span className="leading-relaxed">{p}</span>
        </li>
      ))}
    </motion.div>
  </AnimatePresence>
</motion.ul>



        {/* Button */}
        {(points.length > 1) && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleButton}
              className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:scale-105 transition"
            >
              {!expanded ? "Details" : hasMore ? "Next" : "Done"}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
