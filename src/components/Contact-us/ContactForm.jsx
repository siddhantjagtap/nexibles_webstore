import React from "react";
import Image from "next/image";
import Navbar from "../Home/Navbar";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

export default function ContactForm() {
  return (
    <div
      className="contact-form min-h-screen text-white p-4 md:p-8"
      style={{
        backgroundImage: 'url("/Contact_Us_Page/Contact_Us_Background.jpg")',
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto mt-8 md:mt-16">
        <div className="md:max-w-2/3">
          <h1 className="text-[#f9e2b2] text-3xl md:text-5xl font-bold mb-4 md:mt-24">
            Get in touch
          </h1>
          <p className="text-lg text-[#fcfdfd] md:text-3xl mb-2 md:mb-4 font-semibold">
            Make your journey of personalised gifting easy with us.
          </p>
          <p className="text-lg text-[#fcfdfd] md:text-3xl font-semibold">
            Do you have any questions? Please contact us right away.
          </p>
          <p className="text-lg md:text-3xl text-[#fcfdfd] font-semibold mb-4">
            We&aposd be delighted to address any queries you may have!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-2/3">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-[#fcfdfd] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="eg John Smith"
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#fcfdfd] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="eg JohnSmith@gmail.com"
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block text-[#fcfdfd] mb-1">
                    Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="eg +91 88745 6xxxx"
                    className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#fcfdfd] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="eg Diwali Gifting Inquiry"
                    className="w-full p-3 rounded-2xl bg-transparent border border-[#fcfdfd] text-[#fcfdfd] placeholder-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="eg Looking for customised pouches to give as gifts for my diwali party"
                  className="w-full p-3 rounded-2xl bg-transparent border border-white text-white placeholder-white mb-4"
                  rows="3"
                ></textarea>
              </div>

              {/* No change to the button layout */}
              <div className="flex items-center">
                <Image
                  src={SubmitFormIllustration}
                  alt="Submit"
                  width={120}
                  height={120}
                  className="mr-4 md:mr-[-1rem] md:w-52 md:h-52"
                />
                <button
                  type="submit"
                  className="bg-[#db5c3c] text-[#fffdfdc] mb-[6rem] ml-[-1rem] md:px-24 px-4 py-1 rounded-full text-xl md:text-3xl font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-[30%]">
            <div className="mb-6">
              <h2 className="text-[#f9e2b2] font-bold text-2xl md:text-3xl">
                Address
              </h2>
              <p className="text-base md:text-lg text-[#fcfdfd]">
                Art NEXT Pvt Ltd,
                <br />
                A/463, Ground Floor, TTC Industrial Area,
                <br />
                Mahape, MIDC, Navi Mumbai,
                <br />
                Thane - 400710, MH
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-[#f9e2b2] font-bold text-2xl md:text-3xl">
                Call us
              </h2>
              <p className="text-base md:text-lg text-[#fcfdfd]">
                +91 9821045101
              </p>
            </div>

            <div>
              <h2 className="text-[#f9e2b2] font-bold text-2xl md:text-3xl">
                Write to us
              </h2>
              <p className="text-base md:text-lg text-[#fcfdfd]">
                sales@artnext.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//old
// import React from 'react'
// import Image from 'next/image'
// import Navbar from '../Home/Navbar'
// import SubmitFormIllustration from '../../../public/Home/Submit-Form-Illustration.svg'

// export default function ContactForm() {
//   return (
//     <div className="contact-form min-h-screen  text-white p-8" style={{backgroundImage: 'url("/Contact_Us_Page/Contact_Us_Background.jpg")', backgroundSize: 'cover'}}>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-16">
//         <div className="md:max-w-2/3">
//           <h1 className="text-[#f9e2b2] text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
//           <p className="text-xl text-[#fcfdfd] md:text-3xl mb-4 font-semibold">Make your journey of personalised gifting easy with us.</p>
//           {/* <p className="text-xl text-[#fcfdfd] md:text-2xl font-semibold mb-4">easy with us.</p> */}
//           <p className="text-xl text-[#fcfdfd] md:text-3xl font-semibold">Do you have any questions? Please contact us right away.</p>
//           {/* <p className="text-xl text-[#fcfdfd] md:text-2xl font-semibold"> We'd be delighted to address any</p> */}
//           <p className="text-xl md:text-3xl text-[#fcfdfd] font-semibold mb-4"> We be delighted to address any queries you may have!</p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-2/3">
//             <form>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label htmlFor="name" className="block text-[#fcfdfd] mb-1">Name</label>
//                   <input type="text" id="name" placeholder="eg John Smith" className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white" />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-[#fcfdfd] mb-1">Email</label>
//                   <input type="email" id="email" placeholder="eg JohnSmith@gmail.com" className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white" />
//                 </div>
//                 <div>
//                   <label htmlFor="number" className="block text-[#fcfdfd] mb-1">Number</label>
//                   <input type="tel" id="number" placeholder="eg +91 88745 6xxxx" className="w-full p-3 rounded-2xl bg-transparent border border-white text-[#fcfdfd] placeholder-white" />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block text-[#fcfdfd] mb-1">Subject</label>
//                   <input type="text" id="subject" placeholder="eg Diwali Gifting Inquiry" className="w-full p-3 rounded-2xl bg-transparent border border-[#fcfdfd] text-[#fcfdfd] placeholder-white" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-white mb-1">Message</label>
//                 <textarea id="message" placeholder="eg Looking for customised pouches to give as gifts for my diwali party"  className="w-full p-3 rounded-2xl bg-transparent border border-white text-white placeholder-white mb-4" rows="1"></textarea>
//               </div>

//               <div className="flex items-center">
//                 <Image
//                   src={SubmitFormIllustration}
//                   alt="Submit"
//                   width={140}
//                   height={140}
//                   className="mr-4"
//                 />
//                 <button type="submit" className="bg-[#db5c3c] text-[#fffdfdc] mb-[6rem] ml-[-1rem] px-24 py-1 rounded-full text-3xl font-bold">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="w-full md:w-[30%]">
//             <div className="mb-6">
//               <h2 className="text-[#f9e2b2] font-bold text-3xl">Address</h2>
//               <p className="text-lg text-[#fcfdfd]">
//                 Art NEXT Pvt Ltd,<br />
//                 A/463, Ground Floor, TTC Industrial Area,<br />
//                 Mahape, MIDC, Navi Mumbai,<br />
//                 Thane - 400710, MH
//               </p>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-[#f9e2b2] font-bold text-3xl">Call us</h2>
//               <p className="text-lg text-[#fcfdfd]">+91 9821045101</p>
//             </div>

//             <div>
//               <h2 className="text-[#f9e2b2] font-bold text-3xl">Write to us</h2>
//               <p className="text-lg text-[#fcfdfd]">sales@artnext.in</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
