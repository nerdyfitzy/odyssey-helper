import React, { useState, useContext, createContext } from "react";
import Header from "./components/header.jsx";
import Changer from "./components/timelineChanger.jsx";
import Ages from "./components/ages.jsx";

const Page = () => {
  const [slider, setSlider] = useState(1);
  const [isBookSelected, setisBookSelected] = useState(true);
  const ValueContext = createContext({ slider, isBookSelected });

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
          <ValueContext.Provider value={slider}>
            {/* <Ages/> */}
          </ValueContext.Provider>
        </div>
      </ValueContext.Provider>
    </div>
  );
};

export default Page;
