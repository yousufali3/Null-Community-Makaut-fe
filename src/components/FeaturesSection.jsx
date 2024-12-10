import React from 'react';
import { Users, Video, BookOpen, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Join a vibrant community of developers sharing knowledge and experiences.'
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Participate in interactive live coding sessions and workshops.'
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access curated learning materials and documentation.'
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Earn certificates upon completing courses and workshops.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Null Community?
          </h2>
          <p className="text-xl text-gray-400">
            Discover the benefits of joining our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;