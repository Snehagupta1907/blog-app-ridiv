import React from 'react';
import Title from '../../components/Title/Title';

const About = () => {
  return (
    <div className=" mx-auto py-10 h-screen">
      <Title title="About Us" color="#0D1741" />
      <div className="mt-8 px-8">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu sed libero vestibulum interdum. Morbi ac dui
          scelerisque, convallis quam a, tempor arcu. Duis commodo nulla non ex placerat, at fermentum orci sollicitudin.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus at dolor vel velit
          vehicula gravida. Aliquam lacinia justo eget sapien malesuada, vitae volutpat risus posuere. Proin euismod neque nec
          ante tincidunt, vel dictum orci sodales. Vestibulum ut leo sit amet eros consectetur pretium. Duis rhoncus arcu ac
          velit dictum, vel tempus arcu volutpat. Aenean nec tellus metus. Phasellus eget ipsum at metus interdum scelerisque.
          Nullam a ligula ac diam volutpat blandit. Cras quis elit nec ipsum faucibus aliquet. Donec non nisl nec eros pretium
          lobortis. Mauris quis condimentum metus, sit amet faucibus risus.
        </p>
      </div>
    </div>
  );
};

export default About;
