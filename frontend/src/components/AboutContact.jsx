import React from "react";

const AboutContact = () => {
  return (
    <div className="space-y-6 ">
      <h1 className="text-xl md:text-3xl font-semibold">Contact Us</h1>
      <p className="text-sm md:text-lg">
        If you have any doubts, queries, or need more information about BytCraze
        2025, feel free to reach out to our organizing team. We’re here to
        assist you and ensure your symposium experience is smooth and memorable.
      </p>
      <div className="space-x-4">
        <a
          href="mailto:limca2k18@gmail.com"
          className="bg-blue-500 transition-all text-sm md:text-lg duration-300 hover:bg-blue-600 text-white rounded-xl px-2 py-1 md:px-4 md:py-3"
        >
          Email Us
        </a>

        <a
          href="https://www.instagram.com/bytecraze2k25?igsh=MW5odGowcjRwZ2gxYw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 transition-all text-sm md:text-lg duration-300 hover:bg-gray-600 text-white rounded-xl px-2 py-1 md:px-4 md:py-2">
            Follow Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutContact;
