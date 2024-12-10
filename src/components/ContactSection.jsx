import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Get in Touch
            </h2>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message, and
              we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-indigo-500" />
                <span className="text-gray-300 text-sm lg:text-base">
                  contact@nullcommunity.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-indigo-500" />
                <span className="text-gray-300 text-sm lg:text-base">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-indigo-500" />
                <span className="text-gray-300 text-sm lg:text-base">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </div>
            </div>
          </div>

          {/* Relevant Image Section */}
          <div>
            <img
              src="https://st3.depositphotos.com/1385248/14794/i/450/depositphotos_147947683-stock-photo-hands-with-contact-us-words.jpg" // Replace with a relevant image URL
              alt="Contact us illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
