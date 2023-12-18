import React, { useContext } from "react";
import { ButtonGroup, Button, Slider } from "@mui/material";
import { ValueContext } from "../page";

//here lies jason rea, my heart and soul

const Changer = ({ handleSliderChange, handleTypeChange }) => {
  const { isBookSelected } = useContext(ValueContext);
  const classes =
    "w-28 outline-black-500 mx-2 outline-1 text-black outline p-2 rounded-md ";
  function chooseSliderType() {
    if (isBookSelected)
      return (
        <Slider
          id='slider'
          defaultValue={1}
          step={1}
          marks
          min={1}
          max={23}
          onChange={(event, val) => handleSliderChange(event, val)}
        />
      );
    else
      return (
        <Slider
          id='slider'
          defaultValue={1}
          step={1}
          min={1}
          max={109}
          onChange={(event, val) => handleSliderChange(event, val)}
        />
      );
  }

  return (
    <div className='flex flex-col width-full justify-center align-center'>
      <div className='flex flex-row justify-center'>
        <button
          onClick={() => handleTypeChange(true)}
          className={isBookSelected ? `${classes}` + `bg-sky-400` : classes}
        >
          Book
        </button>
        <button
          onClick={() => handleTypeChange(false)}
          className={!isBookSelected ? `${classes}` + `bg-sky-400` : classes}
        >
          Chronological
        </button>
      </div>
      <div className='w-9/12 justify-self-center self-center'>
        {chooseSliderType()}
      </div>
    </div>
  );
};

export default Changer;
