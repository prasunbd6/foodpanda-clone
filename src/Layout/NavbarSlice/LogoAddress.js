import { HiOutlineMapPin } from "react-icons/hi2";

const LogoAddress = () => {
  return (
    <>
      <div className="hidden md:order-5 w-auto md:flex justify-center items-center gap-1 p-1 cursor-pointer group" >
        <i className="group-hover:text-pink-500 "><HiOutlineMapPin /></i>
        <p className="cursor-pointer text-[13px] text-pink-500 p-1 group-hover:bg-pink-200 group-hover:rounded-md">
          Ashraf Ali Road, Patharghata kotwali Chittagong.
        </p>
      </div>
    </>

  )
}

export default LogoAddress