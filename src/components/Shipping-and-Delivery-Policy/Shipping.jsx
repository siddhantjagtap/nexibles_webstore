import React from "react";

function Shipping() {
  return (
    <div>
      <div
        className="min-h-screen p-4 md:p-8 mt-4 md:mt-14"
        style={{
          backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl md:text-4xl mt-24 md:mt-12 font-gotham-rounded-bold text-white text-center mb-4 md:mb-6">
          {`Shipping & Delivery Policy`}
        </h1>
        <div className="w-[95%] md:w-[90%] text-center mx-auto bg-white rounded-xl md:rounded-3xl p-4 md:p-8">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="">
                <p className="text-lg md:text-2xl mb-4 font-gotham-book">
                  Last updated: 28-02-2024 12:30:59
                </p>
                <div className="text-base font-gotham-light md:text-xl space-y-4">
                  {`For our international customers, we dispatch orders using registered international courier companies and/or international speed post exclusively. Domestic orders are shipped through registered domestic courier companies and/or speed post. Our goal is to send out orders within 3-5 business days or according to the agreed-upon delivery date confirmed during the order process. The actual delivery time is contingent on the norms of the courier company or post office.`}
                </div>
                <div className="text-base font-gotham-light md:text-xl space-y-4 mt-4">
                  {`Nexigifting is not responsible for any delays in delivery caused by courier companies or postal authorities. We assure you that we will hand over the consignment to the courier company or postal authorities within 3-5 business days from the date of the order and payment or as per the agreed-upon delivery date. The delivery will be made to the address specified by the buyer during the order placement. You will receive confirmation of service delivery at your registered email address.`}
                </div>
                <div className="text-base font-gotham-light md:text-xl mt-4">
                  {`If you encounter any issues while using our services, please don't hesitate to contact our helpdesk at `}
                  <a href="mailto:support@nexibles.com">
                    support@nexibles.com
                  </a>.
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;


