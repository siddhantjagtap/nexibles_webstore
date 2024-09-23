import React from 'react';

function Contact() {
    return (
        <div className="md:mt-28 flex mb-4 gap-6 flex-col md:flex-row justify-between items-start p-6 border rounded-3xl border-[#197d8e] max-w-4xl mx-auto">
            {/* Left side (Get in touch) */}
            <div className="bg-yellow-200 p-6 rounded-3xl md:w-1/2 w-full ">
                <h2 className="text-xl font-bold text-[#db5c3c] mb-4">Get in touch</h2>
                <p className="text-gray-700 font-bold mb-4">
                    Please look through our FAQs section to get answers for some common queries.
                    In case you don't find what you're looking for do reach out to us from any of
                    the means below and we'll do our best to sort your issue.
                </p>
                <div className='mb-4'>
                    <p className='text-[#db5c3c] font-bold'>Call us</p>
                    <p className='text-gray-700 font-bold'>+91 9821045101</p>
                    <p className='text-gray-700 font-bold'> Between 10-5 from Monday to Friday</p>
                </div>
                <p className="text-gray-700">
                    <strong className='text-[#db5c3c] font-bold '>Write to us</strong><br />
                    <a href="mailto:sales@artnext.in" className="text-blue-600 underline">sales@artnext.in</a>
                </p>
            </div>

            {/* Right side (Send us a message form) */}
            <div className="md:w-1/2 w-full mt-6 md:mt-0">
                <h2 className="text-xl font-semibold text-[#db5c3c] mb-4">Send us a message</h2>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                        required
                    />
                    <textarea
                        placeholder="Subject"
                        className="w-full p-3 border border-[#197d8e] rounded-lg focus:ring-2 focus:ring-[#197d8e] focus:outline-none"
                        rows="4"
                        required
                    ></textarea>
                    <button
                            type="submit"
                            className=" px-3 py-3 bg-[#db5c3c] text-white rounded-lg"
                        >
                            Submit
                        </button>
                    <div className='flex justify-between'>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
