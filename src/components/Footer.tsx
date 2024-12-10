import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">Null Community</span>
            </div>
            <p className="text-gray-400">
              Empowering developers through knowledge sharing and community building.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400">Home</a></li>
              <li><a href="#webinars" className="text-gray-400 hover:text-indigo-400">Webinars</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <Mail className="inline h-4 w-4 mr-2" />
                contact@nullcommunity.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Null Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;