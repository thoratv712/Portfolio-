import React from "react";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";

export const GitHubIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.98c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M6.94 8.86H3.75v10.39h3.19V8.86ZM5.35 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 8.55c0-2.79-1.49-4.08-3.48-4.08a3 3 0 0 0-2.71 1.49h-.04V8.86H9.97v10.39h3.18v-5.14c0-1.36.26-2.67 1.94-2.67 1.65 0 1.67 1.55 1.67 2.75v5.06h3.19V13.3h-.7Z" />
  </svg>
);

function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-10 lg:px-16 py-12">

        {/* Left Section */}
        <div>

          {/* Welcome Badge */}
          <div className="inline-block bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg">
            <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-white">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 dark:text-white">
            I'm{" "}
            <span className="text-red-900 dark:text-red-400 font-bold">
              Vaishnavi Thorat
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
            Computer Engineering | Java Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base text-sm sm:text-md leading-5 text-slate-600 dark:text-slate-400">
           Hi, I'm Vaishnavi Thorat, a dedicated Java Full Stack Developer passionate about building modern, user-friendly web applications. I am eager to begin my professional journey, apply my technical skills, solve real-world problems, and continuously learn while contributing to impactful software solutions.

          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-md transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-red-900 text-red-900 dark:text-red-500 dark:border-red-500 hover:bg-red-100 dark:hover:bg-red-500 dark:hover:text-white px-6 py-3 rounded-md transition"
            >
              Contact Me
            </Link>

            <a
              href="/resume"
              download
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-md transition"
            onClick={() => {window.open('Vaishnavi_Thorat_Resume.pdf', '_blank');}}
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex flex-wrap gap-6 text-slate-700 dark:text-slate-300">

            <a
              href="https://github.com/thoratv712"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-red-900 dark:hover:text-red-500 transition"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-thorat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border rounded-md p-0.5 hover:text-red-900 hover:border-red-900 dark:hover:text-red-500 dark:hover:border-red-500 transition"
            >
              <LinkedInIcon />
            </a>

            <a
              href="mailto:thoratv795@gmail.com"
              aria-label="Email"
              className="hover:text-red-900 dark:hover:text-red-500 transition"
            >
              <Mail />
            </a>

            <a
              href="https://t.me/TVaishnavi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-red-900 dark:hover:text-red-500 transition"
            >
              <Send />
            </a>

          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex justify-center items-center">
          {/* Add your profile image here later */}

          
          <img
            src="profileImg.png"
            alt="Vaishnavi Thorat"
            className="w-[400px] rounded-full shadow-2xl"
          />
         
        </div>

      </div>
    </section>
  );
}

export default Home;