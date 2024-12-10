import React, { useState, useEffect } from "react";
import axios from "axios";
import WebinarCard from "./WebinarCard";
import RegistrationForm from "./RegistrationForm";

const WebinarSection = () => {
  const [selectedWebinarId, setSelectedWebinarId] = useState(null);
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.105:8000/api/event/getall"
        );

        console.log(response);

        setWebinars(response.data.events);
      } catch (error) {
        console.error("Error fetching webinars:", error);
      }
    };

    fetchWebinars();
  }, []);

  const handleRegister = (webinarId) => {
    setSelectedWebinarId(webinarId);
  };

  return (
    <section id="webinars" className="pb-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-xl text-gray-400">
            Join our expert-led sessions and enhance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              webinar={webinar}
              onRegister={handleRegister}
            />
          ))}
        </div>

        {selectedWebinarId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
              <RegistrationForm
                webinarId={selectedWebinarId}
                onClose={() => setSelectedWebinarId(null)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WebinarSection;
