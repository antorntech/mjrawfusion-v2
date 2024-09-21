import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="max-w-4xl mx-auto pb-5"
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name<span className="text-cyan-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className={`w-full px-4 py-3 border ${
              errors.name ? "border-cyan-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          />
          {errors.name && (
            <p className="text-cyan-500 text-sm">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="mobile"
          >
            Mobile Number<span className="text-cyan-500">*</span>
          </label>
          <input
            id="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Enter Your Number"
            className={`w-full px-4 py-3 border ${
              errors.mobile ? "border-cyan-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          />
          {errors.mobile && (
            <p className="text-cyan-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email Address<span className="text-cyan-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-cyan-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          />
          {errors.email && (
            <p className="text-cyan-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows="1"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="col-span-1 md:col-span-2 text-center">
          <button className="px-5 py-2 bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
