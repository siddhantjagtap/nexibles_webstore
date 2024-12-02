'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import logo from "../../../public/Home/Nexigiting Logo Without Background.gif";
const CNFPassword = ({ token }) => {
  console.log("token in cnf password", token);
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://nexiblesapp.barecms.com/api/login/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset successfully");
        router.push('/login');
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-8 text-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 mx-auto mb-4"
          />
          <hr className="mb-2" />
          <h2 className="text-2xl font-gotham-rounded-bold">Enter Your New Password</h2>
          <p className="text-sm font-gotham-light text-gray-600">
            Your new password must be different from previous passwords.
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/login/password.png"
              alt="password-logo"
              className="h-16 mt-4"
            />
          </div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            className="border-2 border-[#197d8e] rounded-full px-4 py-2 outline-none font-gotham-light"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 border-[#197d8e] rounded-full px-4 py-2 outline-none font-gotham-light"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#db5c3c] text-white rounded-full px-6 py-2 font-gotham-rounded-bold hover:bg-[#197d8e] transition-colors duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default CNFPassword;
