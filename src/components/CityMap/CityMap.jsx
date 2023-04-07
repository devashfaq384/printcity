import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { changeSize } from "../../store/slices/Size";
import MapText from "./MapText";
import MapBoxApi from "./MapBoxApi";

function CityMap() {
  const dimension = useSelector((state)=>state.sizeState)

  return(
    <div className="relative" >
      <div style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out" }}>
        <MapBoxApi></MapBoxApi>
      </div>
      <MapText></MapText>
    </div>
  )
}

export default CityMap