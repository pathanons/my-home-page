// app/components/ProfilePage.tsx
"use client";  // Add this line at the top
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProfilePage = () => {
  const projects = [
    {
      title: "Human Gesture Recognition",
      description: "Computer vision system for analyzing and recognizing human gestures and movements."
    },
    {
      title: "AI in Muay Thai Sports Analytics",
      description: "Applied AI for movement analysis and performance optimization in Muay Thai."
    },
    {
      title: "Intelligent POS Assistant",
      description: "LLM-powered assistant for restaurant POS systems, enhancing operational efficiency."
    },
    {
      title: "HRM AI Integration",
      description: "AI-driven solutions for human resource management and organizational optimization."
    }
  ];

  const expertise = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Generative AI",
    "Large Language Models",
    "Data Analytics",
    "Deep Learning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Nontaphat Sinsunthithet</h1>
              <h2 className="text-2xl text-emerald-50 mb-4">Data Scientist - R&D Team</h2>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Dudee-Indeed Co., Ltd - Chiang Mai, Thailand</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a href="mailto:nontaphat@dudee-indeed.com" 
                   className="flex items-center text-white hover:text-emerald-100">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>nontaphat@dudee-indeed.com</span>
                </a>
                <a href="tel:086 438 9286" 
                   className="flex items-center text-white hover:text-emerald-100">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>086 438 9286</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-8">
          {/* Expertise Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-800">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-800">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Card */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-800">Business Contact</h2>

              <p className="text-gray-600 mb-6">
                Interested in AI and machine learning solutions for your business? Let's discuss how we can help transform your operations with innovative technology.
              </p>
              <a 
                href="https://dudee-indeed.com/" 
                className="inline-flex justify-center items-center w-1/3 gap-2 px-100 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <img 
                src="/Logo.png"
                alt="Profile"
                className="flex justify-center w-1/2 h-1/2 object-cover"
              />
                
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-emerald-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nontaphat Sinsunthithet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;