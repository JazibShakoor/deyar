import React from "react";
import Image from "next/image";
import Link from "next/link";
import starIcon from "../assets/icons/starIcon.png";
import rightArrowIcon from "../assets/icons/rightArrowIcon.png";
import logo from "../Picx/Picx/logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className="bg-bgCol dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Explore
            </h2>

            <div className="text-center">
              <p className="text-gray-600 mt-2">Find us on the map below:</p>

              <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5008927169583!2d55.25751967425883!3d25.18632533214307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694c700e12f9%3A0x190ce8d857467f06!2sThe%20Exchange%20Tower!5e0!3m2!1sen!2sae!4v1697011599749!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center flex items-start justify-between">
            <Image src={logo} width={65} alt="" />
            <div>
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                Ratings
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <Image src={starIcon} alt="ratings" width={30} height={30} />
                <Image src={starIcon} alt="ratings" width={30} height={30} />
                <Image src={starIcon} alt="ratings" width={30} height={30} />
                <Image src={starIcon} alt="ratings" width={30} height={30} />
                <Image src={starIcon} alt="ratings" width={30} height={30} />
              </div>
              <p className="text-gray-600 mt-2">5.2M satisfied customers</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="TermsandConditions"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="Privacypolicy"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">&copy; 2023 Company. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
