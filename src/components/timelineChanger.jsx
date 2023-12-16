import React, { useContext } from "react";
import { ButtonGroup, Button, Slider } from "@mui/material";
import { ValueContext } from "../page";

//here lies jason rea, my heart and soul

const Changer = ({ handleSliderChange, handleTypeChange }) => {
  const { isBookSelected } = useContext(ValueContext);
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
          marks
          min={1}
          max={14}
          onChange={(event, val) => handleSliderChange(event, val)}
        />
      );
  }

  return (
    <div className='flex flex-col width-100 justify-center align-center'>
      <div className='flex flex-row justify-center'>
        <button
          onClick={() => handleTypeChange(false)}
          className='w-26 p-2 bg-sky-600 rounded-md mr-4 text-white'
        >
          Chronological
        </button>
        <button
          onClick={() => handleTypeChange(true)}
          className='w-24 bg-sky-600 rounded-md text-white'
        >
          Book
        </button>
      </div>
      {chooseSliderType()}
    </div>
  );
};

export default Changer;
