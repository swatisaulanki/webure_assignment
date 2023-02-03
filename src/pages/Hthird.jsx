import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Hfinal from "./Hfinal";
import lasti from "./lasti.jpeg";
const Hthird = () => {
  return (
    <>
      <div className=" mt-11 h-[480px]">
        <div className="flex justify-around rounded-full ... mt-6 w-[60%] m-auto h-[380px]  text-blue-600 ">
          <div className="mt-5  text-left ...">
            <h1 className="font-bold text-2xl">OUR SOLUTIONS</h1>

            <div className="mt-5 text-3xl w-[50%] text-bold  text-left ... ">
              <p className="font-bold text-4xl">
                Launch and scale your
                <br /> marketing campaigns
              </p>
            </div>

            <div className=" mt-10 w-[50%] text-left ... ">
              <p className="font-bold text-2xl">
                We start with a a kick-off call with the respective project
                owners, onboard the teams on the project management platforms
                and, take off!
              </p>
            </div>
            <div className=" mt-10 w-[40%]">
              <button className=" text-2xl text-white rounded-full ... bg-[#3532d6] h-[50px] w-[40%]">
                Get Started
              </button>
            </div>
          </div>
          <div className="ml-[-100px]">
            <img className=" ml-[-100px] w-[696px] h-[380px]" src={lasti} />
          </div>
        </div>
      </div>

      <div className=" h-[280px]">
        <div className="flex justify-around   mt-4 gap-20  w-[60%] m-auto h-[160px]">
          <div className="border rounded-lg ... bg-blue-700 text-white font-bold ">
            <h1 className="mt-7 text-4xl">96%</h1>

            <div>
              <p>Client retetion </p>
              <p> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" bg-[#FB3F6C] rounded-lg ... text-white font-bold ">
            <h1 className="mt-7 text-4xl">10+</h1>
            <div>
              <p>Year of Sevices</p>
              <p> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" border rounded-lg ... bg-[#FFC300] text-white font-bold ">
            <h1 className="mt-7 text-4xl">70+</h1>
            <p>Professionals</p>
            <p> By Dailbor and Marino in Hong Kong</p>
          </div>
          <div className="bg-[#417FB3] border rounded-lg ...  text-white font-bold ">
            <h1 className="mt-7 text-2xl">$40M</h1>
            <p>In funding</p>
            <p> By Dailbor and Marino in Hong Kong</p>
          </div>
        </div>
      </div>
      <Hfinal />
    </>
  );
};

export default Hthird;
