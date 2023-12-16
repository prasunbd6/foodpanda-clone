import ApiMaps from "./ApiMaps";



const GoogleMapContainer = ({ selectedMapLink }) => {




  return (
    <>


      {/* Google Map - Test Purpose*/}
      <div className="w-full h-full flex justify-center items-center">

        {
          selectedMapLink && (
            <iframe

              src={selectedMapLink}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          )
        }


      </div>


    </>
  );
};

export default GoogleMapContainer;