'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import GitHubButton from './Contactbutton';

// components/ContactPage.jsx


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  // #180142, #310089, #470cb3
  return (
    <div className="min-h-screen bg-gradient-to-br from-#180142 via-#310089 to-#470cb3 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl   md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-transparent cursor-target bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Have a question or want to work together? 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative flex-grow">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-[#0a27b2] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative h-full flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left">Contact Information</h2>

                  <div className="space-y-6 md:space-y-8">
                    <div className="flex cursor-target items-center space-x-4 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="glass-icon flex-shrink-0">
                        <Mail className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">Email</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors break-words text-sm md:text-base">
                          aishwaryg01@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex cursor-target items-center space-x-4 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="glass-icon flex-shrink-0">
                        <Phone className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">Phone</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors text-sm md:text-base">
                          +91 8795157597
                        </p>
                      </div>
                    </div>

                    <div className="flex cursor-target items-center space-x-4 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="glass-icon flex-shrink-0">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">Address</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors text-sm md:text-base">
                          C-508 Swami Vivekanand Bhavan, SVNIT Surat
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Social Media Section - Reusing structure for balance */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative flex-grow flex flex-col justify-center">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-[#0a27b2] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 max-sm:mb-6 text-center">Social Media</h2>
                <div className="flex flex-wrap  justify-center gap-2 md:gap-6">
                  <GitHubButton social={{
                      link: "https://github.com/011aishwary",
                      text: "GitHub",
                      icon: "/github.png"
                    }}
                  />
                  <GitHubButton social={{
                      link: "https://www.instagram.com/01aishwary/",
                      text: "Instagram",
                      icon: "/instagram.png"
                    }}
                  />
                  <GitHubButton social={{
                      link: "https://www.linkedin.com/in/01aishwary",
                      text: "LinkedIn",
                      icon: "/linkedin.png"
                    }}
                  />
                  <GitHubButton social={{
                      link: "https://x.com/01Aishwary",
                      text: "Twitter",
                      icon: "/twitter.png"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.37),
            0 0 20px rgba(66, 153, 225, 0.3);
        }

        .glass-icon {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .glass-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .glass-input:focus {
          outline: none;
          border-color: rgba(103, 232, 249, 0.4);
          box-shadow: 0 0 0 3px rgba(103, 232, 249, 0.1);
        }

        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .glass-button {
          padding: 16px 24px;
          background: linear-gradient(45deg, rgba(103, 232, 249, 0.1), rgba(59, 130, 246, 0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .glass-button:hover:not(:disabled) {
          background: linear-gradient(45deg, rgba(103, 232, 249, 0.2), rgba(59, 130, 246, 0.2));
          border-color: rgba(103, 232, 249, 0.3);
          box-shadow: 0 0 20px rgba(103, 232, 249, 0.4);
          transform: translateY(-2px);
        }

        .glass-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
