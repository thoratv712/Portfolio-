import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Check } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Home'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'thoratv795@gmail.com',
      link: 'mailto:thoratv795@gmail.com',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      link: '#',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/thoratv712',
      username: 'thoratv712',
      color: 'bg-zinc-700 hover:bg-zinc-600 text-white'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/vaishnavithorat/',
      username: 'vaishnavithorat',
      color: 'bg-blue-700 hover:bg-blue-600 text-white'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:thoratv795@gmail.com',
      username: 'thoratv795@gmail.com',
      color: 'bg-red-600 hover:bg-red-500 text-white'
    },
    {
      name: 'Telegram',
      icon: <Send size={24} />,
      url: 'https://t.me/TVaishnavi',
      username: '@TVaishnavi',
      color: 'bg-sky-600 hover:bg-sky-500 text-white'
    }
  ];

  const availability = {
    status: 'Open to Opportunities',
    type: 'Full-time Job | Internship',
    message: 'I am currently looking for full-time or internship opportunities in software development.'
  };

  return (
    <div className='min-h-[calc(100vh-80px)] bg-white dark:bg-zinc-900 p-4 sm:p-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-10'>
          <h1 className='text-2xl sm:text-4xl font-semibold text-zinc-800 dark:text-white'>
            Contact Me
          </h1>
          <div className='w-20 h-1 bg-red-900 dark:bg-red-900 rounded-full mt-2'></div>
          <p className='text-zinc-600 dark:text-zinc-400 mt-4 text-lg'>
            Let's connect! I'm open to opportunities and collaborations.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column - Contact Info */}
          <div className='space-y-6'>
            {/* Availability Status */}
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl'>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <div>
                  <p className='font-semibold text-green-700 dark:text-green-300'>
                    {availability.status}
                  </p>
                  <p className='text-sm text-green-600 dark:text-green-400'>
                    {availability.type}
                  </p>
                </div>
              </div>
              <p className='text-sm text-green-600 dark:text-green-400 mt-2'>
                {availability.message}
              </p>
            </div>

            {/* Contact Information */}
            <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-zinc-800 dark:text-white mb-4'>
                Get in Touch
              </h2>
              <div className='space-y-4'>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className='flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors group'
                  >
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                        {item.label}
                      </p>
                      <p className='font-medium text-zinc-800 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors'>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-zinc-800 dark:text-white mb-4'>
                Connect with Me
              </h2>
              <div className='space-y-3'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-4 p-3 rounded-lg ${social.color} transition-colors`}
                  >
                    {social.icon}
                    <div>
                      <p className='font-medium'>{social.name}</p>
                      <p className='text-sm opacity-80'>{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md p-6'>
            <h2 className='text-lg font-semibold text-zinc-800 dark:text-white mb-4'>
              Send Me a Message
            </h2>
            
            {isSubmitted ? (
              <div className='flex flex-col items-center justify-center py-12 text-center'>
                <div className='w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4'>
                  <Check size={40} className='text-green-600 dark:text-green-400' />
                </div>
                <h3 className='text-xl font-bold text-zinc-800 dark:text-white'>
                  Message Sent! <Check size={20} className='inline-block text-green-600 dark:text-green-400 ml-1' />
                </h3>
                <p className='text-zinc-600 dark:text-zinc-400 mt-2'>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1'>
                    Your Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='John Doe'
                    className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1'>
                    Your Email *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='john@example.com'
                    className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1'>
                    Subject *
                  </label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder='Job Opportunity / Collaboration'
                    className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1'>
                    Message *
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    placeholder='Your message here...'
                    className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors resize-none'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg transition-colors font-semibold'
                  onClick={() => {window.open('mailto:thoratv795@gmail.com?subject=' + encodeURIComponent(formData.subject) + '&body=' + encodeURIComponent(formData.message), '_blank');}}
                >
                  <Send size={20} />
                  Send Message
                </button>

                <p className='text-xs text-center text-zinc-500 dark:text-zinc-400 mt-4'>
                  I'll respond within 24-48 hours. Your information will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quick Response Time */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <Clock size={24} className='text-red-900 dark:text-red-400 mx-auto mb-2' />
            <p className='font-semibold text-zinc-800 dark:text-white'>Quick Response</p>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>Within 24 hours</p>
          </div>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <MessageCircle size={24} className='text-red-900 dark:text-red-400 mx-auto mb-2' />
            <p className='font-semibold text-zinc-800 dark:text-white'>Open to Connect</p>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>All messages welcome</p>
          </div>
          <div className='bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-md text-center'>
            <div className='w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2'>
              <Check size={24} className='text-green-600 dark:text-green-400' />
            </div>
            <p className='font-semibold text-zinc-800 dark:text-white'>Available Now</p>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>Looking for opportunities</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact