import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";

const Carousal = ({ slides }) => {
  return(
    <>

    {
      slides.map(
        data=>{
          return(
            <>
            <div key={data.id} className="w-96 h-auto flex flex-col justify-start bg-green-100">
            <div className="">
              <img src={data.photo_url} className=" bg-cover bg-center" alt=""/>
            </div>
    
            <div className="">
              <div className="flex justify-between">
                <p className=" font-bold text-md">{data.restaurant_name}</p>
                <div className="flex">
                  <i>icon</i>
                  <h5>{data.ratings}</h5>
                  <p>({data.subscriber} +)</p>
                </div>
              </div>
            </div>
    
            <div className="">
              <p>৳৳৳ {data.food_type}</p>
            </div>
    
            <div className="">
              <p>Food {data.service_charge}</p>
            </div>
    
    
          </div>
            </>
          )
        }
      )
    }
      
    </>
  ) 

};

export default Carousal;
