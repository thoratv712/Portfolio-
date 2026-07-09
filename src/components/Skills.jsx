import React from "react";
import {
  Code,
  Database,
  Server,
  Layout,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL", "C"],
      icon: Code,
    },
    {
      category: "Frontend",
      skills: [
        "ReactJS",
        "Angular",
        "Bootstrap",
        "Tailwind CSS",
      ],
      icon: Layout,
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Hibernate",
        "REST APIs",
      ],
      icon: Server,
    },
    {
      category: "Database",
      skills: [
        "MySQL",
      ],
      icon: Database,
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "STS",
        "Eclipse",
      ],
      icon: Wrench,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900 p-4 sm:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-800 dark:text-white mb-2">
            Skills
          </h1>

          <div className="w-20 h-1 bg-red-900 dark:bg-red-900 rounded-full"></div>

          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-red-900 dark:text-red-400"
                    />
                  </div>

                  <h3 className="text-xl font-medium text-zinc-800 dark:text-white">
                    {item.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-full bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-medium text-zinc-800 dark:text-white mb-3">
            Technical Summary
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 leading-7">
            Hands-on experience in Java Full Stack Development through academic
            and personal projects, with practical knowledge of developing
            responsive front-end applications using React and Angular,
            scalable back-end services with Spring Boot and Hibernate,
            integrating REST APIs, managing MySQL databases, and using
            Git, GitHub, Postman, and modern development tools throughout
            the software development lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;