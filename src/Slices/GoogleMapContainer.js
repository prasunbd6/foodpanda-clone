import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const GoogleMapContainer = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <p className="text-md">Loading...</p>;
  }

  const center = { lat: 22.33037, lng: 91.83263 };

  return (
    <>
      


{/* Google Map */}
      <div className="w-full h-full flex justify-center items-center flex-col md:relative">
        
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {/* Displaying Markers or Directions */}
        </GoogleMap>
      </div>
    </>
  );
};

export default GoogleMapContainer;
