import React from "react";
import Form from "./form";
import Form2 from "./form2";

const ContactFormPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg backdrop-opacity-30 bg-black bg-opacity-50 backdrop-brightness-75">
      <div className="  sm:h-[60%] md:h-[65%] lg:h-[60%] xl:h-[65%] 2xl:h-[65%] rounded-lg  p-2 relative">
        <button
          onClick={onClose}
          className="absolute z-50 top-2 right-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Form2 />
      </div>
    </div>
  );
};

export default ContactFormPopup;
