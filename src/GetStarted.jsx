import React, { useState } from "react";
import { Navigate, redirect, useLocation } from "react-router-dom";
import { Slider } from './components/ui/slider'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    country: "",
    language: "",
    companySize: "",
    primaryInterest: "",
    agreeToTerms: false,
  });
  const nums = ['5', '10', '20', '30', '50', '100', '500'];
  const [result, setResult] = useState(""); // Result message
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(false); // Success state

  const location = useLocation();
  const {
    selectedhr360Plans = [],
    selectediteamPlans = [],
    selectedeasyformsPlans = [],
    selectedleadkonnektPlans = [],
    selectedischoolPlans = [],
    selectedischoolformePlans = [],
    selectedeasyfeePlans = [],
    Users = 0,
  } = location.state || {};// Ensure location.state is available

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Calculate total (example function)
  const calculateTotal = () => {
    // You can replace this with actual logic to calculate the total
    return selectedhr360Plans.length * 100 + selectediteamPlans.length * 150; // Example logic
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Prepare data for submission
    const data = {
      name: formData.name,
      email: formData.email,
      selectedhr360Plans: selectedhr360Plans.join(", "),
      selectediteamPlans: selectediteamPlans.join(", "),
      selectedeasyformsPlans: selectedeasyformsPlans.join(", "),
      selectedleadkonnektPlans: selectedleadkonnektPlans.join(", "),
      selectedischoolPlans: selectedischoolPlans.join(", "),
      selectedischoolformePlans: selectedischoolformePlans.join(", "),
      selectedeasyfeePlans: selectedeasyfeePlans.join(", "),
      users: Users,
      total: calculateTotal().toFixed(2),
    };

    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    formDataToSend.append("email", data.email);
    formDataToSend.append("message", JSON.stringify(data));
    formDataToSend.append("access_key", "45558365-974b-4764-9a0a-c21ac4fbcc77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (response.ok) {
        setSuccess(true);
        setResult("Form submitted successfully.");
      } else {
        throw new Error(result?.message || "Something went wrong");
      }
    } catch (error) {
      setError(error.message);
      setResult("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <Navigate to="/thankyou" replace />; // Change "/" to your Home route if different
  }

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 px-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 uppercase">Get Started</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="mb-2">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Company Name */}
            <div className="mb-2">
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your company name"
                required
              />
            </div>


            {/* Country */}
            <div className="mb-2">
              <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              >
                <option value="" disabled selected>Select your country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* Language */}
            <div className="mb-2">
              <label htmlFor="language" className="block text-gray-700 font-medium mb-2">
                Language
              </label>
              <input
                required
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your preferred language"
              />
            </div>

            {/* Primary Interest */}
            <div className="mb-4">
              <label htmlFor="primaryInterest" className="block text-gray-700 font-medium mb-2">
                Primary Interest
              </label>
              <input
                type="text"
                id="primaryInterest"
                name="primaryInterest"
                value={formData.primaryInterest}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your primary interest"
                required
              />
            </div>
          </div>

          {/* Company Size */}
          <div className="mb-4">
            <label htmlFor="companySize" className="block text-gray-700 font-medium mb-2">
              Company Size
            </label>
            <Slider
              nums={nums}
              required
              defaultValue={[0]}
              max={6}
              step={1} />
          </div>

          {/* Agree to Terms Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                required
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Result or error message */}
          <span className="text-blue-900 flex justify-end mt-4">{result}</span>
        </form>
      </div>
      <br />
    </>
  );
};

export default Form;
