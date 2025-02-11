import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: 'kalriyahet@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_bridbzr', // Replace with your EmailJS service ID
        'template_xrmhdx6', // Replace with your EmailJS template ID
        templateParams,
        'xpEjehxPns0DvKaj4' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Toaster position="top-right" />
        <h1 className="text-2xl sm:text-3xl font-mono mb-6 text-[#569cd6]">const contact = {'{'}</h1>
        
        <div className="pl-4 sm:pl-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#9cdcfe]" />
              <span className="text-[#ce9178] text-sm sm:text-base">kalriyahet@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-[#9cdcfe]" />
              <a href="https://github.com/Aizenn99" className="text-[#ce9178] hover:text-[#007acc] text-sm sm:text-base">
                github.com/Het Kalriya
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-[#9cdcfe]" />
              <a href="https://www.linkedin.com/in/het-kalriya-10297b284/" className="text-[#ce9178] hover:text-[#007acc] text-sm sm:text-base">
                linkedin.com/in/Het Kalriya
              </a>
            </div>
          </div>

          <div className="bg-[#252526] p-4 sm:p-6 rounded-lg border border-[#3c3c3c]">
            <h2 className="text-lg sm:text-xl font-mono mb-6 text-[#9cdcfe]">Send me a message:</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md focus:outline-none focus:border-[#007acc]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md focus:outline-none focus:border-[#007acc]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md focus:outline-none focus:border-[#007acc]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-[#007acc] text-white rounded-md hover:bg-[#005c99] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
        <p className="text-[#569cd6] mt-6">{`}`};</p>
      </div>
    </div>
  );
};

export default Contact;
