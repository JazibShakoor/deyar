import Image from "next/image";
import React, { useState } from "react";
import usernameIcon from "../assets/icons/Icon.png";
import callIcon from "../assets/icons/callIcon.png";
import emailIcon from "../assets/icons/email.png";
import messageIcon from "../assets/icons/message.png";
import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"), // Add this line

  message: yup.string().required("Message is required"),
});

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);

      const response = await axios.post("/api/contact", { ...data, phoneCode });

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error("Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Form submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            {errors.firstName && (
              <p className="text-red-500 mt-2"></p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              name="lastName"
              id="lastName"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            {errors.lastName && (
              <p className="text-red-500 mt-2"></p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
        
            name="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 mt-2"></p>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700">
            Phone Number
          </label>
          <PhoneInput
            country={"ae"}
           
            placeholder="phonenumber"
            enableSearch={true}
            value={phoneCode}
            onChange={(value: string) => {
              setPhoneCode(value);
            }}
            inputProps={{
              ...register("phoneNumber"),
              name: "phoneNumber",
              value: phone,
              onChange: (e) => setPhone(e.target.value),
            }}
            inputStyle={{
              width: "100%",
              padding: "0.75rem",
              paddingLeft: "3rem", 
              borderRadius: "0.375rem",
              border: "1px solid #cbd5e0",
            }}
          />

          {errors.phoneNumber && (
            <p className="text-red-500 mt-2"></p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Your Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
          {errors.message && (
            <p className="text-red-500 mt-2"></p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Send Request"}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Form2;
