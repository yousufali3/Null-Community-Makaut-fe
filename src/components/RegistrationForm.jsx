import React, { useState } from "react";
import { X } from "lucide-react";
import { webinars } from "../data/webinars";
import { toast } from "react-toastify";

const RegistrationForm = ({ webinarId, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    webinarId,
  });

  const webinar = webinars.find((w) => w.id === webinarId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to be sent
    const registrationData = {
      name: formData.fullName,
      contactNumber: formData.phone,
      email: formData.email,
      id: formData.webinarId._id,
    };

    try {
      // Send the data to the backend
      const response = await fetch("http://192.168.0.105:8000/api/event/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
      if (response.status === 409) {
        toast.warn("You are already registered."); // Show warning toast for 409
        return;
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Registration successful!");
      console.log("Registration submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative max-w-lg mx-auto p-8 bg-gray-800 rounded-lg shadow-xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Heading */}
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Register for {webinar?.title}
      </h3>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            required
            placeholder="Enter your full name"
            className="mt-2 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email address"
            className="mt-2 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="Enter your phone number"
            className="mt-2 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
