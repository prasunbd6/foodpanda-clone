import { GoogleMap,useJsApiLoader } from "@react-google-maps/api";

const center={lat:48.8584, lng:2.2945}

const ApiMaps = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:"AIzaSyDGlcXO9axrFPZt2d9LggXj8t_JsF0BMn4"
    })
    
    if(!isLoaded){
        return <p className="text-bold">Loading...</p>
    }
    
    return (
        <>
            <div className="mt-50px">
                <GoogleMap center={center} zoom={15} className="w-full h-full">

                </GoogleMap>
            </div>
        </>
    );
}
 

 
export default ApiMaps;