import {useJsApiLoader, GoogleMap} from "@react-google-maps/api"


const GoogleMap=()=>{

const {isLoaded}=useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
});

if(!isLoaded){
    return <p className="text-md">Loading...</p>
}

    return(
        <>
        {/* Google Map */}

            <div className="w-full h-full flex justify-center items-center flex-col">
                <GoogleMap center={}>
                    {/* Displaying Markers or Directions */}
                </GoogleMap>
            </div>
        </>
    )
}

export default GoogleMap;