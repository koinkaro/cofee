import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCoffee } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-amber-700" />,
      title: 'Address',
      details: [
        '123 Race Course Road',
        'Near City Mall',
        'Rajkot, Gujarat 360001',
        'India'
      ]
    },
    {
      icon: <FaPhone className="text-amber-700" />,
      title: 'Phone',
      details: [
        '+91 98765 43210',
        '+91 98765 43211'
      ]
    },
    {
      icon: <FaEnvelope className="text-amber-700" />,
      title: 'Email',
      details: [
        'info@chaichowk.com',
        'feedback@chaichowk.com'
      ]
    },
    {
      icon: <FaClock className="text-amber-700" />,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 8:00 AM - 10:00 PM',
        'Saturday - Sunday: 9:00 AM - 11:00 PM'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-amber-800 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Drop by our coffee shop, give us a call, or send us a message.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29694.522790149802!2d70.77486550000001!3d22.303314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2582e1aaef%3A0x59e247395d45e598!2sRace%20Course%20Rd%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717657487058!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chai Chowk location"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2 flex items-center">
                <FaCoffee className="mr-2 text-amber-700" />
                Visit Chai Chowk
              </h3>
              <p className="text-gray-600">
                Located in the heart of Rajkot, we're easily accessible from all parts of the city. Come visit us for a delightful coffee experience!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-xl">{info.icon}</div>
                    <h3 className="text-lg font-semibold text-amber-800">{info.title}</h3>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your message! We'll get back to you shortly.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Phone Number (Optional)"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 text-gray-600 text-sm">
              <p>
                By submitting this form, you agree to our privacy policy and terms of service.
                We'll use your information to respond to your inquiry and may contact you regarding our products and services.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our coffee shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Do you offer catering services?</h3>
              <p className="text-gray-600">
                Yes, we offer catering services for events and gatherings. Please contact us at least 48 hours in advance to discuss your requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Do you have Wi-Fi available?</h3>
              <p className="text-gray-600">
                Yes, we provide free Wi-Fi for all our customers. Feel free to ask our staff for the password.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Do you sell coffee beans and equipment?</h3>
              <p className="text-gray-600">
                Yes, we sell a variety of coffee beans and selected coffee equipment. Visit our shop to see the current selection or inquire about custom orders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Do you accommodate dietary restrictions?</h3>
              <p className="text-gray-600">
                We offer various options for different dietary needs, including vegetarian and vegan choices. Please ask our staff for recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
