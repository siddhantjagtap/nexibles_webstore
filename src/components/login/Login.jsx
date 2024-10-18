"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Loader from "../comman/Loader";
import { toast } from "react-toastify";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import ForgotPassword from "./ForgotPassword";
import signupimg from "../../../public/login/signup-placeholder-nexibles.jpg";
import Image from "next/image";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const NEXIBLE_URL = "https://nexiblesapp.barecms.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${NEXIBLE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: loginEmail,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        const token = data.token;
        login(data.data);
        toast.success(data.status);
        router.push("/");
        localStorage.setItem("token", token);
      } else {
        toast.error(data.status);
      }
    } catch (error) {
      console.log("Invalid Request", error);
    } finally {
      setLoading(false);
    }
  };

  const [userDetails, setUserDetails] = useState({
    customerId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    cName: "",
    gender: "",
    houseno: "",
    floor: "",
    address: "",
    address2: "",
    landmark: "",
    city: "",
    prov: "",
    zip: "",
    country: "",
    phone: "",
    emailAddress: "",
    mobile: "",
    mobile2: "",
    company: "",
    title: "",
    workPhone: "",
    dateOfBirth: "",
    anniversary: "",
    newsletter: "",
    ipaddress: "",
    subsms: "",
    addedDate: "",
    addedBy: "",
    refby: "",
    datasource: "",
    occupation: "",
    designation: "",
    contactpref: "",
    pref: "",
    activatedon: "",
    securecode: "",
    active: "",
    password: "",
    profImage: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${NEXIBLE_URL}/api/login/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log("data", data);
        toast.success(data.status);
        setUserDetails({
          customerId: "",
          firstName: "",
          middleName: "",
          lastName: "",
          cName: "",
          gender: "",
          houseno: "",
          floor: "",
          address: "",
          address2: "",
          landmark: "",
          city: "",
          prov: "",
          zip: "",
          country: "",
          phone: "",
          emailAddress: "",
          mobile: "",
          mobile2: "",
          company: "",
          title: "",
          workPhone: "",
          dateOfBirth: "",
          anniversary: "",
          newsletter: "",
          ipaddress: "",
          subsms: "",
          addedDate: "",
          addedBy: "",
          refby: "",
          datasource: "",
          occupation: "",
          designation: "",
          contactpref: "",
          pref: "",
          activatedon: "",
          securecode: "",
          active: "",
          password: "",
          profImage: "",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    console.log("details", userDetails);
  }, [userDetails]);

  return (
    <>
      {loading && <Loader btnLoad={false} />}
      <div className="flex items-center justify-center min-h-screen bg-white px-4 md:px-0">
        <div className="w-full max-w-md p-6 md:p-8 rounded-lg ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#db5c3c] mb-6 md:mb-8 mt-16 md:mt-24">
            Sign in
          </h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center px-3 py-2 md:px-4 md:py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-base md:text-lg">
              <FaGoogle className="mr-2 md:mr-3" /> Continue With Google
            </button>
            <button className="w-full flex items-center justify-center px-3 py-2 md:px-4 md:py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-base md:text-lg">
              <FaFacebook className="mr-2 md:mr-3" /> Continue With Facebook
            </button>
            <button className="w-full flex items-center justify-center px-3 py-2 md:px-4 md:py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-base md:text-lg">
              <FaApple className="mr-2 md:mr-3" /> Continue With Apple
            </button>
          </div>
          <div className="text-center my-4 text-[#db5c3c] font-semibold">
            Or sign in with email
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
            />
            <button
              type="submit"
              className="w-full bg-white border border-1 border-[#197d8e] text-gray-400 py-2 md:py-3 rounded-2xl text-base md:text-lg"
            >
              Log In
            </button>
          </form>
          <div className="text-center my-4 text-[#197d8e] font-semibold">
            Or create a new account
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={userDetails.firstName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, firstName: e.target.value });
                }}
                className="w-full md:w-1/2 p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={userDetails.lastName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastName: e.target.value });
                }}
                className="w-full md:w-1/2 p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              value={userDetails.emailAddress}
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  emailAddress: e.target.value,
                });
              }}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
              className="w-full p-2 md:p-3 border border-1 border-[#197d8e] rounded-2xl text-base md:text-lg"
            />
            <button
              type="submit"
              className="w-full bg-white border border-1 border-[#197d8e] text-gray-400 py-2 md:py-3 rounded-2xl text-base md:text-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;




//old
// "use client";
// import Link from "next/link";
// import React from "react";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { useAuth } from "@/utils/authContext";
// import { useRouter } from "next/navigation";
// import Loader from "../comman/Loader";
// import { toast } from "react-toastify";
// import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";
// import ForgotPassword from "./ForgotPassword";
// import signupimg from "../../../public/login/signup-placeholder-nexibles.jpg";
// import Image from "next/image";

// function Login() {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const router = useRouter();
//   const { login } = useAuth();

//   const NEXIBLE_URL = "https://nexiblesapp.barecms.com";

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch(`${NEXIBLE_URL}/api/login`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           emailAddress: loginEmail,
//           password: loginPassword,
//         }),
//       });
//       const data = await response.json();
//       console.log("data", data);
//       if (data.status === "success") {
//         const token = data.token;
//         login(data.data);
//         toast.success(data.status);
//         router.push("/");
//         localStorage.setItem("token", token);
//       } else {
//         toast.error(data.status);
//       }
//     } catch (error) {
//       console.log("Invalid Request", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const [userDetails, setUserDetails] = useState({
//     customerId: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     cName: "",
//     gender: "",
//     houseno: "",
//     floor: "",
//     address: "",
//     address2: "",
//     landmark: "",
//     city: "",
//     prov: "",
//     zip: "",
//     country: "",
//     phone: "",
//     emailAddress: "",
//     mobile: "",
//     mobile2: "",
//     company: "",
//     title: "",
//     workPhone: "",
//     dateOfBirth: "",
//     anniversary: "",
//     newsletter: "",
//     ipaddress: "",
//     subsms: "",
//     addedDate: "",
//     addedBy: "",
//     refby: "",
//     datasource: "",
//     occupation: "",
//     designation: "",
//     contactpref: "",
//     pref: "",
//     activatedon: "",
//     securecode: "",
//     active: "",
//     password: "",
//     profImage: "",
//   });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${NEXIBLE_URL}/api/login/create`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userDetails),
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       } else {
//         const data = await response.json();
//         console.log("data", data);
//         toast.success(data.status);
//         setUserDetails({
//           customerId: "",
//           firstName: "",
//           middleName: "",
//           lastName: "",
//           cName: "",
//           gender: "",
//           houseno: "",
//           floor: "",
//           address: "",
//           address2: "",
//           landmark: "",
//           city: "",
//           prov: "",
//           zip: "",
//           country: "",
//           phone: "",
//           emailAddress: "",
//           mobile: "",
//           mobile2: "",
//           company: "",
//           title: "",
//           workPhone: "",
//           dateOfBirth: "",
//           anniversary: "",
//           newsletter: "",
//           ipaddress: "",
//           subsms: "",
//           addedDate: "",
//           addedBy: "",
//           refby: "",
//           datasource: "",
//           occupation: "",
//           designation: "",
//           contactpref: "",
//           pref: "",
//           activatedon: "",
//           securecode: "",
//           active: "",
//           password: "",
//           profImage: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   useEffect(() => {
//     console.log("details", userDetails);
//   }, [userDetails]);

//   return (
//     <>
//       {loading && <Loader btnLoad={false} />}
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <div className="w-full max-w-md p-8  rounded-lg ">
//           <h2 className="text-4xl font-bold text-center text-[#db5c3c] mb-8 mt-24">
//             Sign in
//           </h2>
//           <div className="space-y-4">
//             <button className="w-full flex items-center justify-center px-4 py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-lg">
//               <FaGoogle className="mr-3" /> Continue With Google
//             </button>
//             <button className="w-full flex items-center justify-center px-4 py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-lg ">
//               <FaFacebook className="mr-3" /> Continue With Facebook
//             </button>
//             <button className="w-full flex items-center justify-center px-4 py-3 border border-1 border-[#197d8e] rounded-2xl text-gray-400 text-lg">
//               <FaApple className="mr-3" /> Continue With Apple
//             </button>
//           </div>
//           <div className="text-center my-4 text-[#db5c3c] font-semibold">
//             Or sign in with email
//           </div>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//               className="w-full p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//               className="w-full p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//             />
//             <button
//               type="submit"
//               className="w-full bg-white border border-1 border-[#197d8e] text-gray-400 py-3 rounded-2xl text-lg"
//             >
//               Log In
//             </button>
//           </form>
//           <div className="text-center my-4 text-[#197d8e] font-semibold">
//             Or create a new account
//           </div>
//           <form onSubmit={handleRegister} className="space-y-4">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 required
//                 value={userDetails.firstName}
//                 onChange={(e) => {
//                   setUserDetails({ ...userDetails, firstName: e.target.value });
//                 }}
//                 className="w-1/2 p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 required
//                 value={userDetails.lastName}
//                 onChange={(e) => {
//                   setUserDetails({ ...userDetails, lastName: e.target.value });
//                 }}
//                 className="w-1/2 p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={userDetails.emailAddress}
//               onChange={(e) => {
//                 setUserDetails({
//                   ...userDetails,
//                   emailAddress: e.target.value,
//                 });
//               }}
//               className="w-full p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={userDetails.password}
//               onChange={(e) => {
//                 setUserDetails({ ...userDetails, password: e.target.value });
//               }}
//               className="w-full p-3 border border-1 border-[#197d8e] rounded-2xl text-lg"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#db5c3c] text-white py-3 rounded-2xl text-lg font-bold"
//             >
//               Create Account
//             </button>
//           </form>
//         </div>
//       </div>
//       {showModal && <ForgotPassword onClose={() => setShowModal(false)} />}
//     </>
//   );
// }

// export default Login;
