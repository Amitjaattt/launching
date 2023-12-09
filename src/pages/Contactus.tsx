import React from "react";
import Header from "../components/Header";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import vector from "../imgs/Vector.png";
import vector1 from "../imgs/Vector1.png";
const Contactus: FunctionComponent = () => {
   
  return (
    
        <div className="relative bg-white w-full h-[1700px] overflow-hidden text-left text-[22px] text-deepskyblue font-inter">
       <Header></Header>
      
          <div className="absolute top-[168px] left-[-5px] w-[1445px] h-[1532px] overflow-hidden text-base text-black">
            <div className="absolute top-[0px] left-[5px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#9ed1ff)] w-[1440px] h-[550px] sm:h-[750px] lg:h-[1028px] overflow-hidden">
              <div className="absolute top-[0px] sm:top-[70px] lg:top-[67px] left-[3px] sm:left-[19px] lg:left-[93px] w-[400px] sm:w-[140px] lg:w-[220px] h-[200px] sm:h-[874px] lg:h-[874px] overflow-hidden">
                <div className="absolute top-[0px] sm:top-[0px] lg:top-[0px] left-[8px] sm:left-[-0px] lg:left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[88px] sm:w-[140px] lg:w-[220px] h-[88px] sm:h-[130px] lg:h-[220px] overflow-hidden text-[10px] sm:text-[15px] lg:text-xl">
                  <img
                    className="animate-trans-right absolute h-[30px] sm:h-[40px] lg:h-[36.8%] w-[35px] sm:w-[40px] lg:w-[25.76%] top-[13.2%] right-[37.04%] bottom-[50%] left-[37.2%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/location.svg"
                  />
                  <b className="absolute top-[60px] sm:top-[80px] lg:top-[60.45%] left-[13px] sm:left-[22px] lg:left-[18.64%]">
                    Mumbai, India
                  </b>
                </div>
                <div className="absolute top-[0px] sm:top-[200px] lg:top-[327px] left-[115px] sm:left-[-0px] lg:left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[88px] sm:w-[140px] lg:w-[220px] h-[88px] sm:h-[130px] lg:h-[220px] overflow-hidden text-[8px] sm:text-[11px]   lg:text-[17px] ">
                  <img
                    className="animate-trans-right absolute h-[30px] sm:h-[40px] lg:h-[29.6%]  w-[35px] sm:w-[40px] lg:w-[37%] top-[15px] sm:top-[15px] lg:top-[20.4%] right-[31.4%] bottom-[50%] left-[31.6%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/message.svg"
                  />
                 <b className="absolute  top-[60px] w-[0px]  sm:top-[80px] lg:top-[145px] left-[5px] sm:left-[4px] lg:left-[5px]">
                    carechainai@gmail.com
                  </b>
                </div>
                <div className="absolute top-[0px] sm:top-[420px] lg:top-[654px] left-[220px] sm:left-[-0px] lg:left-[0px] rounded-mini bg-white shadow-[10px_5px_10px_rgba(0,_0,_0,_0.25)] w-[88px] sm:w-[140px] lg:w-[220px] h-[88px] sm:h-[130px] lg:h-[220px] overflow-hidden text-[9px] sm:text-[13px] lg:text-[20px] ">
                  <img
                    className="animate-trans-right absolute h-[30px] sm:h-[40px] lg:h-[32.4%] w-[35px] sm:w-[40px] lg:w-[32.4%] top-[10px] sm:top-[10px] lg:top-[17.6%] right-[34%] bottom-[50%] left-[33.6%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/phonecall.svg"
                  />
                  <b className="absolute  top-[45px] sm:top-[63px] lg:top-[55.36%] left-[5px] sm:left-[15px] lg:left-[8.18%]">
                    <p className="[margin-block-start:0] [margin-block-end:16.25px]">
                      +91 8291988205
                    </p>
                    <p className="m-0">+91 9049685048</p>
                  </b>
                </div>
              </div>
              <div className="absolute top-[100px] sm:top-[40px] lg:top-[40px] left-[12px] sm:left-[193px] lg:left-[346px] rounded-[21.66px] box-border w-[300px] sm:w-[530px] lg:w-[984px] h-[400px] sm:h-[600px] lg:h-[928px] overflow-hidden text-6xl border-[5px] border-solid border-deepskyblue">
                <div className="absolute top-[15px] sm:top-[33px] lg:top-[44px] left-[15px] sm:left-[90px] lg:left-[239px] rounded-[75.82px] bg-blue-600 w-[258px] sm:w-[330px] lg:w-[459px] h-[70px] sm:h-[80px] lg:h-[110px] text-[23px] sm:text-[33px] lg:text-[45px] text-white">
                  <b className="absolute top-[18px] sm:top-[23px]  lg:top-[26px] left-[80px] sm:left-[90px] lg:left-[131px]">Contact form</b>
                  <div className="absolute top-[9.98px] sm:top-[17px] lg:top-[22px] left-[25px] sm:left-[27px] lg:left-[34px] rounded-[50%] bg-white top-[30px] w-[40px] sm:w-[50px] lg:w-[75.82px] h-[40px] sm:h-[50px] lg:h-[75.82px]" />
                </div>
                <img
                  className="animate-trans-right absolute top-[60px] sm:top-[18px] lg:top-[323.5px] left-[150px] sm:left-[90px] lg:left-[101.5px] w-[500px] sm:w-[530px] lg:w-[741px] h-[5px] sm:h-[5px] lg:h-[5px]"
                  alt=""
                  src="/line-7.svg"
                />
                <img
                  className="animate-trans-right absolute top-[429.5px] left-[101.5px] w-[741px] h-[5px]"
                  alt=""
                  src="/line-8.svg"
                />
                <img
                  className="animate-trans-right absolute top-[540.5px] left-[101.5px] w-[741px] h-[5px]"
                  alt=""
                  src="/line-9.svg"
                />
                <b className="absolute top-[120px] sm:top-[160px] lg:top-[291px] left-[20px] sm:left-[20px] lg:left-[104px] opacity-[0.6]">
                <input className=" text-[20px] w-[200px] sm:w-[400px] lg:w-[670px] h-[52] sm:h-[50px] lg:h-[62px]  text-black   bg-white   rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Name..." type="text" name=""/>
                </b>
                <b className="absolute top-[180px] sm:top-[280px] lg:top-[397px] left-[20px] sm:left-[20px] lg:left-[104px] opacity-[0.9]">
                <input className=" text-[20px] w-[200px] sm:w-[400px] lg:w-[670px]  h-[52] sm:h-[50px] lg:h-[62px] opacity-[0.5] text-black   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Email..." type="text" name=""/>

                </b>
                <b className="absolute top-[240px] sm:top-[390px] lg:top-[528px] left-[20px] sm:left-[20px] lg:left-[104px] opacity-[10]">
               <input className=" text-[20px] w-[200px] sm:w-[400px] lg:w-[670px]  h-[62px] sm:h-[50px] lg:h-[152px] opacity-[0.5] text-black   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Your Message..." type="text" name="search"/>

                </b>
                <div className="absolute hover:bg-blue-600 top-[330px] sm:top-[500px] lg:top-[812px] left-[30px] sm:left-[90px] lg:left-[344px] rounded-mini bg-blue-400 w-[100px] sm:w-[130px] lg:w-64 h-[50px] sm:h-[60px] lg:h-[78px] overflow-hidden text-[28px] sm:text-[31px] lg:text-[40px] text-white">
      <button  >        <div className="absolute text-white text-[20px] sm:text-[29px] lg:text-[40px] top-[15px] left-[20px] sm:left-[20px] lg:left-[62px]">Submit</div></button>
                </div>
               
              </div>
            </div>
            <div className="absolute top-[997px] sm:top-[1200px] lg:top-[1374px] left-[0px] bg-gainsboro w-[1445px] h-[135px] overflow-hidden text-[20.75px]">
              <a
                className="absolute  top-[70px] sm:top-[50px] lg:top-[60.36px]  left-[13px] sm:left-[20px] lg:left-[120.62px] [text-decoration:underline] font-bold text-[inherit] w-[300px] sm:w-[600px] lg:w-[1000.76px] text-[11px] sm:text-[13px] lg:text-[22px]  "
                href="https://www.carechainai.com/#"
                target="_blank"
              >
                2023 © All Rights Reserved | Designed and Developed by
                carechainai.com
              </a>
              <div className="absolute top-[30px] sm:top-[50px] lg:top-[51.87px] left-[15px] sm:left-[500px] lg:left-[1045.76px] w-[100px] sm:w-[150px] lg:w-[214.76px] flex flex-row items-center justify-start gap-[20.75px]">
          <img
            className="animate-trans-right relative w-[30px] sm:w-[30px] lg:w-[51.87px] h-[30px] sm:h-[30px] lg:h-[51.87px] overflow-hidden shrink-0"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className="animate-trans-right relative  w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="animate-trans-right relative  w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="animate-trans-right relative  w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
              <b className="absolute top-[36px] sm:top-[17px] lg:top-[21px] left-[180px] sm:left-[500px] lg:left-[1045px]  text-[13px] sm:text-[17px] lg:text-[24px]">
                Get in touch with us !
              </b>
            </div>
            <div className="absolute top-[549px] sm:top-[749px] lg:top-[1020px] left-[0px] bg-cornflowerblue w-[1388px]  h-[450px] sm:h-[456px] lg:h-[356px] overflow-hidden text-left text-white">
            <b className="absolute top-[8px] sm:top-[15px] lg:top-[13px] left-[22px] sm:left-[200px] lg:left-[536px] text-[26px] sm:text-[30px] lg:text-[35px]">
            Know more about us !
          </b>
             
             
                <div className="absolute top-[65px] sm:top-[85px] lg:top-[92px] left-[40px] sm:left-[24px] lg:left-[80px] text-[22px] sm:text-[20px] lg:text-[25.94px] font-semibold">
                  About CareChainAi:
                </div>
                <div className="absolute top-[215px] sm:top-[85px] lg:top-[92px] left-[40px] sm:left-[295px] lg:left-[536px] text-[20px] sm:text-[20px] lg:text-[25.94px] font-semibold">
                  Latest Updates:
                </div>
           
            
                    <div className="absolute  top-[100px] sm:top-[130px] lg:top-[137px] left-[40px] sm:left-[26px] lg:left-[80px] text-[13px] sm:text-[16px] lg:text-[21.94px] font-semibold text-black inline-block  w-[250px] sm:w-[210px] lg:w-[348px]">
                      CareChainAI is a revolutionary healthcare platform that
                      connects patients with specialized doctors, offers secure
                      health record management, virtual consultations, and more.
                    </div>
                 

                    <div className="absolute  top-[250px] sm:top-[130px] lg:top-[137px] left-[40px] sm:left-[296px] lg:left-[538px] text-[13px] sm:text-[16px] lg:text-[21.94px] font-semibold text-black inline-block  w-[250px] sm:w-[190px] lg:w-[348px]">
                      <p className="m-0">We are working on Developing our fully</p>
                      <p className="m-0">functional Website of CareChainAi .</p>
                    </div>
                  </div>
                 
                  <div className="absolute h-[20%] sm:h-[25%] lg:h-[38.2%] w-[10%] sm:w-[19%] lg:w-[19.74%] top-[44%] sm:top-[39%] lg:top-[34.27%] right-[3%] sm:right-[5%] lg:right-[8.72%] bottom-[12%] sm:bottom-[20%] lg:bottom-[27.53%] left-[30%] sm:left-[20%] lg:left-[69.54%] text-black">
            <img
              className="animate-trans-right absolute h-[17px] sm:h-[20px] lg:h-[27px] w-[17px] sm:w-[20px] lg:w-[28px] top-[240px] sm:top-[360px] lg:top-[744px] right-[89.32%] bottom-[79.28%] left-[-380px] sm:left-[234px] lg:left-[-3px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector1}
            />
            <img
              className="animate-trans-right absolute  h-[17px] sm:h-[25px] lg:h-[27px] w-[17px] sm:w-[20px] lg:w-[28px] top-[180px] sm:top-[282px] lg:top-[624px] right-[89.32%] bottom-[79.28%] left-[-380px] sm:left-[233px] lg:left-[-3px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector}
            />
            <img
              className="animate-trans-right absolute h-[17px] sm:h-[20px] lg:h-[27px] w-[17px] sm:w-[20px] lg:w-[28px] top-[270px] sm:top-[392px] lg:top-[708px] right-[89.32%] bottom-[79.28%] left-[-380px] sm:left-[234px] lg:left-[-3px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector1}
            />
            <img
              className="animate-trans-right absolute top-[200px] sm:top-[303px] lg:top-[650.24px] left-[-388px] sm:left-[220px] lg:left-[-20px] w-[26px] sm:w-[40px] lg:w-[45.27px] h-[26px] sm:h-[40px] lg:h-[45.27px] overflow-hidden"
              alt=""
              src="/typcnmail.svg"
            />
        <b className="absolute top-[180px] sm:top-[286px] lg:top-[626px]  left-[-350px] sm:left-[280px] lg:left-[40.29px] text-[12px] sm:text-[16px] lg:text-[21.94px]">
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
          </div>
        </div>
              
                </div>
          
        
        
  
      );
    };
    
    export default Contactus;
    


