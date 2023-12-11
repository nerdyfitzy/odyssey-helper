import React, { useState, useContext } from "react";
import { ValueContext } from "../page";
import path from "path";

const baseAges = JSON.parse("src/helpers/baseAges.json");

const Ages = () => {
  const values = useContext(ValueContext);
  //todo: make sure when book is selected it works
  const calculated_ages = !values.isBookSelected
    ? {
        telemachus: baseAges.telemachus + values.slider,
        penelope: baseAges.penelope + values.slider,
        odysseus: baseAges.odysseus + values.slider,
        suitors: baseAges.suitors + values.slider,
      }
    : {
        telemachus: baseAges.telemachus + values.slider,
        penelope: baseAges.penelope + values.slider,
        odysseus: baseAges.odysseus + values.slider,
        suitors: baseAges.suitors + values.slider,
      };
  return (
    <div className='flex flex-col'>
      <div>Telemachus {calculated_ages.telemachus}</div>
      <div>Odysseus {calculated_ages.odysseus}</div>
      <div>Penelope {calculated_ages.penelope}</div>
      <div>The Suitors (estimated average) {calculated_ages.suitors}</div>
    </div>
  );
};

export default Ages;
