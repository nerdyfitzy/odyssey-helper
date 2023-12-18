import React, { useContext } from "react";
import { ValueContext } from "../page";
import baseAges from "../helpers/baseAges";

const Ages = () => {
  const values = useContext(ValueContext);
  //todo: make sure when book is selected it works
  const calculated_ages = values.isBookSelected
    ? {
        telemachus: 26,
        penelope: 31,
        odysseus: 41,
        suitors: 26,
      }
    : {
        telemachus: Math.floor(baseAges.telemachus + values.slider / 12),
        penelope: Math.floor(baseAges.penelope + values.slider / 12),
        odysseus: Math.floor(baseAges.odysseus + values.slider / 12),
        suitors: Math.floor(baseAges.suitors + values.slider / 12),
      };
  return (
    <div className='flex flex-col my-1 mb-2 w-96'>
      <div className='font-bold text-xl mb-2'>Ages</div>
      <div>Telemachus - {calculated_ages.telemachus}</div>
      <div>Odysseus - {calculated_ages.odysseus}</div>
      <div>Penelope - {calculated_ages.penelope}</div>
      <div>The Suitors (estimated average) - {calculated_ages.suitors}</div>
    </div>
  );
};

export default Ages;
