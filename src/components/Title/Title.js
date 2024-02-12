import React from 'react';

const Title = ({ title, color }) => {
  return (
    <div className="text-center relative section-title">
      <h3 style={{ color: color }} className="text-4xl font-semibold font-rubik relative">
        {title}
      </h3>
      <div
        className="w-40 h-1 bg-gray-300 mx-auto mt-3 mb-6"
        style={{ backgroundColor: color }}
      ></div>
      <p style={{ color: color }} className="max-w-lg mx-auto text-base font-lora leading-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore
      </p>
    </div>
  );
};

export default Title;
