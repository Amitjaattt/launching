import React from "react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
const Contactus: FunctionComponent = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const handleButtonClick1 = () => {
      // Use navigate to navigate to a different route
      navigate1('/Aboutus');
    };
   
    const handleButtonClick2 = () => {
      navigate2('/MainPage');
      };
  return (
    
        <div className="relative bg-white w-full h-[1700px] overflow-hidden text-left text-[22px] text-deepskyblue font-inter">
          <div className="absolute top-[32px] left-[150px] flex flex-row items-start justify-start gap-[151px]">
            <img
              className="relative w-[97.43px] h-[82px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
            
            <nav className="text-white font-bold py-2 px-4 rounded "> 
      <div className="relative rounded-[10px] bg-white shadow-[-10px_-5px_20px_rgba(61,_162,_255,_0.25),_20px_4px_20px_rgba(61,_162,_255,_0.22)] w-[598px] h-20">
          <div className="absolute top-[22px] left-[68px] flex flex-row items-center justify-start gap-[75px]">
          <button className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">     <div className="relative   text-[20px] font-medium"onClick={handleButtonClick2}>Home</div></button>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  <b className="relative  text-[20px] font-medium" onClick={handleButtonClick1}>About us</b></button>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <div className="relative text-[20px] font-medium">Contact Us</div> </button>
          </div>
          
        </div>
        <img
                className=" absolute top-[61.5px] left-[619.07px] w-[250px] h-[5px]"
                alt=""
                src="/line-4.svg"
              />
        </nav>
              
         
            <div className="rounded-[7px] [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-[15px] text-6xl text-white">
              <div className="relative font-semibold">Visit now</div>
            </div>
          </div>
          <div className="absolute top-[168px] left-[-5px] w-[1445px] h-[1532px] overflow-hidden text-base text-black">
            <div className="absolute top-[0px] left-[5px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#9ed1ff)] w-[1440px] h-[1028px] overflow-hidden">
              <div className="absolute top-[67px] left-[93px] w-[220px] h-[874px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[220px] h-[220px] overflow-hidden text-xl">
                  <img
                    className="absolute h-[36.8%] w-[25.76%] top-[13.2%] right-[37.04%] bottom-[50%] left-[37.2%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/location.svg"
                  />
                  <b className="absolute top-[60.45%] left-[18.64%]">
                    Mumbai, India
                  </b>
                </div>
                <div className="absolute top-[327px] left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[220px] h-[220px] overflow-hidden">
                  <img
                    className="absolute h-[29.6%] w-[37%] top-[20.4%] right-[31.4%] bottom-[50%] left-[31.6%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/message.svg"
                  />
                 <b className="absolute text-[17px] top-[145px] left-[5px]">
                    carechainai@gmail.com
                  </b>
                </div>
                <div className="absolute top-[654px] left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[220px] h-[220px] overflow-hidden">
                  <img
                    className="absolute h-[32.4%] w-[32.4%] top-[17.6%] right-[34%] bottom-[50%] left-[33.6%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/phonecall.svg"
                  />
                  <b className="absolute text-[20px] top-[55.36%] left-[8.18%]">
                    <p className="[margin-block-start:0] [margin-block-end:16.25px]">
                      +91 8291988205
                    </p>
                    <p className="m-0">+91 9049685048</p>
                  </b>
                </div>
              </div>
              <div className="absolute top-[40px] left-[346px] rounded-[21.66px] box-border w-[984px] h-[928px] overflow-hidden text-6xl border-[5px] border-solid border-deepskyblue">
                <div className="absolute top-[44px] left-[192px] rounded-[75.82px] bg-blue-600 w-[459px] h-[110px] text-[45px] text-white">
                  <b className="absolute top-[26px] left-[131px]">Contact form</b>
                  <div className="absolute top-[22px] left-[34px] rounded-[50%] bg-white w-[75.82px] h-[75.82px]" />
                </div>
                <img
                  className="absolute top-[323.5px] left-[101.5px] w-[741px] h-[5px]"
                  alt=""
                  src="/line-7.svg"
                />
                <img
                  className="absolute top-[429.5px] left-[101.5px] w-[741px] h-[5px]"
                  alt=""
                  src="/line-8.svg"
                />
                <img
                  className="absolute top-[540.5px] left-[101.5px] w-[741px] h-[5px]"
                  alt=""
                  src="/line-9.svg"
                />
                <b className="absolute top-[291px] left-[104px] opacity-[0.6]">
                <input className=" text-[20px] w-[670px] h-[62px]  text-black   bg-white   rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Name..." type="text" name=""/>
                </b>
                <b className="absolute top-[397px] left-[104px] opacity-[0.9]">
                <input className=" text-[20px] w-[670px] h-[62px] opacity-[0.5] text-black   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Email..." type="text" name=""/>

                </b>
                <b className="absolute top-[508px] left-[104px] opacity-[10]">
               <input className=" text-[20px] w-[670px] h-[62px] opacity-[0.5] text-black   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Message..." type="text" name="search"/>

                </b>
                <div className="absolute hover:bg-blue-600 top-[812px] left-[344px] rounded-mini bg-blue-400 w-64 h-[78px] overflow-hidden text-[40px] text-white">
      <button  >        <div className="absolute text-white text-[40px] top-[15px] left-[62px]">Submit</div></button>
                </div>
               
              </div>
            </div>
            <div className="absolute top-[1397px] left-[0px] bg-gainsboro w-[1445px] h-[135px] overflow-hidden text-[20.75px]">
              <a
                className="absolute top-[65.36px] left-[155.62px] [text-decoration:underline] font-bold text-[inherit]"
                href="https://www.carechainai.com/#"
                target="_blank"
              >
                2023 © All Rights Reserved | Designed and Developed by
                carechainai.com
              </a>
              <div className="absolute top-[51.87px] left-[1045.76px] w-[214.76px] flex flex-row items-center justify-start gap-[20.75px]">
          <img
            className="relative w-[51.87px] h-[51.87px] overflow-hidden shrink-0"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className="relative w-[40.11px] h-[40.11px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="relative w-[40.22px] h-[40.22px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="relative w-[45.64px] h-[40.45px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
              <b className="absolute top-[10.37px] left-[1021.9px] text-[25.94px]">
                Get in touch with us !
              </b>
            </div>
            <div className="absolute top-[1028px] left-[0px] bg-cornflowerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1445px] h-[369px] overflow-hidden text-[36.31px] text-white">
              <div className="absolute top-[13.49px] left-[155.62px] w-[783.46px] h-11 overflow-hidden">
                <b className="absolute top-[0px] left-[400.46px]">
                  Know more about us !
                </b>
              </div>
              <div className="absolute top-[95.45px] left-[155.62px] w-[599.46px] h-[31px] overflow-hidden text-[25.94px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  About CareChainAi:
                </div>
                <div className="absolute top-[0px] left-[400.46px] font-semibold">
                  Latest Updates:
                </div>
              </div>
              <div className="absolute top-[126.57px] left-[155.62px] w-[1158.87px] h-[153.56px] overflow-hidden text-[18.67px] text-black">
                <div className="absolute top-[0px] left-[2.07px] w-[1156.79px] h-[153.56px] overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] w-[361.04px] h-[153.56px] overflow-hidden">
                    <div className="absolute top-[15.56px] left-[0px] font-semibold inline-block w-[361.04px]">
                      CareChainAI is a revolutionary healthcare platform that
                      connects patients with specialized doctors, offers secure
                      health record management, virtual consultations, and more.
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[398.39px] w-[361.04px] h-[61.56px] overflow-hidden">
                    <div className="absolute top-[15.56px] left-[0px] font-semibold inline-block w-[361.04px]">
                      <p className="m-0">We are working on Developing our fully</p>
                      <p className="m-0">functional Website of CareChainAi .</p>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[872.51px] w-[284.29px] h-[140.85px]">
                    <b className="absolute top-[3px] left-[63.29px]">
                      <p className="[margin-block-start:0] [margin-block-end:15.56px]">
                        Mumbai, India
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:15.56px]">
                        carechainai@gmail.com
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:15.56px]">
                        +91 8291988205
                      </p>
                      <p className="m-0">+91 9049685048</p>
                    </b>
                    <img
            className="absolute h-[17.78%] w-[6.3%] top-[2.94%] right-[89.32%] bottom-[79.28%] left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="absolute h-[13.24%] w-[6.57%] top-[60.29%] right-[89.05%] bottom-[26.47%] left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="absolute h-[13.24%] w-[6.57%] top-[86.76%] right-[89.05%] bottom-[0%] left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
          <img
            className="absolute top-[34.24px] left-[0px] w-[35.27px] h-[35.27px] overflow-hidden"
            alt=""
            src="/typcnmail.svg"
          />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Contactus;
    


