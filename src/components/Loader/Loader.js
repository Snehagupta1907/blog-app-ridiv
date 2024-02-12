import React from 'react';
import { loader } from '../../utils/images';

const Loader = () => {
  return (
    <div className='flex items-center justify-center my-5'>
      <img src={loader} alt="Loading..." className="w-16" />
    </div>
  );
};

export default Loader;
