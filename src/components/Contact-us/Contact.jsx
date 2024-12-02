"use client";
import React, { useState } from 'react';
import { toast } from "react-toastify";

function Contact() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        contact_no: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const token = 'irrv211vui9kuwn11efsb4xd4zdkuq';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://nexiblesapp.barecms.com/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'API-Key': token,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Thank you! Your message has been sent.');
                setFormData({
                    full_name: '',
                    email: '',
                    contact_no: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error sending message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='px-4'>
            <div className="md:mt-32 flex mb-4 gap-6 flex-col md:flex-row justify-between p-4 border rounded-3xl border-[#197d8e] max-w-5xl ">
                {/* Left side (Get in touch) */}
                <div className="bg-orange-100 p-6 rounded-3xl md:w-1/2 w-full ">
                    <h2 className="text-xl font-gotham-rounded-bold text-[#db5c3c] mb-4">Get in touch</h2>
                    <p className="text-gray-700 font-gotham-bold mb-4">
                        Please look through our FAQs section to get answers for some common queries.
                        {`In case you don't find what you're looking for do reach out to us from any of
                    the means below and we'll do our best to sort your issue.`}
                    </p>
                    <div className='mb-4'>
                        <p className='text-[#db5c3c] font-gotham-rounded-bold'>Call us</p>

                        <p className='text-gray-700 font-gotham-bold'>
                            <a href="tel:+919821045101" className="text-gray-700 font-gotham-bold">+91 9821045101</a>
                        </p>
                        <p className='text-gray-700 font-gotham-bold'> Between 10-5 from Monday to Friday</p>
                    </div>
                    <p className="text-gray-700">
                        <strong className='text-[#db5c3c] font-gotham-rounded-bold '>Write to us</strong><br />

                        <a href="mailto:sales@artnext.in" className="text-blue-600 underline">sales@artnext.in</a>
                    </p>

                </div>

                {/* Right side (Send us a message form) */}
                <div className="md:w-1/2 w-full mt-6 md:mt-0">
                    <h2 className="text-xl font-gotham-rounded-bold text-[#db5c3c] mb-4">Send us a message</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex space-x-4 font-gotham-light">
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                                required
                            />
                        </div>
                        <div className='flex space-x-4 font-gotham-light'>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-1/2 p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="contact_no"
                                value={formData.contact_no}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-1/2 p-3 space-x-4 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                                required
                                maxLength={10}
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full p-3 font-gotham-light border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full p-3 font-gotham-light border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                            rows="4"
                            required
                        ></textarea>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="font-gotham-rounded-bold px-3 py-3 bg-[#db5c3c] text-white rounded-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;