import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyAHWN5zijWSIlenUT9yAYK9f4y8271WFTE";

const Maps = () => {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export { Maps };
