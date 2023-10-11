import Image from 'next/image';
import React, { useState } from 'react';
import usernameIcon from '../assets/icons/Icon.png';
import callIcon from '../assets/icons/callIcon.png';
import emailIcon from '../assets/icons/email.png';
import messageIcon from '../assets/icons/message.png';
import axios from 'axios';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import "../styles/Home.module.css"; 

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'), // Add this line

  message: yup.string().required('Message is required'),
});


const Form = () => {
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


      const response = await axios.post('/api/contact', {...data, phoneCode});

      if (response.status === 200) {
        toast.success('Form submitted successfully!');
        reset(); 
      } else {
        toast.error('Form submission failed.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Form submission failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative p-4 pb-4">
      <div className="relative ">
        <div className="flex flex-col justify-center items-center">
          <p className=" text-7xl -mx-2.5  md:text-6xl mt-2 lg:text-8xl lg:mt-2 text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            contacts
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
            get in touch now
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 mb-10 text-bluePText">
        Our Senior Agent will contact you within 90 Seconds
        </p>
      </div>

      {/* FORM */}

      <div className=" sm:flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* 1st row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] mb-4 relative mt-36 sm:mt-0 ">
            <div className="grid-cols-1 grid justify-center relative">
                {/* <label className="relative "> */}
                  <input
                    {...register('firstName')}
                    name="firstName"
                    placeholder="First Name"
                    className="flex justify-between items-center rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize mb-5 sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                {/* </label> */}
                {errors.firstName && (
                  <span className=" text-red-500 text-xs text-center mt-1">
                    required
                  </span>
                )}
              </div>

              <div className="grid-cols-1 grid justify-center relative">
                {/* <label className="relative"> */}
                  <input
                    {...register('lastName')}
                    name="lastName"
                    placeholder="Last Name"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize  mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                {/* </label> */}
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1 text-center">
                    required
                  </span>
                )}
              </div>
            </div>

            {/* 2nd row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] mb-4 relative sm:mt-0 ">
              <div className="grid-cols-1 grid justify-center relative">
                {/* <label className="relative "> */}
                  <input
                    {...register('email')}
                    name="email"
                    placeholder="Email Address"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize  mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={emailIcon}
                    alt="email icon"
                    className="w-5 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                {/* </label> */}
                {errors.email && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>

              <div className="grid-cols-1 grid justify-center relative">
              <div className="input-phone-number flex justify-between items-center rounded-xl py-[15px] px-[8px] shadow-md sm:w-[320px] h-[60px] mb-5 sm:mb-0 dark:bg-gray-600">
  <PhoneInput
  inputStyle={{ border: "none", borderRadius: "15px", width: "320px", position: "relative", left: "-8px"}}       
  country={"ae"}
  placeholder="PhoneNumber"
  enableSearch={true}
  value={phoneCode}
  onChange={(value: string) => {
    console.log(value)
    setPhoneCode(value);
  }}
  inputProps={{
    ...register('phoneNumber'),
    name: 'phoneNumber',
    value: phone,
    onChange: (e) => setPhone(e.target.value)
  }}
 
/>
</div>

               
                  <Image
                    src={callIcon}
                    alt="phone icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                {/* </label> */}
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>
            </div>

            {/* 3rd row  */}

            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] mb-4 relative mt-24 sm:mt-0 ">
            <div className="grid-cols-1 grid justify-center relative">
                {/* <label className="relative"> */}
                  <input
                    {...register('message')}
                    name="message"
                    placeholder="Your Message"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[670px] h-[60px] overflow-ellipsis overflow-hidden dark:bg-gray-600"
                  />
                  <Image
                    src={messageIcon}
                    alt="message"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                {/* </label> */}
                {errors.message && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>
            </div>
            <div className='flex justify-center items-center'>
                <button
              type="submit"
              disabled={submitting}
              className="flex justify-center items-center py-[15px] px-[35px] bg-[#3361FF] hover:bg-[#11266e] rounded-[30px] capitalize text-white mt-7 sm:mt-0"
            >
              {submitting ? "Submitting..." : "Send Request"}
            
            </button>
            </div>
            <ToastContainer
              position="bottom-center"
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
        </form>
      </div>
    </div>
  );
};

export default Form;
