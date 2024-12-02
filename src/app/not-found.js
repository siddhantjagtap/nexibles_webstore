"use client";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-[url('/ErrorPage/404%20Error%20Page%20Background.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative mt-16 sm:mt-24 md:mt-32 lg:mt-[8rem] -ml-2 sm:-ml-4 md:-ml-6 lg:ml-[-2rem] px-4 sm:px-6 md:px-8">
        <div className="-mt-16 sm:-mt-20 md:-mt-24 lg:mt-[-7rem]">
          {/* Oops! text positioned at the top */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#db5c3c] mb-2 sm:mb-3 md:mb-4 font-gotham-bold">
            Oops!
          </h1>

          {/* Centered text messages */}
          <div className="space-y-1 mb-4 sm:mb-5 md:mb-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#db5c3c] font-gotham-bold">
              You seem to be lost at sea.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#db5c3c] font-gotham-bold ">
              {`Let's go back to the shore.`}
            </p>
          </div>
        </div>

        {/* Back to Home button positioned over the "0" in 404 */}
        <div className="relative mt-32 sm:mt-40 md:mt-48 lg:mt-[17rem]">
          <a
            href="/"
            className="font-gotham-regular inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-[#db5c3c] text-white rounded-full hover:bg-[#c24e35] transition-colors duration-300 text-sm sm:text-base"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;