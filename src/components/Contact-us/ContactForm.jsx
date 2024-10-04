"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../Home/Navbar';
import SubmitFormIllustration from '../../../public/Home/Submit-Form-Illustration.svg';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_no: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const token = 'irrv211vui9kuwn11efsb4xd4zdkuq'; // API token

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://nexiblesapp.barecms.com/api/contactus', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'API-Key': token,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Thank you! Your message has been sent.');
        toast('Thank you! Your message has been sent.');
        setFormData({
          full_name: '',
          email: '',
          contact_no: '',
          subject: '',
          message: ''
        });
      } else {
        setResponseMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form min-h-screen text-white p-8" style={{ backgroundImage: 'url("/Contact_Us_Page/Contact_Us_Background.jpg")', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-16">
        <div className="md:max-w-2/3">
          <h1 className="text-[#f9e2b2] text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-xl text-[#fcfdfd] md:text-3xl mb-4 font-semibold">Make your journey of personalised gifting easy with us.</p>
          <p className="text-xl text-[#fcfdfd] md:text-3xl font-semibold">Do you have any questions? Please contact us right away.</p>
          <p className="text-xl md:text-3xl text-[#fcfdfd] font-semibold mb-4">We'd be delighted to address any queries you may have!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="full_name" className="block text-[#fcfdfd] mb-1">Name</label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="eg John Smith"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#fcfdfd] mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="eg JohnSmith@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact_no" className="block text-[#fcfdfd] mb-1">Number</label>
                  <input
                    type="tel"
                    id="contact_no"
                    placeholder="eg +91 88745 6xxxx"
                    value={formData.contact_no}
                    onChange={handleChange}
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#fcfdfd] mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="eg Diwali Gifting Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="eg Looking for customised pouches to give as gifts for my diwali party"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-2xl bg-transparent border border-white text-white placeholder-white mb-4"
                  rows="2"
                  required
                />
              </div>

              <div className="flex items-center">
                <Image
                  src={SubmitFormIllustration}
                  alt="Submit"
                  width={140}
                  height={140}
                  className="mr-4"
                />
                <button
                  type="submit"
                  className="bg-[#db5c3c] text-[#fffdfdc] mb-[6rem] ml-[-1rem] px-24 py-1 rounded-full text-3xl font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              {responseMessage && (
                <div className="text-white mt-4">
                  {responseMessage}
                </div>
              )}
            </form>
          </div>

          <div className="w-full md:w-[30%]">
            <div className="mb-6">
              <h2 className="text-[#f9e2b2] font-bold text-3xl">Address</h2>
              <p className="text-lg text-[#fcfdfd]">
                Art NEXT Pvt Ltd,<br />
                A/463, Ground Floor, TTC Industrial Area,<br />
                Mahape, MIDC, Navi Mumbai,<br />
                Thane - 400710, MH
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-[#f9e2b2] font-bold text-3xl">Call us</h2>
              <p className="text-lg text-[#fcfdfd]">+91 9821045101</p>
            </div>

            <div>
              <h2 className="text-[#f9e2b2] font-bold text-3xl">Write to us</h2>
              <p className="text-lg text-[#fcfdfd]">sales@artnext.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
