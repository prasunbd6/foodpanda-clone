import Slidesdb from "./Slidesdb"

const GoogleMapContainer = () => {


  return (
    <>



      {/* Google Map */}
      <div className="w-full h-full flex justify-center items-center flex-col md:relative">


        {/* Displaying Markers or Directions */}

        {
          Slidesdb.map((address) => {
            return (
              <>
                <iframe
                  src={address.map_link}
                  
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </>
            )
          })
        }



      </div>
    </>
  );
};

export default GoogleMapContainer;
