import React from "react";
import {
  ExternalLink,
  Shield,
  Hotel,
  Brain,
  Layout,
  Utensils,
} from "lucide-react";
import { GitHubIcon } from "./Home";

import fakeProductImage from "../assets/fake-product.png";
import hotelRoomBookingImage from "../assets/hotel-room-booking.png";
import burgerImage from "../assets/burger.png";
import expenseTrackerImage from "../assets/expense_tracker.png";
import portfolioHomeImage from "../assets/portfolio_home.png";  


function Projects() {
  const projects = [
    {
      title: "Fake Product Identification System",
      description:
        "A blockchain-based web application that verifies product authenticity using QR codes, helping users identify counterfeit products securely.",
      longDescription:
        "This decentralized application allows consumers to verify product authenticity by scanning QR codes. The system uses blockchain technology to store product information securely, making it immutable and tamper-proof.",
      tech: ["ReactJS", "Solidity", "Truffle", "Ganache", "MetaMask", "Web3.js"],
      features: [
        "QR code scanning for product verification",
        "Blockchain-based product authentication",
        "Secure and immutable product records",
        "User-friendly interface for consumers",
      ],
      github: "https://github.com/thoratv712/fake-product-identification-system",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
      image: fakeProductImage,
      imageAlt: "Fake Product Identification System - Blockchain based product verification"
    },
    {
      title: "DreamStay - Hotel Booking System",
      description:
        "A full-stack hotel booking application where users can browse rooms, make reservations, and manage bookings through a responsive interface.",
      longDescription:
        "Built a comprehensive hotel booking platform that allows users to browse, select, and book hotel rooms efficiently. Features include real-time availability, booking management, and administrative controls.",
      tech: ["Angular", "Spring Boot", "MySQL", "REST API", "Hibernate"],
      features: [
        "User-friendly room selection and booking",
        "Real-time room availability tracking",
        "Secure payment integration",
        "Admin dashboard for hotel management",
      ],
      github: "https://github.com/vaishnavithorat/dreamstay-hotel",
      icon: Hotel,
      color: "from-green-600 to-green-800",
      image: hotelRoomBookingImage,
      imageAlt: "DreamStay - Hotel Booking System Interface"
    },
    {
      title: "Burger House",
      description:
        "A responsive burger ordering web application that allows users to customize their burgers and place orders with a user-friendly interface.",
      longDescription:
        "Developed a modern burger ordering platform where users can customize their burgers with various toppings, sauces, and sides. Features real-time order tracking and a seamless checkout experience.",
      tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Context API"],
      features: [
        "Customize burgers with various toppings",
        "Real-time order tracking",
        "Responsive and mobile-friendly design",
        "Fast and intuitive user interface",
      ],
      github: "https://github.com/thoratv712/Burger-Web-Application",
      icon: Utensils,
      color: "from-yellow-600 to-orange-600",
      image: burgerImage,
      imageAlt: "Burger House - Burger ordering web application"
    },
    {
      title: "AI Expense Tracker",
      description:
        "A smart expense tracker that manages daily expenses, visualizes spending through interactive charts, and answers user queries using Google Gemini AI.",
      longDescription:
        "Developed a full-stack web application that helps users track, manage, and analyze their daily expenses. Features an interactive dashboard with visual charts and an AI assistant that provides personalized spending insights.",
      tech: ["ReactJS", "Spring Boot", "MySQL", "Gemini API", "REST API"],
      features: [
        "Add, update, delete, and search expenses",
        "Category-based expense filtering",
        "Interactive dashboard with spending charts",
        "AI-powered spending insights and recommendations",
      ],
      github: "https://github.com/thoratv712/expense-tracker-frontend",
      icon: Brain,
      color: "from-purple-600 to-purple-800",
      image: expenseTrackerImage,
      imageAlt: "AI Expense Tracker - Smart expense management dashboard"
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my skills, education, certifications, and software development projects using modern web technologies.",
      longDescription:
        "Designed and developed a modern, responsive portfolio website using ReactJS and Tailwind CSS. Features include dark mode, responsive design, and interactive components to showcase professional work.",
      tech: ["ReactJS", "Tailwind CSS", "JavaScript", "React Router"],
      features: [
        "Fully responsive design",
        "Dark/Light mode toggle",
        "Interactive project gallery",
        "Skills visualization and certifications",
      ],
      github: "https://github.com/thoratv712/portfolio",
      icon: Layout,
      color: "from-red-600 to-red-800",
      image: portfolioHomeImage,
      imageAlt: "Personal Portfolio - ReactJS portfolio website"
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900 p-4 sm:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-xl sm:text-3xl font-semibold text-zinc-800 dark:text-white">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-red-900 dark:bg-red-900 rounded-full mt-2"></div>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg">
            A collection of projects showcasing my knowledge in Full Stack
            Development, Spring Boot, React, Angular, Blockchain, and AI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
               {/* Project Image */}
<div className="w-full h-48 sm:h-64 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden flex items-center justify-center p-2"> 
  {/* Added h-48 sm:h-64 height constraints, flex layout centering, and padding */}
  <img
    src={project.image}
    alt={project.imageAlt}
    className="w-full h-full object-contain" // ◄ Changed from object-cover to object-contain
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-r ${project.color} p-5">
          <div class="text-center text-white">
            <p class="text-sm font-medium">${project.title}</p>
            <p class="text-xs opacity-80">Project Preview</p>
          </div>
        </div>
      `;
    }}
  />
</div>


                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h2 className="text-xl font-medium text-zinc-800 dark:text-white">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-7">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <span className="text-red-900 dark:text-red-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button Only */}
                  <div className="mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md transition"
                    >
                      <GitHubIcon />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;