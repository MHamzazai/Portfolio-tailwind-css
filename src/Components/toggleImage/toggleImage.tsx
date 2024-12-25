'use client';
import { useState } from "react";
import Image from "next/image";

export default function ImageToggler() {

    // make a state to toggle the image
    const [isImage1, setIsImage1] = useState<boolean>(true);
    // make another state to enable or disabled the button
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false); // Track button state

    // Toggle function
    const toggleImage = () => {
        setIsButtonDisabled(true); // Disable the button immediately
        setIsImage1(!isImage1);

        // Automatically switch back after 2 seconds
        setTimeout(() => {
            setIsImage1((prev) => !prev);
            setIsButtonDisabled(false); // Re-enable the button when the image switches back
        }, 2000);
    };

    return (
        <div className="">
            <div className="capitalize text-3xl mb-6 tracking-normal leading-10 font-bold text-white
            text-center xl:text-4xl xl:tracking-wide">
                click the button to see my photo
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                {/* Image container with smooth transitions */}
                <div
                    className={`rounded-lg shadow-xl shadow-teal-400 transition-all duration-200 ease-in-out 
                ${!isImage1 ? "border-4 border-black" : ""} 
                xl:hover:scale-105 xl:hover:shadow-xl`}
                >
                    <Image
                        src={isImage1 ? "/images/image.jpeg" : "/images/my-image-1.jpg"}
                        width={isImage1 ? 280 : 280}
                        height={isImage1 ? 150 : 250}
                        alt="Switchable Image"
                        className="rounded-lg transition-opacity-transform duration-200 ease-in-out"
                        key={isImage1 ? "image1" : "image2"} // Forces re-render for smooth transition
                    />
                </div>


                <div className="mb-5">
                    {/* Button */}
                    <button
                        onClick={toggleImage}
                        className={`mt-5 px-6 py-3 bg-red-600 text-xl text-white font-bold rounded-lg shadow-lg
                hover:bg-red-700 focus:outline-none focus:ring focus:ring-dark lg:hover:scale-110
                capitalize transition-all xl:text-2xl
                 ${isButtonDisabled ? "opacity-60" : ""}`}
                        disabled={isButtonDisabled} // disabled the button when click 
                    >
                        {isButtonDisabled ? "Wait..." : "click to see"}
                    </button>
                </div>

            </div>
        </div>
    )
}
