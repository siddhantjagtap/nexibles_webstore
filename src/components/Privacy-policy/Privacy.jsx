import React from "react";

function Privacy() {
  return (
    <div
      className="min-h-screen p-4 sm:p-8"
      style={{
        backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')",
      }}
    >
      <h1 className="text-2xl sm:text-4xl mt-14 md:mt-28 sm:mt-14 font-bold text-white text-center mb-6">
        {`Privacy Policy`}
      </h1>
      <div className="flex items-center text-center justify-center p-2 sm:p-4">
        <div className="w-[100%] sm:w-[90%] text-black bg-white p-4 sm:p-6 rounded-lg sm:rounded-3xl shadow-lg">
          <h1 className="text-lg sm:text-xl font-semibold ">{`1. Introduction`}</h1>
          <p className="mb-4 text-sm sm:text-base">
            {`Nexibles ("we," "us," or "our") is dedicated to protecting the privacy of individuals who interact with our services. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold ">{`2. Information We Collect`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`Personal Information: We may collect personal information, including but not limited to names, addresses, email addresses, phone numbers, and payment details.`}
          </p>
          <p className="mb-4 text-sm sm:text-base">
            {`Non-personal Information: We may collect non-personal information, such as browser information, IP addresses, and device information.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`3. How We Use Your Information`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`We use the information we collect for various purposes, including:`}
          </p>
          <ul className="list-inside mb-4 text-sm sm:text-base">
            <li>{`- Providing and improving our services`}</li>
            <li>{`- Personalizing your experience`}</li>
            <li>{`- Processing transactions`}</li>
            <li>{`- Communicating with you`}</li>
            <li>{`- Analyzing trends and user behavior`}</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold">{`4. Information Sharing`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`We may share your information with third parties for specific purposes, such as service providers, business partners, or legal requirements.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`5. Security`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`6. Cookies and Similar Technologies`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`We may use cookies and similar technologies to enhance your experience on our website. You can manage your preferences for these technologies through your browser settings.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`7. Your Choices`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`You have the right to access, update, or delete your personal information. You may also choose to opt-out of certain communications.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`8. Changes to this Privacy Policy`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`We may update this Privacy Policy to reflect changes in our practices. Please review this policy periodically for any updates.`}
          </p>

          <h2 className="text-lg sm:text-xl font-semibold">{`9. Contact Us`}</h2>
          <p className="mb-4 text-sm sm:text-base">
            {`If you have questions or concerns about this Privacy Policy, please contact us at support@nexibles.com.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

// import React from 'react';

// function Privacy() {
//     return (
//         <div className="min-h-screen p-8" style={({ backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')" })}>
//             <h1 className="text-4xl mt-14  font-bold text-white text-center mb-6">{`Privacy Policy`}</h1>
//             <div className="flex items-center text-center justify-center p-4">
//                 <div className="w-[90%] text-black bg-white p-6 rounded-3xl shadow-lg">
//                     <h1 className="text-xl font-semibold ">{`1. Introduction`}</h1>
//                     <p className="mb-4">
//                         {`Nexibles ("we," "us," or "our") is dedicated to protecting the privacy of individuals who interact with our services. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information.`}
//                     </p>
//                     <h2 className="text-xl font-semibold ">{`2. Information We Collect`}</h2>
//                     <p className="mb-4">
//                         {`Personal Information: We may collect personal information, including but not limited to names, addresses, email addresses, phone numbers, and payment details.`}
//                     </p>
//                     <p className="mb-4">
//                         {`Non-personal Information: We may collect non-personal information, such as browser information, IP addresses, and device information.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`3. How We Use Your Information`}</h2>
//                     <p className="mb-4">
//                         {`We use the information we collect for various purposes, including:`}
//                     </p>
//                     <ul className="list-inside mb-4">
//                         <li>{`- Providing and improving our services`}</li>
//                         <li>{`- Personalizing your experience`}</li>
//                         <li>{`- Processing transactions`}</li>
//                         <li>{`- Communicating with you`}</li>
//                         <li>{`- Analyzing trends and user behavior`}</li>
//                     </ul>

//                     <h2 className="text-xl font-semibold">{`4. Information Sharing`}</h2>
//                     <p className="mb-4">
//                         {`We may share your information with third parties for specific purposes, such as service providers, business partners, or legal requirements.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`5. Security`}</h2>
//                     <p className="mb-4">
//                         {`We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`6. Cookies and Similar Technologies`}</h2>
//                     <p className="mb-4">
//                         {`We may use cookies and similar technologies to enhance your experience on our website. You can manage your preferences for these technologies through your browser settings.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`7. Your Choices`}</h2>
//                     <p className="mb-4">
//                         {`You have the right to access, update, or delete your personal information. You may also choose to opt-out of certain communications.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`8. Changes to this Privacy Policy`}</h2>
//                     <p className="mb-4">
//                         {`We may update this Privacy Policy to reflect changes in our practices. Please review this policy periodically for any updates.`}
//                     </p>

//                     <h2 className="text-xl font-semibold">{`9. Contact Us`}</h2>
//                     <p className="mb-4">
//                         {`If you have questions or concerns about this Privacy Policy, please contact us at support@nexibles.com.`}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Privacy;
