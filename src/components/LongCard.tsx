import { FaCheck } from "react-icons/fa6";
import { IoEllipsisHorizontal } from "react-icons/io5";
const divStyle = "flex font-[400px] text-[14px] items-center py-1 gap-4";
const LongCard = () => {
  return (
    <div className="w-[300px] h-[704px]  rounded-[10px] bg-primary text-white  pt-5">
      {/* first div */}
      <div className="flex items-center flex-col relative h-[100px]">
        <h1 className=" lato font-semibold text-[24px] leading-[29px] text-black ">
          Standard
        </h1>
        <div className="flex gap-10 mt-5">
          <span className="line-through">N</span>
          <span className="font-bold text-[24px] leading-[36px]">FREE</span>
          <span className="">/</span>
        </div>
        <div className="absolute  bottom-1 right-[58px]">m</div>
      </div>
      {/* second div */}
      <div className="flex justify-center items-center py-2">
        <div className=" w-[280px] h-[432px]">
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">1 user 1 connected calender</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">up to 12 responses</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">upto 3 survey results archived</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="font-light">knowledge based</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">1 user 1 connected calender</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">up to 12 responses</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">upto 3 survey results archived</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="font-light">knowledge based</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">1 user 1 connected calender</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">up to 12 responses</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">upto 3 survey results archived</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="font-light">knowledge based</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">1 user 1 connected calender</span>
          </div>
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">up to 12 responses</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="">upto 3 survey results archived</span>
          </div>{" "}
          <div className={divStyle}>
            <span className="">
              <FaCheck />
            </span>
            <span className="font-light">knowledge based</span>
          </div>
          {/* third div  for ellipsis*/}
          <div className=" mt-1 flex justify-center ">
            <IoEllipsisHorizontal size={20} />
          </div>
        </div>
      </div>

      {/* Fourth div */}
      <div className="flex justify-center mt-16">
        <button className="text-primary w-[157px] h-[48px] px-3  rounded-[10px] bg-white border-[1px] my-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default LongCard;
