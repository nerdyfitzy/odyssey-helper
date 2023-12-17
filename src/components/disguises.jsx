import React, { useContext } from "react";
import disguisesList from "../helpers/odysseusDisguises";
import { ValueContext } from "../page";

const Disguises = () => {
  const values = useContext(ValueContext);
  let formatted = [];
  Object.keys(disguisesList[values.slider]).forEach((key) => {
    formatted.push({ name: key, val: disguisesList[values.slider][key] });
  });

  console.log(formatted);
  return (
    <div>
      {formatted.map((el) => (
        <div className='flex flex-col '>
          <div className='flex flex-col'>
            <div className='text-lg font-bold'>{el.name}</div>
            <div className='text-sm'> {el.val}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Disguises;
