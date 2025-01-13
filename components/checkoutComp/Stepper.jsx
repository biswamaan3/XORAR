"use client"
import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useCheckout } from "../providers/CheckoutProvider";

function Stepper() {
  const { step } = useCheckout();

  const getStepClasses = (currentStep) => {
    if (step > currentStep) {
      return "text-green-500 "; // Completed step
    }
    if (step === currentStep) {
      return "text-blue-600 "; // Active step
    }
    return "text-gray-500 "; // Inactive step
  };

  return (
<ol className="overflow-x-scroll hide-scrollbar flex  flex-row md:w-4/5 items-center justify-between w-full px-2 sm:px-6 mx-auto mt-4 text-sm 
font-medium md:text-center sm:text-base">
  {/* Step 1: Delivery Details */}
  <li
    className={`flex flex-col sm:flex-row items-center md:w-full sm:after:w-full sm:after:h-1 sm:after:border-b sm:after:border-gray-200 sm:after:mx-4 xl:after:mx-6  ${getStepClasses(
      1
    )}`}
  >
    <span className="flex items-center">
      <BiMessageSquareDetail className="w-6 h-6 sm:w-8 sm:h-8 me-2" />
      <span className="whitespace-normal break-words">Delivery Details</span>
    </span>
  </li>

  {/* Step 2: Payment */}
  <li
    className={`flex flex-col sm:flex-row items-center md:w-full sm:after:w-full sm:after:h-1 sm:after:border-b sm:after:border-gray-200 sm:after:mx-4 xl:after:mx-6  ${getStepClasses(
      2
    )}`}
  >
    <span className="flex items-center">
      <MdOutlinePayment className="w-6 h-6 sm:w-8 sm:h-8 me-2" />
      <span className="whitespace-normal break-words">Payment</span>
    </span>
  </li>

  {/* Step 3: Order Confirmation */}
  <li className={`flex flex-col sm:flex-row items-center ${getStepClasses(3)}`}>
    <span className="flex items-center">
      <FaThumbsUp className="w-6 h-6 sm:w-8 sm:h-8 me-2" />
      <span className="whitespace-normal break-words">Order Confirmation</span>
    </span>
  </li>
</ol>

  );
}

export default Stepper;
