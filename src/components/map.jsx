import React, { useContext } from "react";
import MapSVG from "../assets/map.svg";
import { ValueContext } from "../page";
import bookLocations from "../helpers/book_locations";
import chronologicalLocations from "../helpers/chronological_locations";

const Map = () => {
  const values = useContext(ValueContext);
  const styles = values.isBookSelected
    ? bookLocations[values.slider - 1]
    : chronologicalLocations[values.slider - 1];
  return (
    <div className='relative w-100 flex justify-center'>
      <div
        style={styles}
        className='relative  h-4 w-4 rounded-full bg-rose-600'
      ></div>
      <img src={MapSVG} alt='' width={600} />
    </div>
  );
};

export default Map;
