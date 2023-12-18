import React from "react";

const Header = () => {
  return (
    <div className='mt-2 mb-4'>
      <div className='font-bold text-3xl'>Odyssey Helper</div>
      <div className='text-sm font-light text-gray-500'>
        by Kaylee Fitzpatrick{" "}
      </div>
      <a
        className='text-sm font-light underline text-cyan-400'
        href='https://github.com/nerdyfitzy/odyssey-helper'
        target='_blank'
        rel='noreferrer'
      >
        Find the project on Github!
      </a>
    </div>
  );
};

export default Header;
