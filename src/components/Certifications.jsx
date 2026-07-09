import React from 'react'
import {
  Award,
  Calendar,
  Clock,
  CheckCircle,
  ExternalLink,
  Code,
  Trophy,
  Medal,
  BookOpen,
} from "lucide-react";

function Certifications() {

  
  const certifications = [
    {
      name: 'Java Full Stack Development',
      issuer: 'Seed Infotech',
      duration: '6 Months',
      date: '2024',
      skills: ['C', 'SQL', 'Java', 'Hibernate', 'Spring Boot', 'Angular', 'ReactJS'],
      description: 'Comprehensive training covering frontend and backend development using Java technologies, including Spring Boot, Hibernate, Angular, and ReactJS.',
      credentialId: 'SEED-JFS-2024-001',
      color: 'from-orange-500 to-red-600',
      icon: <Code size={24} />
    }
  ];

  // Additional achievements and recognitions
  const achievements = [
    {
      title: '2nd Prize in Paper Presentation',
      event: 'PRECCON 2K23',
      description: 'Presented research paper on "Fake Product Identification Using Blockchain" and secured 2nd position among multiple participants.',
      date: '2023',
      icon: Trophy
    },
    {
      title: 'Academic Excellence',
      event: 'BE Computer Engineering',
      description: 'Achieved 83.41% in Bachelor of Computer Engineering with consistent academic performance.',
      date: '2024',
      icon: Medal
    },
    // {
    //   title: 'Blockchain Workshop Participation',
    //   event: 'Blockchain Technology Workshop',
    //   description: 'Participated in hands-on workshop on blockchain development and smart contract deployment.',
    //   date: '2024',
    //   icon: BookOpen
    // }
  ];

  // Technical skills verified
  const verifiedSkills = [
    { name: 'Java', level: 'Advanced' },
    { name: 'Spring Boot', level: 'Proficient' },
    { name: 'ReactJS', level: 'Proficient' },
    { name: 'Angular', level: 'Proficient' },
    { name: 'SQL', level: 'Proficient' },
    { name: 'Hibernate', level: 'Proficient' }
  ];

 
  return (
    <div className='min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900 p-4 sm:p-10'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-10'>
          <h1 className='text-xl sm:text-3xl font-semibold text-zinc-800 dark:text-white'>
            Certifications
          </h1>
          <div className='w-20 h-1 bg-red-900 dark:bg-red-500 rounded-full mt-2'></div>
          <p className='text-zinc-600 dark:text-zinc-400 mt-4 text-lg'>
           Professional Certification, Technical Skills, and Academic Achievements
          </p>
        </div>

        {/* Main Certification Card */}
        <div className='mb-8'>
          {certifications.map((cert, index) => (
            
            <div 
              key={index}
              className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden'
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6`}>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-white/20 rounded-lg text-white'>
                      {cert.icon}
                    </div>
                    <div>
                      <h2 className='text-xl font-semibold text-white'>
                        {cert.name}
                      </h2>
                      <p className='text-white/90 text-lg'>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2 text-white/90'>
                      <Clock size={18} />
                      {cert.duration}
                    </span>
                    <span className='flex items-center gap-2 text-white/90'>
                      <Calendar size={18} />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <p className='text-zinc-600 dark:text-zinc-300'>
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div className='mt-4'>
                  <h3 className='text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2'>
                    Skills Covered:
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className='px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                {/* {cert.credentialId && (
                  <div className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                    <span className='font-semibold'>Credential ID:</span> {cert.credentialId}
                  </div>
                )} */}

                {/* Verify Button */}
                <div className='mt-4'>
                  <button className='flex items-center gap-2 text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors' onClick={() => window.open('SEED_Merit_Certificate.pdf', '_blank')}>
                    <ExternalLink size={16} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Matrix from Certification */}
        <div className='mb-8 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-md'>
          <h2 className='text-xl font-bold text-zinc-800 dark:text-white mb-4 flex items-center gap-2'>
            <CheckCircle size={24} className='text-red-900 dark:text-red-400' />
            Skills Verified Through Certification
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {verifiedSkills.map((skill) => (
              <div key={skill.name} className='flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg'>
                <span className='text-zinc-700 dark:text-zinc-300 font-medium'>
                  {skill.name}
                </span>
                <span className='px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-semibold'>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Recognitions */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-zinc-800 dark:text-white mb-4 flex items-center gap-2'>
            <Award size={24} className='text-red-900 dark:text-red-400' />
            Achievements & Recognitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {achievements.map((achievement, index) => {
    const Icon = achievement.icon;

    return (
      <div
        key={index}
        className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-3">
          <Icon
            size={24}
            className="text-red-700 dark:text-red-400"
          />
        </div>

        <h3 className="font-bold text-zinc-800 dark:text-white">
          {achievement.title}
        </h3>

        <p className="text-sm text-red-700 dark:text-red-400 font-medium">
          {achievement.event}
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {achievement.description}
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
          {achievement.date}
        </p>
      </div>
    );
  })}
</div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <div className='text-2xl font-bold text-red-900 dark:text-red-400'>1</div>
            <div className='text-sm text-zinc-600 dark:text-zinc-400'>Professional Certification</div>
          </div>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <div className='text-2xl font-bold text-red-900 dark:text-red-400'>7</div>
            <div className='text-sm text-zinc-600 dark:text-zinc-400'>Skills Certified</div>
          </div>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <div className='text-2xl font-bold text-red-900 dark:text-red-400'>6</div>
            <div className='text-sm text-zinc-600 dark:text-zinc-400'>Months Training</div>
          </div>
          <div className='bg-white  dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <div className='text-2xl font-bold justify-center text-red-900 dark:text-red-400'>
              <Trophy
                     size={30}
                     className="mx-auto text-red-700 dark:text-red-400"
             />
            </div>
            <div className='text-sm text-zinc-600 dark:text-zinc-400'>Awards</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications