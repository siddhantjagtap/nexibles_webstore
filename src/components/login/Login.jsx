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
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState();
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
          emailAddress: email,
          password: password,
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
        <div className="flex items-center justify-center min-h-screen bg-[#FFF7F3]">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-center text-[#E9552B] mb-8">Sign in</h2>
                <div className="space-y-4">
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#E9552B] rounded-full text-[#E9552B] text-lg font-semibold">
                        <FaGoogle className="mr-3" /> Continue With Google
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#E9552B] rounded-full text-[#E9552B] text-lg font-semibold">
                        <FaFacebook className="mr-3" /> Continue With Facebook
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#E9552B] rounded-full text-[#E9552B] text-lg font-semibold">
                        <FaApple className="mr-3" /> Continue With Apple
                    </button>
                </div>
                <div className="text-center my-4 text-[#E9552B] font-semibold">Or sign in with email</div>
                <div className="space-y-4">
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#E9552B] rounded-full text-[#E9552B] text-lg font-semibold">
                        Log In
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#E9552B] rounded-full text-[#E9552B] text-lg font-semibold">
                        Create Account
                    </button>
                </div>
                <form onSubmit={handleRegister} className="space-y-4 mt-6">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            value={userDetails.firstName}
                            onChange={(e) => { setUserDetails({ ...userDetails, firstName: e.target.value }) }}
                            className="w-1/2 p-3 border-2 border-[#E9552B] rounded-full text-lg"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            value={userDetails.lastName}
                            onChange={(e) => { setUserDetails({ ...userDetails, lastName: e.target.value }) }}
                            className="w-1/2 p-3 border-2 border-[#E9552B] rounded-full text-lg"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={userDetails.emailAddress}
                        onChange={(e) => { setUserDetails({ ...userDetails, emailAddress: e.target.value }) }}
                        className="w-full p-3 border-2 border-[#E9552B] rounded-full text-lg"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={userDetails.password}
                        onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                        className="w-full p-3 border-2 border-[#E9552B] rounded-full text-lg"
                    />
                    <button type="submit" className="w-full bg-[#E9552B] text-white py-3 rounded-full text-lg font-bold">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
        {showModal && <ForgotPassword onClose={() => setShowModal(false)} />}
    </>
);
}

export default Login;




















// "use client";

// import React, { useState } from "react";
// import { useAuth } from "@/utils/authContext";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const NEXIBLE_URL = "https://nexiblesapp.barecms.com";

// const Login = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [registerLoading, setRegisterLoading] = useState(false);
//   const router = useRouter();
//   const { login } = useAuth();

//  const handleLogin = async (e) => {
//    e.preventDefault();
//    setLoginLoading(true);
//    try {
//      const response = await fetch(`${NEXIBLE_URL}/api/login`, {
//        method: "POST",
//        headers: {
//          "Content-type": "application/json",
//        },
//        body: JSON.stringify({
//          emailAddress: loginEmail,
//          password: loginPassword,
//        }),
//      });
//      const data = await response.json();
//      if (data.status === "success") {
//        const token = data.token;
//        login(data.data);
//        toast.success("Login successful!");
//        router.push("/");
//        localStorage.setItem("token", token);
//      } else {
//        toast.error("Invalid username or password. Please try again.");
//      }
//    } catch (error) {
//      console.log("Error during login:", error);
//      toast.error("An error occurred. Please try again.");
//    } finally {
//      setLoginLoading(false);
//    }
//  };

//  const handleRegister = async (e) => {
//    e.preventDefault();
//    setRegisterLoading(true);
//    try {
//      const response = await fetch(`${NEXIBLE_URL}/api/login/create`, {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify({
//          firstName,
//          lastName,
//          emailAddress: registerEmail,
//          password: registerPassword,
//        }),
//      });
//      const data = await response.json();
//      if (data.status === "error" && data.message === "User already exists") {
//        toast.error("An account with this email already exists.");
//      } else if (data.status === "success") {
//        toast.success("Account created successfully!");
//        setFirstName("");
//        setLastName("");
//        setRegisterEmail("");
//        setRegisterPassword("");
//      } else {
//        toast.error(data.message);
//      }
//    } catch (error) {
//      console.error("Error during registration:", error);
//      toast.error("Registration failed. Please try again.");
//    } finally {
//      setRegisterLoading(false);
//    }
//  };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
//       <div className="w-full max-w-md rounded-lg p-6 mt-24 mb-8">
//         <h2 className="text-3xl font-bold text-center text-[#db5c3c] mb-2">
//           Sign in
//         </h2>

//         <button className="w-full py-2 px-4 border border-[#197d8e] rounded-xl text-gray-400 mb-2 hover:bg-gray-50 transition duration-150">
//           Continue With Google
//         </button>
//         <button className="w-full py-2 px-4 border border-[#197d8e] rounded-xl text-gray-400 mb-2 hover:bg-gray-50 transition duration-150">
//           Continue With Facebook
//         </button>
//         <button className="w-full py-2 px-4 border border-[#197d8e] rounded-xl text-gray-400 mb-4 hover:bg-gray-50 transition duration-150">
//           Continue With Apple
//         </button>

//         <div className="text-center font-bold text-[#db5c3c] mb-4">
//           Or sign in with email
//         </div>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-3 py-2 border border-[#197d8e] rounded-xl mb-2"
//             value={loginEmail}
//             onChange={(e) => setLoginEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-3 py-2 border border-[#197d8e] rounded-xl mb-4"
//             value={loginPassword}
//             onChange={(e) => setLoginPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#db5c3c] text-white py-2 rounded-xl hover:bg-orange-600 transition duration-150"
//             disabled={loginLoading}
//           >
//             {loginLoading ? "Signing in..." : "Log In"}
//           </button>
//         </form>

//         <button className="w-full py-2 px-4 border border-[#197d8e] rounded-xl text-gray-400 mt-4 hover:bg-gray-50 transition duration-150">
//           Create Account
//         </button>

//         <form onSubmit={handleRegister} className="mt-6">
//           <div className="flex space-x-2 mb-2">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="w-1/2 px-3 py-2 border border-[#197d8e] rounded-xl"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="w-1/2 px-3 py-2 border border-[#197d8e] rounded-xl"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-3 py-2 border border-[#197d8e] rounded-xl mb-2"
//             value={registerEmail}
//             onChange={(e) => setRegisterEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-3 py-2 border border-[#197d8e] rounded-xl mb-4"
//             value={registerPassword}
//             onChange={(e) => setRegisterPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#db5c3c] text-white py-2 rounded-xl hover:bg-orange-600 transition duration-150"
//             disabled={registerLoading}
//           >
//             {registerLoading ? "Creating Account..." : "Create Account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// old
// "use client"
// import Link from 'next/link';
// import React from 'react'
// import { FaEnvelope, FaLock } from "react-icons/fa"
// import { useState, useEffect } from 'react';
// import { useAuth } from '@/utils/authContext';
// import { useRouter } from 'next/navigation';
// import Loader from '../comman/Loader';
// import { toast } from 'react-toastify';
// import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";
// import ForgotPassword from './ForgotPassword';
// import signupimg from "../../../public/login/signup-placeholder-nexibles.jpg"
// import Image from "next/image";
// function Login() {

//     const [email, setEmail] = useState();
//     const [loading, setLoading] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [password, setPassword] = useState();
//     const router = useRouter();
//     const { login } = useAuth();

//     const NEXIBLE_URL = "https://nexiblesapp.barecms.com"

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await fetch(`${NEXIBLE_URL}/api/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     emailAddress: email,
//                     password: password,
//                 }),
//             });
//             const data = await response.json();
//             console.log('data', data);
//             if (data.status === 'success') {
//                 const token = data.token;
//                 login(data.data);
//                 toast.success(data.status);
//                 router.push('/');
//                 localStorage.setItem('token', token);
//             }
//             else {
//                 toast.error(data.status)
//             }
//         } catch (error) {
//             console.log('Invalid Request', error);
//         }
//         finally {
//             setLoading(false);
//         }

//     }

//     const [userDetails, setUserDetails] = useState({
//         customerId: "",
//         firstName: "",
//         middleName: "",
//         lastName: "",
//         cName: "",
//         gender: "",
//         houseno: "",
//         floor: "",
//         address: "",
//         address2: "",
//         landmark: "",
//         city: "",
//         prov: "",
//         zip: "",
//         country: "",
//         phone: "",
//         emailAddress: "",
//         mobile: "",
//         mobile2: "",
//         company: "",
//         title: "",
//         workPhone: "",
//         dateOfBirth: "",
//         anniversary: "",
//         newsletter: "",
//         ipaddress: "",
//         subsms: "",
//         addedDate: "",
//         addedBy: "",
//         refby: "",
//         datasource: "",
//         occupation: "",
//         designation: "",
//         contactpref: "",
//         pref: "",
//         activatedon: "",
//         securecode: "",
//         active: "",
//         password: "",
//         profImage: "",
//     });

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`${NEXIBLE_URL}/api/login/create`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userDetails)
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             } else {
//                 const data = await response.json();
//                 console.log("data", data);
//                 toast.success(data.status);
//                 setUserDetails({
//                     customerId: "",
//                     firstName: "",
//                     middleName: "",
//                     lastName: "",
//                     cName: "",
//                     gender: "",
//                     houseno: "",
//                     floor: "",
//                     address: "",
//                     address2: "",
//                     landmark: "",
//                     city: "",
//                     prov: "",
//                     zip: "",
//                     country: "",
//                     phone: "",
//                     emailAddress: "",
//                     mobile: "",
//                     mobile2: "",
//                     company: "",
//                     title: "",
//                     workPhone: "",
//                     dateOfBirth: "",
//                     anniversary: "",
//                     newsletter: "",
//                     ipaddress: "",
//                     subsms: "",
//                     addedDate: "",
//                     addedBy: "",
//                     refby: "",
//                     datasource: "",
//                     occupation: "",
//                     designation: "",
//                     contactpref: "",
//                     pref: "",
//                     activatedon: "",
//                     securecode: "",
//                     active: "",
//                     password: "",
//                     profImage: "",
//                 })
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     useEffect(() => {
//         console.log("details", userDetails);
//     }, [userDetails]);

//     return (
//         <>
//             {loading && <Loader btnLoad={false} />}
//             <div className="bg-white mt-20">
//                 <div className="md:flex">
//                     <div className="md:w-1/2 w-full bg-white md:px-8 px-4 border-t py-4">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Log-in</h2>
//                         <hr />
//                         <p className="text-xl font-bold text-gray-900 py-2">Please login to access your account and explore amazing features.</p>
//                         <form onSubmit={handleLogin} action="" className="flex flex-col space-y-4 py-4">
//                             <div className="relative">
//                                 <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-900" />
//                                 <input
//                                     type="email"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     placeholder="Enter Your Email"
//                                     required
//                                     className="text-sm pl-12 lg:w-[450px] sm:w-full rounded-md border-2 border-gray-900 py-3 px-8 font-bold text-gray-900"
//                                 />
//                             </div>
//                             <div className="relative">
//                                 <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-900" />
//                                 <input
//                                     type="password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     value={password}
//                                     placeholder="Enter Your Password"
//                                     required
//                                     className="text-sm pl-12 lg:w-[450px] sm:w-full rounded-md  border-2 border-gray-900 py-3 px-8 font-bold text-gray-900"
//                                 />
//                             </div>
//                             <p onClick={() => setShowModal(true)} className="underline text-gray-600 cursor-pointer ml-2">Forgot Password</p>
//                             <p className="text-gray-900 text-sm mt-10">By signing in, you have read and agree to our General Terms and Conditions. For more details on how we use the information we collect about you, please read our Privacy and Cookie Policy.</p>
//                             <div className="mt-4">
//                                 <button className="bg-[#30384E] rounded-md text-white px-8 py-2 " type="submit" >LOG-IN</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="md:w-1/2 w-full bg-gray-300 p-8">
//                         <div className="bg-white h-full w-full">
//                             {/*<div className="flex flex-col justify-center items-center">*/}
//                             <Image
// src={signupimg}
//                                 alt="Login-placeholder"
//                                 className="w-full h-full" />
//                             {/* <Image className=""  alt="Small Pouch" width={100} height={100} /> */}
//                             {/* <h2 className="text-gray-900 font-bold text-xl">Dont have an account sign-up...</h2>
//                                 <div className="mt-6">

//                                     <div className="space-y-4">
//                                         <div className="">
//                                             <button className="text-sm tracking-wider text-start md:w-[400px] w-full rounded-md  text-white bg-black px-8 py-3 flex items-center justify-between">
//                                                 Continue with Google
//                                                 <FaGoogle className="ml-2" size={20} />
//                                             </button>
//                                         </div>
//                                         <div className="">
//                                             <button className="text-sm tracking-wider text-start md:w-[400px] w-full rounded-md  text-white bg-black px-8 py-3 flex items-center justify-between">
//                                                 Continue with Facebook
//                                                 <FaFacebook className="ml-2" size={20} />
//                                             </button>
//                                         </div>
//                                         <div className="">
//                                             <button className="text-sm tracking-wider text-start md:w-[400px] w-full rounded-md  text-white bg-black px-8 py-3 flex items-center justify-between">
//                                                 Continue with Apple
//                                                 <FaApple className="ml-2" size={20} />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div> */}
//                             {/*</div>*/}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white border-t">
//                     <div className="px-8 py-4">
//                         <h2 className="text-gray-900 font-bold py-2 text-xl">Create an account with email.</h2>
//                         <div className="py-2">
//                             <form action="" onSubmit={handleRegister}>
//                                 <div className="flex flex-wrap gap-10">
//                                     <div className="flex flex-col w-full md:w-1/5">
//                                         <label htmlFor="" className="text-gray-900 font-bold">First Name</label>
//                                         <input
//                                             type="text"
//                                             required
//                                             className="border-b border-gray-900 text-gray-900 w-full outline-none"
//                                             value={userDetails.firstName}
//                                             onChange={(e) => { setUserDetails({ ...userDetails, firstName: e.target.value }) }}
//                                         />
//                                     </div>
//                                     <div className="flex flex-col w-full md:w-1/5">
//                                         <label htmlFor="" className="text-gray-900 font-bold">Last Name</label>
//                                         <input
//                                             className="border-b border-gray-900 text-gray-900 w-full outline-none"
//                                             type="text"
//                                             required
//                                             value={userDetails.lastName}
//                                             onChange={(e) => { setUserDetails({ ...userDetails, lastName: e.target.value }) }}
//                                         />
//                                     </div>
//                                     <div className="flex flex-col w-full md:w-1/5">
//                                         <label htmlFor="" className="text-gray-900 font-bold">Email</label>
//                                         <input
//                                             className="border-b border-gray-900 text-gray-900 w-full outline-none"
//                                             type="email"
//                                             required
//                                             value={userDetails.emailAddress}
//                                             onChange={(e) => { setUserDetails({ ...userDetails, emailAddress: e.target.value }) }}
//                                         />
//                                     </div>
//                                     <div className="flex flex-col w-full md:w-1/5">
//                                         <label htmlFor="" className="text-gray-900 font-bold">Password</label>
//                                         <input
//                                             className="border-b border-gray-900 text-gray-900 w-full outline-none"
//                                             type="password"
//                                             required
//                                             value={userDetails.password}
//                                             onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="mt-4">
//                                     <button className="px-8 py-2 bg-[#111B36] text-white rounded-md  uppercase mt-6">create an account</button>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="py-4">
//                             <p className="text-gray-900 text-sm">By registering with your email address or logging in using Google or Facebook or Apple, you consent to receive transactional, promotional and/or commercial messages from us We may use several modes of communication concerning your website usage. Registration also enables us to manage your stored designs: By clicking on the Create an Account bution, you agree to our General Terms and Conditions. View our Privacy and Cookie Policy. You also authorize us (Nexibles Pvt. Ltd.) ) and its representatives to contact you through Call, Email SMS or WhatsApp. This consent evemdes your registration under DNC/NDNC (this would mean we would contact you even if you are registered on any Do Not Disturb list prior to this account creation)</p>
//                         </div>
//                     </div>
//                 </div>
//                 {showModal && <ForgotPassword onClose={() => setShowModal(false)} />}
//             </div>
//         </>
//     )
// }

// export default Login
