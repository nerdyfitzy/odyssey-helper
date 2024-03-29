import React, { useState, createContext } from "react";
import Header from "./components/header.jsx";
import Changer from "./components/timelineChanger.jsx";
import Ages from "./components/ages.jsx";
import Map from "./components/map.jsx";
import Disguises from "./components/disguises.jsx";
import Divider from "./components/divider.jsx";

export const ValueContext = createContext();

const Page = () => {
  const [slider, setSlider] = useState(1);
  const [isBookSelected, setisBookSelected] = useState(true);

  let text = ``;
  text += slider / 12 >= 1 ? `${Math.floor(slider / 12)} year` : ``;
  text += slider / 12 >= 2 ? `s ` : slider / 12 >= 1 ? ` ` : ``;
  text += slider % 12 >= 1 ? `${slider % 12} month` : ` `;
  text += slider % 12 >= 2 ? `s` : ``;

  function changeSliderVal(val) {
    setSlider(val);
  }
  function changeTypeVal(val) {
    setisBookSelected(val);
    setSlider(1);
  }

  return (
    <div className='font-sans flex flex-col pb-24'>
      <Header />
      <ValueContext.Provider value={{ slider, isBookSelected }}>
        <div className='mb-4 text-2xl'>
          {!isBookSelected ? `${text} after leaving Troy` : `Book ${slider}`}
        </div>
        <Changer
          handleSliderChange={(event, val) => changeSliderVal(val)}
          handleTypeChange={changeTypeVal}
        />
        <Divider />
        <Map />
        <Divider />
        <div className='grid gap-1 grid-cols-2 place-content-center px-24 self-center'>
          <Ages />

          <Disguises />
        </div>
      </ValueContext.Provider>
    </div>
  );
};

export default Page;
