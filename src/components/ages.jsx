import React, { useState, useContext } from "react";

const Ages = () => {
  const values = useContext(ValueContext);
  return (
    <div className='flex flex-col'>
      <div>Telemachus</div>
      <div>Odysseus</div>
      <div>Penelope</div>
      <div>The Suitors (estimated average)</div>
    </div>
  );
};

export default Ages;
