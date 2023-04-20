import { useSelector } from "react-redux";
import MapText from "./MapText";
// import MapBoxApi from "./MapBoxApi";
import MapBoxApi from "./Custom";

function CityMap() {
  const dimension = useSelector((state)=>state.sizeState)

  return(
    <div className="relative" >
      {/* <div style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out" }}> */}
        {/* <MapBoxApi></MapBoxApi> */}
        <MapBoxApi></MapBoxApi>
      {/* </div> */}
      <MapText></MapText>
    </div>
  )
}

export default CityMap