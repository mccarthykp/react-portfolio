import { useState } from "react";
import ButtonTooltip from "../ButtonTooltip";
import React from "react";

const EmailButton = () => {
  const [tooltipMessage, setTooltipMessage] = useState("Copy Email");

  const handleCopy = () => {
    navigator.clipboard.writeText("mccarthy.kevin@proton.me");
    setTooltipMessage("Copied! ✨");

    setTimeout(() => {
      setTooltipMessage("Copy Email");
    }, 4000); // Reset the message after 4 seconds
  };

  return (
    <>
      <ButtonTooltip message={tooltipMessage}>
        <button
          type="button"
          className="bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-white font-medium py-4 px-2 rounded-lg shadow-lg focus:transparent transition duration-300"
          onClick={handleCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-8"
            fill="currentColor"
            viewBox="12 2 32 48"
          >
            <path d="M 9.4843 48.1914 L 47.2184 48.1914 C 51.4376 48.1914 53.8751 45.7539 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 10.2461 51.4141 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 4.5858 7.8086 2.1249 10.2227 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 45.7773 4.6093 48.1914 9.4843 48.1914 Z M 25.2109 29.1836 L 7.5155 11.7227 C 8.0312 11.5117 8.6405 11.3945 9.3671 11.3945 L 46.6564 11.3945 C 47.3826 11.3945 48.0157 11.5117 48.5548 11.7696 L 30.8827 29.1836 C 29.8749 30.1914 28.9843 30.6367 28.0468 30.6367 C 27.1093 30.6367 26.2187 30.1914 25.2109 29.1836 Z M 5.7109 40.9258 L 5.7109 15.0508 C 5.7109 14.8867 5.7109 14.9570 5.7109 14.8164 L 19.1874 28.0352 L 5.7343 41.3242 C 5.7109 41.2070 5.7109 41.0664 5.7109 40.9258 Z M 50.2890 15.0742 L 50.2890 40.9492 C 50.2890 41.0430 50.2890 41.1602 50.2890 41.2539 L 36.9062 28.0352 L 50.2890 14.8867 C 50.2890 15.0742 50.2890 15.0742 50.2890 15.0742 Z M 9.3671 44.6055 C 8.6874 44.6055 8.1249 44.5117 7.6327 44.3008 L 21.6484 30.4492 L 23.1718 31.9492 C 24.8124 33.5664 26.3827 34.2461 28.0468 34.2461 C 29.6874 34.2461 31.2812 33.5664 32.9218 31.9492 L 34.4452 30.4492 L 48.4376 44.2773 C 47.9452 44.5117 47.3360 44.6055 46.6564 44.6055 Z" />
          </svg>
        </button>
      </ButtonTooltip>
    </>
  );
};

export default EmailButton;
