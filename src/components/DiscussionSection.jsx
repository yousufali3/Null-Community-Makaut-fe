import React from "react";
import { ArrowRight } from "lucide-react";
import a1 from './a1.png'
const DiscussionSection = () => {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Build a Thriving Community
            </h2>
            <h3 className="text-xl text-indigo-400">
              Empower Learning and Collaboration
            </h3>
            <p className="text-gray-300 text-lg">
              Engage with educators, learners, and enthusiasts in meaningful
              discussions. Share knowledge, participate in workshops, and build
              lasting connections within a vibrant community.
            </p>
            <div>
              <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image and Community Interaction Section */}
          <div className="relative">
            <div className=" rounded-lg">
             
              {/* <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-gray-500">Live Discussion</p>
              </div>

             
              <div className="space-y-4">
               
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                      alt="Community Member"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">Community Mentor</p>
                    </div>
                  </div>
                </div>

               
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                      alt="Community Member"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Maria Rodriguez</h4>
                      <p className="text-sm text-gray-600">Community Member</p>
                    </div>
                  </div>
                </div>

                
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <p className="text-sm text-indigo-800">Private Discussion</p>
                  <p className="text-xs text-indigo-600">
                    Your conversations are confidential and secure.
                  </p>
                </div>

                
                <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">
                  End Discussion
                </button>
              </div> */}

              <img
              src={a1}
              alt="Team Collaboration"
              className="rounded-lg shadow-2xl"
            />
            </div>

           
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-tr from-indigo-500/20 to-teal-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;
