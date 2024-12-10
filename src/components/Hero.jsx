import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen  flex items-center bg-gray-900">
      <div className="max-w-7xl mt-[80px] lg:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Welcome to <span className="text-indigo-500">Null</span> Community
            </h1>
            <p className="text-xl text-gray-300">
              Join our thriving community of developers, engineers, and tech
              enthusiasts. Learn, share, and grow together through our
              interactive webinars and eventLs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#discussions"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Community"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
