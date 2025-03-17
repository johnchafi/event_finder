"use client"
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./autocomplete";

export default function MyMap() {
 const { isLoaded } = useLoadScript({
   googleMapsApiKey: "AIzaSyDuiizcLHytHUEtxto1OOBzpEdNixSO4LM",
   libraries: ["places"],
   coutries:["CA"]
 });
console.log("isLoaded =>" + isLoaded)
 if (!isLoaded) return <div>Loading...</div>;
 return <Map />;
}

function Map() {
 const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

 return (
    <>
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container absolute  w-full h-32" >
        <Marker position={center} />
    </GoogleMap>
    </>

 );
}