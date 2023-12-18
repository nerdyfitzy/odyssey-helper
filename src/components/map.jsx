import React, { useContext } from "react";
import MapSVG from "../assets/map.svg";
import { ValueContext } from "../page";
import bookLocations from "../helpers/book_locations";
import chronologicalLocations from "../helpers/chronological_locations";

const Map = () => {
  const values = useContext(ValueContext);
  console.log(values.slider);
  let styles, name;
  if (values.isBookSelected) {
    styles = bookLocations[values.slider - 1];
    name = bookLocations[values.slider - 1].name;
  } else {
    for (let loc of chronologicalLocations) {
      if (values.slider >= loc.min && values.slider <= loc.max) {
        styles = loc.styles;
        name = loc.name;
        console.log(loc);
        break;
      }
    }
  }
  return (
    <React.Fragment>
      <div className='relative w-100 flex justify-center'>
        <div
          style={styles}
          className='relative  h-4 w-4 rounded-full bg-rose-600'
        ></div>
        <img
          src={MapSVG}
          alt=''
          width={600}
          className='self-center outline outline-1 rounded-md'
        />
      </div>
      <div className='flex w-100 flex-row justify-center items-center'>
        <div className=' w-max flex justify-start self-center align-center static left-52'>
          <div className='h-4 w-4 self-center mx-2 rounded-full bg-rose-600'></div>
          <div className='pb-px my-2'>Odysseus' true position: {name}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map;
