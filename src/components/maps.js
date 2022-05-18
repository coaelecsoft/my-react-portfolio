import React from "react";
import "./styles.css";


import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
//import MyMarker from "./MyMarker";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
        // return distance between the marker and mouse pointer
        return Math.sqrt(
            (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
        );
    }
};

const points = [
    { id: 1, title: "Karaburma", lat: 44.8166634, lng: 20.499998 },
    { id: 2, title: "Rakovica", lat: 44.7558470366, lng: 20.4391699052 },
    { id: 3, title: "Centar", lat: 44.7858470366, lng: 20.4591699052 }
];

export default function Maps() {
    return (
        <div  className="App">
            <GoogleMapReact
                bootstrapURLKeys={{
                    // remove the key if you want to fork
                    key: "AIzaSyBoV4ehpbFW1wb5EvZC34F89VLlczsBjgU",
                    language: "en",
                    region: "RS"
                }}
                defaultCenter={{ lat: 44.787197, lng: 20.457273 }}
                defaultZoom={11}
                distanceToMouse={distanceToMouse}
            >
                {points.map(({ lat, lng, id, title }) => {
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
}
