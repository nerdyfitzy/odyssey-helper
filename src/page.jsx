import React, { useState, useContext, createContext } from "react";
import Header from "./components/header.jsx";
import Changer from "./components/timelineChanger.jsx";
import Ages from "./components/ages.jsx";
import Map from "./components/map.jsx";

export const ValueContext = createContext();

const Page = () => {
  const [slider, setSlider] = useState(1);
  const [isBookSelected, setisBookSelected] = useState(true);

  function changeSliderVal(val) {
    setSlider(val);
  }
  function changeTypeVal(val) {
    setisBookSelected(val);
  }

  return (
    <div>
      <Header />
      <ValueContext.Provider value={{ slider, isBookSelected }}>
        <Changer
          handleSliderChange={(event, val) => changeSliderVal(val)}
          handleTypeChange={changeTypeVal}
        />
        <>{slider}</>
        <div>
          <Ages />
          <Map />
        </div>
      </ValueContext.Provider>
    </div>
  );
};

export default Page;
