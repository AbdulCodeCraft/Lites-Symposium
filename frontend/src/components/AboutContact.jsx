import React from "react";

const AboutContact = () => {
  return (
    <div className="space-y-6 ">
      <h1 className="text-xl md:text-3xl font-semibold">Contact Us</h1>
      <p className="text-sm md:text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        exercitationem aperiam quidem consequatur. Maxime, debitis optio,
        asperiores odio corrupti placeat deleniti voluptates repellat
        dignissimos laborum nihil iste dolores quibusdam laboriosam.lorem Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae
        distinctio rerum maiores voluptatem suscipit, illo veritatis voluptates
        quo optio natus aperiam! Fugit distinctio illo accusamus assumenda.
        Dolores, maxime quaerat.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-500 transition-all text-sm md:text-lg duration-300 hover:bg-blue-600 text-white rounded-xl px-2 py-1 md:px-4 md:py-2">
            Email Us
        </button>
        <button className="bg-gray-500 transition-all text-sm md:text-lg duration-300 hover:bg-gray-600 text-white rounded-xl  px-2 py-1 md:px-4 md:py-2">
            Follow Us
        </button>
      </div>
    </div>
  );
};

export default AboutContact;
