import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FcBiohazard } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import devss from "./devss.jpeg";
import Hmain from "./Hmain";
const Home = () => {
  return (
    <>
      <div className="flex mt-[20px]  justify-around items-center w-[100%] m-auto mb-[40px] ">
        <div className=" w-[30%] pb-[20px]">
          <div className="   flex justify-around w-[58%] ml-[6%] mt-[20px] items-center ">
            <div>
              <BsCheckCircle className="text-[#f24822]" />
            </div>

            <div>
              <h1 className="text-1xl font-bold text-[#f24822]">
                Best Business Platform-World Record 2021
              </h1>
            </div>
          </div>

          <div className=" w-[100%] text-7xl text-bold">
            <h1 className=" w-[120%] mt-[20px] text-[#282c4b] font-bold m-auto">
              Reach Your Business Goals in Record Time
            </h1>
          </div>
          <div className="text-2xl mt-5 ml-[4%] w-[100%]  m-auto text-left ...">
            <p>
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.{" "}
            </p>
          </div>

          <div className="flex justify-around  w-169 mt-10">
            <div className="border rounded-full ... bg-[#FB3F6C] h-[50px] w-[40%]">
              <button className="text-3xl  pt-3 text-[#ffffff] font-bold">Get Started</button>
            </div>

            <div className="flex justify-around  w-189">
              <div className="mt-6">
                <BsFillCaretRightSquareFill className="rounded-full ..."/>
              </div>
              <div className="text-1xl font-bold mt-5">
                Book a 30 min Quick meeting
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[100%]  h-[350px] mt-[40px] " src={devss} />
        </div>
      </div>

      <div className="mt-[30px]">
        <div className="flex justify-between  m-auto  w-[70%]">
          <div className=" h-[5%]">
            <img
              className="h-[20px] w-[190%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png"
            />
          </div>
          <div className="  h-[5%]">
            <img
              className="h-[20px]"
              src="https://cdn.cookielaw.org/logos/700c3fd0-3045-4864-8f19-92d2b64a3625/9b130af0-71e9-472a-bdc7-fba71dd37fb8/d4963280-c113-4e2f-868f-73aa4f8f71b5/Prudential.png"
            />
          </div>
          <div className="  h-[10%]">
            <img
              className="h-[20px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
            />
          </div>
          <div className=" h-[10%]">
            <img
              className="h-[20px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnB4_LVe4OMLHu-GN3dqsY9pf-RHM4EGACX5xx9plwey5H-yrp12xbMUZubF9ekJpwQ&usqp=CAU"
            />
          </div>
        </div>
      </div>

      <div className="mt-[70px]">
        <div className="text-left ... ml-[15%]  w-[10%]">
          <div className="text-2xl mt-20">
            <p className=" text-[#d8c022]">SERVICES</p>
          </div>
        </div>

        <div className="flex justify-around  gap-2  w-[80%] m-auto">
          <div className="text-left ...  w-[18%]">
            <div>
              <h1 className="text-2xl">Our Capabilities</h1>
            </div>
            <div>
              <p className="text-1xl">
                We will bring the breathe of our experience and industry
                knowledge to help you secceed
              </p>
            </div>
          </div>
          <div className="text-left ...  w-[10%]">
            <div>
              <FcImageFile className="text-4xl" />
            </div>
            <h1 className="text-2xl">Consult</h1>
            <div>
              <p className="text-1xl ">
                Leverage agile framework to provide a robust high level synopsys
                overviews
              </p>
            </div>
          </div>

          <div className="text-left ...  w-[10%]">
            <div>
              <FcBiohazard className="text-4xl" />
            </div>
            <h1 className="text-2xl">Create</h1>
            <div>
              <p className="text-1xl">
                Bring to the table survival strategies to ensure proactive
                domination
              </p>
            </div>
          </div>
          <div className="text-left ...  w-[10%]">
            <div>
              <div>
                <FcDribbble className="text-4xl" />
              </div>
              <h1 className="text-2xl">Collaborate</h1>
              <div>
                <p className="text-1xl ">
                  Grow the holistic world view of disruptive view of disruptive
                  innovation workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hmain/>
    </>
  );
};

export default Home;
