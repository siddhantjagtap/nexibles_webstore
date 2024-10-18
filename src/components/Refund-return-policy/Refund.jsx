import React from 'react';

function Refund() {
    return (
        <div>
            <div className="min-h-screen p-4 md:p-8" style={({ backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')" })}>
                <h1 className="text-2xl md:text-4xl mt-10 md:mt-24 font-gotham-light font-bold text-white text-center mb-4 md:mb-6">{`Return & Refund Policy`}</h1>
                <div className="w-[95%] md:w-[90%] text-center mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">
                    <p className="mb-4 text-sm md:text-base">{`We strive to ensure that you have a satisfying shopping experience with us. Our Return Policy outlines guidelines for returns, applicable only in the case of damaged or wrong products.`}</p>
                    
                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`1. Eligibility for Returns:`}</h2>
                        <p className="text-sm md:text-base">{`You are eligible to request a return only in the following situations:`}</p>
                        <ul className="pl-4 md:pl-6 text-sm md:text-base">
                            <li>{`Damaged Product: If the product you received is damaged during transit or has a manufacturing defect.`}</li>
                            <li>{`Wrong Product: If you receive a product different from the one you ordered.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`2. Return Process:`}</h2>
                        <p className="text-sm md:text-base">{`To initiate a return, please follow these steps:`}</p>
                        <ul className="pl-4 md:pl-6 text-sm md:text-base">
                            <li>{`Contact our Customer Support team at support@nexibles.com within 7 days of receiving the product.`}</li>
                            <li>{`Provide your order number, details of the damaged or wrong product, and photographic evidence if applicable.`}</li>
                            <li>{`Our Customer Support team will guide you through the return process and provide instructions on returning the product.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`3. Conditions for Return`}</h2>
                        <p className="text-sm md:text-base">{`The product must be in its original packaging, unused, and in the same condition as when you received it.`}</p>
                        <p className="text-sm md:text-base">{`All tags, labels, and accessories must be intact.`}</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`4. Inspection and Approval`}</h2>
                        <p className="text-sm md:text-base">{`Once we receive your returned product, we will inspect it to verify if it meets the conditions for return. If approved, we will process the refund or replacement.`}</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`5. Refund or Replacement`}</h2>
                        <p className="text-sm md:text-base">{`In the case of an approved return:`}</p>
                        <ul className="pl-4 md:pl-6 text-sm md:text-base">
                            <li>{`Refund: We will process a refund to your original payment method within 7 days.`}</li>
                            <li>{`Replacement: If you choose a replacement, we will dispatch the correct product to you at the earliest.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`6. Non-Returnable Items:`}</h2>
                        <p className="text-sm md:text-base">{`Certain products may not be eligible for return. These include:`}</p>
                        <ul className="pl-4 md:pl-6 text-sm md:text-base">
                            <li>{`Products without original packaging or tags.`}</li>
                            <li>{`Products that show signs of use or damage not caused during transit.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg md:text-2xl font-semibold">{`7. Contact Information`}</h2>
                        <p className="text-sm md:text-base">{`If you have any questions or concerns about our Return Policy, please contact our Customer Support team at support@nexibles.com`}</p>
                    </section>

                    <section>
                        <h2 className="text-lg md:text-2xl font-semibold">{`8. Changes to this Return Policy:`}</h2>
                        <p className="text-sm md:text-base">{`Nexibles.com reserves the right to modify or update this Return Policy at any time. Any changes will be effective upon posting on our website.`}</p>
                    </section>

                    <p className="mt-6 text-xs md:text-sm text-gray-600">{`By making a purchase on Nexibles.com, you acknowledge and agree to the terms outlined in this Return Policy.`}</p>
                </div>
            </div>
        </div>
    );
}

export default Refund;





// //old
// import React from 'react';

// function Refund() {
//     return (
//         <div>
//             <div className="min-h-screen p-8" style={({ backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')" })}>
//                 <h1 className="text-4xl  mt-14 font-gotham-light font-bold text-white text-center mb-6">{`Return & Refund Policy`}</h1>
//                 <div className="w-[90%] text-center mx-auto bg-white rounded-3xl shadow-lg p-8">
//                     <p className="mb-4">{`We strive to ensure that you have a satisfying shopping experience with us. Our Return Policy outlines guidelines for returns, applicable only in the case of damaged or wrong products.`}</p>
//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`1. Eligibility for Returns:`}</h2>
//                         <p>{`You are eligible to request a return only in the following situations:`}</p>
//                         <ul className="pl-6">
//                             <li>{`Damaged Product: If the product you received is damaged during transit or has a manufacturing defect.`}</li>
//                             <li>{`Wrong Product: If you receive a product different from the one you ordered.`}</li>
//                         </ul>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`2. Return Process:`}</h2>
//                         <p>{`To initiate a return, please follow these steps:`}</p>
//                         <ul className="pl-6">
//                             <li>{`Contact our Customer Support team at support@nexibles.com within 7 days of receiving the product.`}</li>
//                             <li>{`Provide your order number, details of the damaged or wrong product, and photographic evidence if applicable.`}</li>
//                             <li>{`Our Customer Support team will guide you through the return process and provide instructions on returning the product.`}</li>
//                         </ul>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`3. Conditions for Return`}</h2>
//                         <p>{`The product must be in its original packaging, unused, and in the same condition as when you received it.`}</p>
//                         <p>{`All tags, labels, and accessories must be intact.`}</p>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`4. Inspection and Approval`}</h2>
//                         <p>{`Once we receive your returned product, we will inspect it to verify if it meets the conditions for return. If approved, we will process the refund or replacement.`}</p>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`5. Refund or Replacement`}</h2>
//                         <p>{`In the case of an approved return:`}</p>
//                         <ul className="pl-6">
//                             <li>{`Refund: We will process a refund to your original payment method within 7 days.`}</li>
//                             <li>{`Replacement: If you choose a replacement, we will dispatch the correct product to you at the earliest.`}</li>
//                         </ul>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`6. Non-Returnable Items:`}</h2>
//                         <p>{`Certain products may not be eligible for return. These include:`}</p>
//                         <ul className="pl-6">
//                             <li>{`Products without original packaging or tags.`}</li>
//                             <li>{`Products that show signs of use or damage not caused during transit.`}</li>
//                         </ul>
//                     </section>

//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold">{`7. Contact Information`}</h2>
//                         <p>{`If you have any questions or concerns about our Return Policy, please contact our Customer Support team at support@nexibles.com`}</p>
//                     </section>

//                     <section>
//                         <h2 className="text-2xl font-semibold">{`8. Changes to this Return Policy:`}</h2>
//                         <p>{`Nexibles.com reserves the right to modify or update this Return Policy at any time. Any changes will be effective upon posting on our website.`}</p>
//                     </section>

//                     <p className="mt-6 text-sm text-gray-600">{`By making a purchase on Nexibles.com, you acknowledge and agree to the terms outlined in this Return Policy.`}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Refund;
