import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import {ExperienceCard} from "../components/ExperienceCard"; 

export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-Epilogue lg:text-6xl md:text-6xl text-4xl lg:mt-3 md:mt-3 mt-0 font-semibold text-white/90 text-center flex items-center justify-center space-x-3">
          <LuBriefcaseBusiness className="text-white lg:text-6xl md:text-6xl text-4xl" /> {/* Responsive icon size */}
          <span>Experience</span>
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Software engineer with over 3 years of experience.
        </p>

        {/* Experience Cards */}
        <div className="mt-8 space-y-6">
          <ExperienceCard
          logo="/semo-logo.png"
          title="Graduate Assistant"
          company="Southeast Missouri State University"
          location="Cape Girardeau, Missouri"
          duration="Aug 2025 - Present"
          points={[
            "Delivered lectures and labs on Java, Spring Boot, JPA, and RESTful service design and AWS Cloud.",
            "Support classroom operations by preparing instructional materials, grading assignments, and coordinating student communications"
          ]}
        />
          {/* Card 2: Research Assistance */}
          <ExperienceCard
            logo="/semo-logo.png"
            title="Research Assistant"
            company="Southeast Missouri State University"
            location="Cape Girardeau, Missouri"
            duration="Jan 2025 - May 2025"
            points={[
              "Developing deep learning and neural network models for facial emotion recognition",
              "Building an AI model using 4000+ images across 7+ emotion categories",
              "Assisting in research projects solving real-world problems using AI",
            ]}
          />

          {/* Card 3: Bajaj Finserv */}
          <ExperienceCard
            logo="/bajaj-logo.png"
            title="Software Engineer"
            company="Bajaj Finserv"
            location="Pune, Maharashtra"
            duration="Jan 2023 - Jul 2024"
            points={[
              "Designing backend services using Java and Spring Boot",
              "Building secure REST APIs with Spring Security",
              "Optimizing PostgreSQL and MySQL queries",
              "Kafka event driven architecture (5000+ msg/sec)",
              "Azure cloud CI/CD deployment",
              "Angular frontend integration",
              "JUnit / Mockito testing",
              "Reduced CI/CD runtime from 60 → 40 min",
              "Agile collaboration with QA + DevOps",
              "Cross team collaboration and problem solving"
            ]}
          />
        {/* Card 4: BinaryDots Technologies Pvt. Ltd */}
         <ExperienceCard
            logo="/binarydots.png"
            title="Java Developer"
            company="BinaryDots Technologies Pvt. Ltd"
            location="Jhansi, Uttar Pradesh"
            duration="Jan 2022 - Jun 2022"
            points={[
              "Designed and developed scalable Android components using Java with Clean Architecture",
              "Integrated REST APIs using Retrofit, OkHttp with pagination, caching and error handling",
              "Wrote unit and UI tests using JUnit, Mockito and Espresso",
              "Deployed apps on AWS (EKS, EC2, RDS, S3) with Terraform and Kubernetes",
              "Built scalable microservices using Java, Spring Boot and JDBC",
              "Improved API performance using Redis caching (40% latency reduction)",
              "Worked on CI/CD pipelines using Jenkins and GitLab",
              "Collaborated with product managers, designers and backend engineers",
              "Solved complex technical challenges improving application stability"
            ]}
          />

        </div>

      </div>
    </section>
  );
}
