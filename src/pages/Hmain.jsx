import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import secondi from "./seondi.jpeg"
import Hthird from "./Hthird";
const Hmain = () => {
  return (
    <>
    <div className="mt-11 h-[380px]">
      <div className="flex justify-around mt-6 w-[70%] m-auto h-[360px] text-white bg-[#282c4b]">
        <div>
          <img className="h-[350px] text-left ..." src={secondi}/>
        </div>
        <div className="mt-5">
          <h1 className="text-left ...">WHY CHOOSE US</h1>

          <div className="mt-5 w-[400px] text-4xl text-bold  text-left ... ">
            <p>
              Take on any Challenge of <br /> the Digital World
            </p>
          </div>
            
            <div className=" text-left ...  ">
          <div className="flex justify-around mt-5 text-left ... ">
            <div>
              <BsCheckCircle className="ml-[-10px]" />
            </div>
            <div className="ml-[-10%] mr-[50%]">Corporate Financial Advisory</div>
          </div>

          <div className="flex justify-around  mt-5">
            <div>
             
              <BsCheckCircle className="ml-[-200%] "  />
            </div>
            <div className="ml-[-22%] mr-[40%]">Development of Financial Models</div>
          </div>

          <div className="flex justify-around text-left ...  mt-5">
            <div>
             
              <BsCheckCircle className="ml-[50%]"  />
            </div>
            <div className="mr-[70%]">Deal Structuring</div>
          </div>
          </div>
          <div className="border mt-10 border-collapse">
            <input className=" ml-[-120] h-[30px] w-[50%]  bg-[#282c4b]" placeholder="Enter your email ID" />
            <button className=" rounded-full ... bg-[#FB3F6C] h-[30px] w-[30%]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hthird/>
    </>
  );
};

export default Hmain;
