import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyAHWN5zijWSIlenUT9yAYK9f4y8271WFTE";

const Maps = () => {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100vw", height: "400px" }}
        defaultCenter={{ lat: 40.7210144, lng: -74.0029993 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export { Maps };
