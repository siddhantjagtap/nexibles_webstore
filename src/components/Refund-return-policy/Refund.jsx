import React from 'react';

function Refund() {
  return (
    <div>
      <div
        className="min-h-screen p-4 md:p-8 md:px-12"
        style={{
          backgroundImage:
            "url('/Contact_Us_Page/Contact_Us_Background.jpg')",
        }}
      >
        <h1 className="text-2xl md:text-4xl md:mt-28 mt-28  font-gotham-rounded-bold text-white text-center mb-4 md:mb-6">{`Return & Refund Policy`}</h1>
        <div className="w-[95%] md:w-[90%] text-center mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8 md:px-36">
          <p className="mb-4 text-sm md:text-base font-gotham-light">{`We strive to ensure that you have a satisfying shopping experience with us. Our Return Policy outlines guidelines for returns, applicable only in the case of damaged or wrong products.`}</p>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`1. Eligibility for Returns:`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`You are eligible to request a return only in the following situations:`}</p>
            <ul className="pl-4 md:pl-6 text-sm font-gotham-light md:text-base">
              <li>{`Damaged Product: If the product you received is damaged during transit or has a manufacturing defect.`}</li>
              <li>{`Wrong Product: If you receive a product different from the one you ordered.`}</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`2. Return Process:`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`To initiate a return, please follow these steps:`}</p>
            <ul className="pl-4 md:pl-6 text-sm font-gotham-light md:text-base">
              <li>
                {`Contact our Customer Support team at `}
                <a href="mailto:support@nexibles.com">
                  support@nexibles.com
                </a>
                {` within 7 days of receiving the product.`}
              </li>

              <li>{`Provide your order number, details of the damaged or wrong product, and photographic evidence if applicable.`}</li>
              <li>{`Our Customer Support team will guide you through the return process and provide instructions on returning the product.`}</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`3. Conditions for Return`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`The product must be in its original packaging, unused, and in the same condition as when you received it.`}</p>
            <p className="text-sm md:text-base font-gotham-light">{`All tags, labels, and accessories must be intact.`}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`4. Inspection and Approval`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`Once we receive your returned product, we will inspect it to verify if it meets the conditions for return. If approved, we will process the refund or replacement.`}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`5. Refund or Replacement`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`In the case of an approved return:`}</p>
            <ul className="pl-4 md:pl-6 text-sm font-gotham-light md:text-base">
              <li>{`Refund: We will process a refund to your original payment method within 7 days.`}</li>
              <li>{`Replacement: If you choose a replacement, we will dispatch the correct product to you at the earliest.`}</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`6. Non-Returnable Items:`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`Certain products may not be eligible for return. These include:`}</p>
            <ul className="pl-4 md:pl-6 text-sm font-gotham-light md:text-base">
              <li>{`Products without original packaging or tags.`}</li>
              <li>{`Products that show signs of use or damage not caused during transit.`}</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-2xl font-gotham-book">{`7. Contact Information`}</h2>
            <p className="text-sm md:text-base font-gotham-light">
              {`If you have any questions or concerns about our Return Policy, please contact our Customer Support team at `}
              <a href="mailto:support@nexibles.com">
                support@nexibles.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-gotham-book">{`8. Changes to this Return Policy:`}</h2>
            <p className="text-sm md:text-base font-gotham-light">{`Nexigifting.com reserves the right to modify or update this Return Policy at any time. Any changes will be effective upon posting on our website.`}</p>
          </section>

          <p className="mt-6 text-xs md:text-sm text-gray-600 font-gotham-light">{`By making a purchase on Nexigifting.com, you acknowledge and agree to the terms outlined in this Return Policy.`}</p>
        </div>
      </div>
    </div>
  );
}

export default Refund;
