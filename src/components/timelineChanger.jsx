import React, { useRef, useState, useReducer } from "react";
import { ButtonGroup, Button, Slider } from "@mui/material";

//here lies jason rea, my heart and soul

const Changer = (handleChange) => {
  const [isBookSelected, setBookSelected] = useState(true);
  //possible usereducer hook to transfer the slider value across compononents
  const [sliderVal, dispatch] = useReducer();

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
          onChange={(event, value) => (sliderVal.current = value)}
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
          onChange={(event, value) => (sliderVal.current = value)}
        />
      );
  }

  return (
    <div className='flex flex-col '>
      <ButtonGroup variant='contained'>
        <Button> Chronological </Button>
        <Button> Book </Button>
      </ButtonGroup>
      {chooseSliderType()}
    </div>
  );
};

export default Changer;
