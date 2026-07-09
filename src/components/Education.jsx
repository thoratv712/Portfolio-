import React from "react";
import {
  GraduationCap,
  University,
  School,
  BookOpen,
  Calendar,
  Award,
  MapPin,
} from "lucide-react";

function Education() {
  const educationData = [
    {
      degree: "ME in Computer Engineering",
      institution: "Sharadchandra Pawar College of Engineering",
      location: "Dumberwadi, Otur, Pune, Maharashtra, India",
      year: "2024 - 2026",
      grade: "SGPA: 8.00",
      gradeType: "1st Year",
      icon: GraduationCap,
    },
    {
      degree: "BE in Computer Engineering",
      institution: "Pravara Rural Engineering College",
      location: "Loni, Maharashtra, India",
      year: "2019 - 2023",
      grade: "Percentage: 83.41%",
      gradeType: "Graduated",
      icon: University,
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution:
        "Padmashri Vikhe Patil College of Arts, Science, and Commerce",
      location: "Loni, Maharashtra, India",
      year: "2018 - 2019",
      grade: "Percentage: 65.08%",
      gradeType: "Completed",
      icon: BookOpen,
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Pravara Kanya Vidya Mandir",
      location: "Loni, Maharashtra, India",
      year: "2016 - 2017",
      grade: "Percentage: 86.40%",
      gradeType: "Completed",
      icon: School,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900 p-4 sm:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-800 dark:text-white mb-2">
            Education
          </h1>

          <div className="w-20 h-1 bg-red-900 dark:bg-red-900 rounded-full"></div>

          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
            My academic journey and qualifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <Icon
                        size={28}
                        className="text-red-900 dark:text-red-400"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                          {edu.degree}
                        </h3>

                        <p className="text-lg font-medium text-red-900 dark:text-red-400">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-6">
                      {/* Grade */}
                      <div className="flex items-center gap-2">
                        <Award
                          size={18}
                          className="text-red-900 dark:text-red-400"
                        />

                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                          {edu.grade}
                        </span>

                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          ({edu.gradeType})
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="text-zinc-500 dark:text-zinc-400"
                        />

                        <span className="text-zinc-600 dark:text-zinc-400">
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-5 text-center">
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">
              8.00
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">ME SGPA (1st Year)</p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-5 text-center">
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">
              83.41%
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              BE Percentage
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-5 text-center">
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">
              65.08%
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              HSC Percentage
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-5 text-center">
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">
              86.40%
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              SSC Percentage
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Education;