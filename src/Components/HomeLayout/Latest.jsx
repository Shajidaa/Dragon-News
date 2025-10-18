import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="mx-auto my-5 w-11/12 flex gap-3 items-center bg-[#F3F3F3] ">
      <div
        className="text-white bg-secondary 
      font-medium text-xl  px-3 py-4"
      >
        Latest
      </div>

      <Marquee className="flex gap-5 " pauseOnHover={true} speed={60}>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          repellat!
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          repellat!
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          repellat!
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
