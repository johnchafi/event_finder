"use client"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect, useRef, useState } from "react";
  
  export default function PlacesAutocomplete ({location, setLocation}){
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyDuiizcLHytHUEtxto1OOBzpEdNixSO4LM",
    //     libraries: ["places"],
    //     coutries:["CA"]
    //   });
    // const {
    //   ready,
    //   value ,
    //   suggestions: { status, data },
    //   setValue,
    //   clearSuggestions,
    // } = usePlacesAutocomplete({
    //   requestOptions: {
    //     "country" : "CA",
    //   },
    //   debounce: 300,
    // });
    const libraries = ["places"];
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDuiizcLHytHUEtxto1OOBzpEdNixSO4LM",
        libraries,
      });
    const [input, setInput] = useState({});
    const inputRef = useRef(null);
    

    useEffect(() => {
        if (!isLoaded || loadError) return;
    
        const options = {
          componentRestrictions: { country: "ca" },
          fields: ["address_components", "geometry"],
        };
    
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
        const service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions(
            { input: "provide location string here for search" },
            (suggestions) => console.log(suggestions)
        );
        autocomplete.addListener("place_changed", () => handlePlaceChanged(autocomplete));
    
        // return () => autocomplete.removeListener("place_changed", handlePlaceChanged);
      }, [isLoaded, loadError]);

    const handleChange = (event) => {
            const {name, value} = event.target;
            setInput((values) => ({ ...values, [name]: value }));
            setLocation(value);
    };

    const handlePlaceChanged = async(address) => {
        if (!isLoaded) return;
        const place = address.getPlace()

        if (!place || !place.geometry) {
          setInput({});
          return;
        }
        formData(place)
      }

    const formData = (data) => {
        const addressComponents = data?.address_components;
        const componentMap = {
            subPremise: "",
            premise: "",
            street_number: "",
            route: "",
            country: "",
            postal_code: "",
            administrative_area_level_2: "",
            administrative_area_level_1: "",
          };
          for (const component of addressComponents) {
            const componentType = component.types[0];
            if (componentMap.hasOwnProperty(componentType)) {
              componentMap[componentType] = component.long_name;
            }
          }
          const formattedAddress =
            `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
          const latitude = data?.geometry?.location?.lat();
          const longitude = data?.geometry?.location?.lng();
      
          setInput((values) => ({
            ...values,
            streetAddress: formattedAddress,
            country: componentMap.country,
            zipCode: componentMap.postal_code,
            city: componentMap.administrative_area_level_2,
            state: componentMap.administrative_area_level_1,
            latitude: latitude,
            longitude: longitude,
          }));
    }


    // const ref = useOnclickOutside(() => {
    //   // When user clicks outside of the component, we can dismiss
    //   // the searched suggestions by calling this method
    //   clearSuggestions();
    // });
  
    // const handleInput = (e) => {
    //   // Update the keyword of the input element
    //   setValue(e.target.value);
    //   setLocation(e.target.value);
    // };
  
    // const handleSelect =
    //   ({ description }) =>
    //   () => {
    //     // When user selects a place, we can replace the keyword without request data from API
    //     // by setting the second parameter to "false"
    //     setValue(description, false);
    //     clearSuggestions();
  
    //     // Get latitude and longitude via utility functions
    //     getGeocode({ address: description }).then((results) => {
    //       const { lat, lng } = getLatLng(results[0]);
    //       console.log("📍 Coordinates: ", { lat, lng });
    //     });
    //   };
  
    // const renderSuggestions = () =>
    //   data.map((suggestion) => {
    //     const {
    //       place_id,
    //       structured_formatting: { main_text, secondary_text },
    //     } = suggestion;
  
    //     return (
    //       <li key={place_id} onClick={handleSelect(suggestion)}>
    //         <strong>{main_text}</strong> <small>{secondary_text}</small>
    //       </li>
    //     );
    // });
    return (
      <div className="w-full">
        <input
          ref={inputRef}
          value={input.streetAddress || location}
          onChange={handleChange}
          onMouseOut={(e)=>setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="fflex h-10 w-full border border-gray-800 rounded-xl text-white-500 bg-background  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 p-regular-16 outline-offset-0 focus:border focus:border-primary-800  focus-visible:ring-0 focus-visible:ring-offset-0"
          name="location"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {/* <ul>{renderSuggestions()}</ul> */}
      </div>
    );
  };