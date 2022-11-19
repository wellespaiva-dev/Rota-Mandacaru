import {useContext} from "react";
import {LocationTrackingContext} from "../context/trackingLocationContext";

export const useTrackingLocation = () => useContext(LocationTrackingContext);