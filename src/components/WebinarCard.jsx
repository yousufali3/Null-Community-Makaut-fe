import React from "react";
import { Calendar, Clock } from "lucide-react";

const WebinarCard = ({ webinar, onRegister }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <img
        src={webinar.image}
        alt={webinar.heading}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-semibold text-white mb-2 hover:text-indigo-400 transition-colors">
          {webinar.heading}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {webinar.body}
        </p>{" "}
        {/* Truncate text after 3 lines */}
        <div className="flex items-center space-x-6 text-gray-300 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-indigo-400" />
            <span>{formatDate(webinar.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-indigo-400" />
            <span>{webinar.time}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <button
          onClick={() => onRegister(webinar)}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none transition-colors"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default WebinarCard;
