import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
              alt="Team Collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-lg"></div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-white">
              Building the Future of Tech Together
            </h2>
            <p className="text-xl text-gray-300">
              We're more than just a community - we're a family of tech enthusiasts committed to learning and growing together.
            </p>
            <ul className="space-y-4">
              {[
                'Expert-led workshops and seminars',
                'Hands-on coding sessions',
                'Networking opportunities',
                'Career guidance and mentorship'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="h-6 w-6 text-indigo-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;