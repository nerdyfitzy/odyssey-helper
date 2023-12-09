import React, { useContext } from "react";
import { ButtonGroup, Button, Slider } from "@mui/material";

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
          max={250}
          onChange={(event, val) => handleSliderChange(event, val)}
        />
      );
  }

  return (
    <div className='flex flex-col '>
      <ButtonGroup variant='contained'>
        <Button onClick={() => handleTypeChange(false)}> Chronological </Button>
        <Button onClick={() => handleTypeChange(true)}> Book </Button>
      </ButtonGroup>
      {chooseSliderType()}
    </div>
  );
};

export default Changer;
