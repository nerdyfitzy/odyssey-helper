import React, { useContext } from "react";
import disguisesList from "../helpers/odysseusDisguises";
import { ValueContext } from "../page";

const Disguises = () => {
  const values = useContext(ValueContext);
  let formatted = [];
  if (values.isBookSelected) {
    Object.keys(disguisesList[values.slider]).forEach((key) => {
      formatted.push({ name: key, val: disguisesList[values.slider][key] });
    });
  } else {
    if (values.slider == 108) {
      formatted.push({
        name: "Phaeaecians",
        val: "Sees him as a nameless man, but Odysseus tells them of his journey",
      });
    }
    if (values.slider > 108) {
      Object.keys(disguisesList[23]).forEach((key) => {
        formatted.push({ name: key, val: disguisesList[23][key] });
      });
    }
  }

  return (
    <div className='w-96'>
      <div className='font-bold text-xl'>Odysseus' Disguises</div>
      {formatted.length > 0 ? (
        formatted.map((el) => (
          <div className='flex flex-col '>
            <div className='flex flex-col'>
              <div className='text-lg font-bold'>{el.name}</div>
              <div className='text-sm'> {el.val}</div>
            </div>
          </div>
        ))
      ) : (
        <>At the selected time he has no major disguise.</>
      )}
    </div>
  );
};

export default Disguises;
