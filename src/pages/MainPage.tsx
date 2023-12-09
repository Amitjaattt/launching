import React, { useState } from 'react';
import Header from '../components/Header';
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import vector from "../imgs/Vector.png";
import vector1 from "../imgs/Vector1.png";
import screen from "../imgs/screen.png"
const MainPage: FunctionComponent = () => {
  

  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const handleButtonClick1 = () => {
    // Use navigate to navigate to a different route
    navigate1('/Aboutus');
  };
 
  const handleButtonClick2 = () => {
    navigate2('/Contactus');
    };



  return (
  
    <div className="relative bg-white w-full h-[4700px] overflow-hidden text-left text-xl text-black font-inter">
     <Header></Header>
      
    


     

   
    
  
      
      <div className="absolute top-[4517px] sm:top-[4506px] lg:top-[4565px] left-[0px] bg-gainsboro w-[1440px] h-[134.87px] overflow-hidden text-[20.75px]">
        <a
          className="animate-trans-right absolute top-[70px] sm:top-[50px] lg:top-[65.36px] left-[13px] sm:left-[20px] lg:left-[155.62px]  w-[300px] sm:w-[600px] lg:w-[1000.76px] text-[11px] sm:text-[13px] lg:text-[22px] [text-decoration:underline] font-bold text-[inherit] "
          href="https://www.carechainai.com/#"
          target="_blank"
        >
          2023 © All Rights Reserved | Designed and Developed by carechainai.com
        </a>
        <div className="absolute top-[30px] sm:top-[50px] lg:top-[51.87px] left-[15px] sm:left-[520px] lg:left-[1019.76px] w-[100px] sm:w-[150px] lg:w-[214.76px] flex flex-row items-center justify-start gap-[20.75px]">
          <img
            className="animate-trans-right relative w-[30px] sm:w-[30px] lg:w-[40.11px] h-[30px] sm:h-[30px] lg:h-[40.11px] overflow-hidden shrink-0"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <b className="absolute top-[36px] sm:top-[17px] lg:top-[10.37px] left-[180px] sm:left-[520px] lg:left-[1021.9px] text-[13px] sm:text-[17px] lg:text-[22px] ">
          Get in touch with us !
        </b>
      </div>
      <div className="absolute top-[4070px] sm:top-[4136px] lg:top-[4196px] left-[0px] bg-cornflowerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px]  h-[450px] sm:h-[369px] lg:h-[369.34px] overflow-hidden text-[18.67px] text-white">
        <b className="absolute top-[8px] sm:top-[15px] lg:top-[13.49px] left-[22px] sm:left-[200px] lg:left-[526.08px] text-[26px] sm:text-[30px] lg:text-[36.31px]">
          Know more about us !
        </b>
        <div className="absolute top-[65px] sm:top-[85px] lg:top-[95.45px] left-[40px] sm:left-[24px] lg:left-[105.62px] text-[22px] sm:text-[23px] lg:text-[25.94px] font-semibold">
          About CareChainAi:
        </div>
        <div className="absolute top-[215px] sm:top-[85px] lg:top-[95.45px] left-[40px] sm:left-[295px] lg:left-[566.08px] text-[20px] sm:text-[23px] lg:text-[25.94px] font-semibold">
          Latest Updates:
        </div>
        <div className="absolute top-[100px] sm:top-[130px] lg:top-[142.13px] left-[40px] sm:left-[24px] lg:left-[105.69px] text-[13px] sm:text-[15px] lg:text-[21.94px] font-semibold text-black inline-block w-[250px] sm:w-[210px] lg:w-[361.04px]">
          CareChainAI is a revolutionary healthcare platform that connects
          patients with specialized doctors, offers secure health record
          management, virtual consultations, and more.
        </div>
        <div className="absolute top-[250px] sm:top-[130px] lg:top-[142.13px] left-[40px] sm:left-[295px] lg:left-[566.08px] text-[13px] sm:text-[15px] lg:text-[21.94px] font-semibold text-black inline-block w-[250px] sm:w-[190px] lg:w-[361.04px]">
          <p className="m-0">We are working on Developing our fully</p>
          <p className="m-0">functional Website of CareChainAi .</p>
        </div>
        <div className="absolute h-[20%] sm:h-[25%] lg:h-[38.2%] w-[10%] sm:w-[14%] lg:w-[19.74%] top-[44%] sm:top-[39%] lg:top-[34.27%] right-[3%] sm:right-[5%] lg:right-[8.72%] bottom-[12%] sm:bottom-[20%] lg:bottom-[27.53%] left-[30%] sm:left-[30%] lg:left-[68.54%] text-black">
          <img
            className="animate-trans-right absolute h-[17.78%] w-[6.3%] top-[120px] sm:top-[-23px] lg:top-[2.94%] right-[89.32%] bottom-[79.28%] left-[-390px] sm:left-[105px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector}
          />
          <img
            className="animate-trans-right absolute h-[13.24%] w-[6.57%] top-[183px] sm:top-[47px] lg:top-[60.29%] right-[89.05%] bottom-[26.47%] left-[-390px] sm:left-[105px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="animate-trans-right absolute h-[13.24%] w-[6.57%] top-[213px] sm:top-[84px] lg:top-[86.76%] right-[89.05%] bottom-[0%] left-[-390px] sm:left-[105px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="animate-trans-right absolute top-[141px] sm:top-[-1px] lg:top-[34.24px] left-[-404px] sm:left-[90px] lg:left-[0px] w-[25px] sm:w-[30px] lg:w-[35.27px] h-[25px] sm:h-[30px] lg:h-[35.27px] overflow-hidden"
            alt=""
            src="/typcnmail.svg"
          />
          <b className="absolute top-[120px] sm:top-[-24px] lg:top-[3px] left-[-370px] sm:left-[140px] lg:left-[63.29px] text-[12px] sm:text-[15px] lg:text-[21.94px]">
            <p className="[margin-block-start:0] [margin-block-end:15.56px]">
              Mumbai, India
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15.56px]">
              carechainai@gmail.com
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15.56px]">
              +91 8291988205
            </p>
            <p className="m-0 ">+91 9049685048</p>
          </b>
        </div>
      </div>
      <div className="absolute top-[3371px] sm:top-[3441px] lg:top-[3541px] left-[1px] bg-lightcyan shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[698px] sm:h-[695px] lg:h-[655px] overflow-hidden">
        <b className="absolute top-[10px] sm:top-[50px] lg:top-[24px] left-[70px] sm:left-[145px] lg:left-[419px] text-[20px] sm:text-[38px] lg:text-[45px] text-darkslategray">
          Contact us Via an Email !
        </b>
        <div className="absolute top-[300px] sm:top-[200px] lg:top-[162px] left-[50px] sm:left-[200px] lg:left-[252px] bg-gray-100 [filter:blur(50px)] w-[300px] sm:w-[350px] lg:w-[370px] h-[30px] sm:h-[50px] lg:h-[72px]" />
        <div className="absolute top-[152px] left-[644px] bg-gray-100 [filter:blur(50px)] w-[547px] h-[72px]" />
        <div className="absolute top-[145px]  left-[252px] w-[939px] h-[62px]">
          <div className="absolute top-[50px] sm:top-[80px] lg:top-[0px] left-[-220px] sm:left-[-130px] lg:left-[0px] rounded-mini bg-white w-[230px] sm:w-[500px] lg:w-[370px] h-[62px] sm:h-[62px] lg:h-[62px] overflow-hidden">
           
             
            <input className="text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Name..." type="text" name=""/>
         
          </div>
          <div className="absolute top-[160px] sm:top-[165px] lg:top-[0px] left-[-220px] sm:left-[-130px] lg:left-[392px] rounded-mini bg-white w-[230px] sm:w-[500px] lg:w-[230px] h-[62px] sm:h-[62] lg:h-[62px] overflow-hidden">
          <input className=" text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Email..." type="text" name=""/>

          </div>
        </div>
        <div className="absolute top-[332px] left-[1010px] bg-darkslategray [filter:blur(50px)] w-[172px] h-[65px]" />
        <div className="absolute top-[590px] sm:top-[590px] lg:top-[315px] left-[35px] sm:left-[200px] lg:left-[996px] rounded-mini bg-green w-[110px] sm:w-[130px] lg:w-[195px] h-[60px] sm:h-[60px] lg:h-[60px] overflow-hidden text-11xl text-white">
       <button>  <b className="absolute top-[15px] sm:top-[15px] lg:top-[13px] left-[9.9px] sm:left-[19.68px] lg:left-[41px] text-[24px] sm:text-[27px] lg:text-[34px]  text-white left-[45px] sm:left-[40px] lg:left-[47px]">Submit</b></button>
        </div>
        <div className="absolute top-[470px] sm:top-[400px] lg:top-[311px] left-[50px] sm:left-[130px] lg:left-[252px] bg-gray-200 [filter:blur(50px)] w-[250px] sm:w-[500px] lg:w-[677px] h-[90px] sm:h-[150px] lg:h-[205px]" />
        <div className="absolute top-[418px] sm:top-[400px] lg:top-[270px] left-[30px] sm:left-[120px] lg:left-[252px] rounded-mini bg-white w-[260px] sm:w-[500px] lg:w-[677px] h-[140px] sm:h-[157px] lg:h-[218px] overflow-hidden">
        <input className=" text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Message..." type="text" name=""/>

        </div>
        <img
          className="animate-trans-right absolute top-[0px] left-[0px] w-[80px] sm:w-[160px] lg:w-[208px] h-[160px] sm:h-[300px] lg:h-[408px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <img
          className="animate-trans-right absolute top-[29px] sm:top-[39px] lg:top-[0px] left-[183px] sm:left-[580px] lg:left-[1130px] w-[140px] sm:w-[180px] lg:w-[223.16px] h-[170px] sm:h-[210px] lg:h-[283px] object-cover opacity-[0.8] mix-blend-multiply"
          alt=""
          src="/images--1-removebgpreview-1-1@2x.png"
        />
      </div>
      <div className="absolute top-[2902px] left-[0px] w-[1440px] h-[500px] sm:h-[500px] lg:h-[571px] overflow-hidden text-center text-[28.16px]">
         <div className="relative w-full h-[550px] overflow-hidden text-center text-[28.16px] font-inter">
      <img
        className="animate-trans-right absolute top-[304.5px] left-[-200px] sm:left-[0px] lg:left-[0px] w-[900px] sm:w-[800px] lg:w-[1442px] h-[100px] sm:h-[180px] lg:h-[259px] opacity-[0.5]"
        alt=""
        src="/line.svg"
      />
      <div className="absolute top-[2px] sm:top-[5px] lg:top-[82px] left-[2px] sm-left-[0px] lg:left-[0px] ">
      <img
        className="animate-trans-right absolute left-[4px]  w-[90px] sm:w-[170px] lg:w-[237px] h-[90px] sm:h-[170px] lg:h-[204px]  "
        alt=""
        src="/box.svg"
      />
      </div>
      <img
        className="animate-trans-right absolute top-[5px] sm:top-[8px] lg:top-[100px] left-[225px] sm:left-[570px] lg:left-[1146px] w-[90px] sm:w-[200px] lg:w-[172px] h-[90px] sm:h-[170px] lg:h-[200px]"
        alt=""
        src="/circle.svg"
      />
      <div className="absolute top-[100px] sm:top[120px] lg:top-[161px] left-[100px] sm:left-[160px] lg:left-[202px] w-[800px] sm:w-[500px] lg:w-[1091.32px]  h-[800px] sm:h-[1000px] lg:h-[291.69px]">
        <img
          className="animate-trans-right absolute top-[-500px] sm:top:[-70px] lg:top-[-140px] left-[-100px] sm:left-[-170px] lg:left-[-212px]  w-[800px] sm:w-[900px] lg:w-[1460px]   h-[800px] sm:h-[900px] lg:h-[562px]"
          alt=""
          src="/rectangle-24.svg"
        />
        <div className="absolute top-[110px] sm:top-[130px] lg:top-[163.3px] left-[-50px] sm:left-[-33px] lg:left-[110px] font-semibold text-red(180deg, #0047FF 0%, rgba(255, 0, 0, 0.90)">
          <p className="m-0 w-[200px] sm:w-[500px] lg:w-[700px] text-[15px] sm:text-[23px] lg:text-[25px]">
            We're excited to bring you a revolutionary healthcare experience.
            Our platform is under development and will be launching soon to
            transform the way you access healthcare.
          </p>
          <p className="m-0  w-[200px] sm:w-[500px] lg:w-[700px] text-[15px] sm:text-[23px] lg:text-[25px]">
            Stay tuned for updates and be the first to experience CareChainAI's
            innovative services.
          </p>
        </div>
        <div className="absolute top-[1px] sm:top-[2px] lg:top-[0px] left-[-79px] sm:left-[45px] lg:left-[101.36px] rounded-[16.89px] bg-white shadow-[0px_4.5049309730529785px_4.5px_rgba(0,_0,_0,_0.25)_inset,_30.230457305908203px_6.046091079711914px_45.35px_rgba(0,_0,_0,_0.25)]  w-[280px] sm:w-[340px] lg:w-[807.26px]  h-[60px] sm:h-[80px] lg:h-[114.88px]" />
        <div className="absolute top-[19px] sm:top-[22px] lg:top-[15.77px] left-[-60px] sm:left-[65px] lg:left-[150.36px] text-[23px] sm:text-[29px] lg:text-[67.57px] font-semibold background: linear-gradient(180deg, #0047FF 0%, rgba(255, 0, 0, 0.90) 100%)
background-clip: text
-webkit-background-clip: text
-webkit-text-fill-color: transparent">
          Launching Soon .....
        </div>
      </div>
    </div>
      </div>
      <div className="absolute top-[1799px] sm:top-[1481px] lg:top-[1581px] left-[-26px] w-[1440px] h-[1253px] overflow-hidden text-center text-6xl ">
        <div className="absolute top-[20px] sm:top-[320px] lg:top-[323px] left-[10px] sm:left-[100px] lg:left-[125px] rounded-8xs bg-dodgerblue-200 [filter:blur(50px)] left-[10px] sm:left-[100px] lg:w-[338px] h-[284px]" />
        <div className="absolute top-[320px] sm:top-[320px] lg:top-[323px] left-[10px] sm:left-[390px] lg:left-[551px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
        <div className="absolute top-[300px] sm:top-[320px] lg:top-[323px] left-[10px] sm:left-[100px] lg:left-[968px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
        <div className="absolute top-[700px] sm:top-[720px] lg:top-[724.48px] left-[965px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
        <div className="absolute top-[724.48px] left-[545px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
        <div className="absolute top-[727px] left-[125px] rounded-[5.15px] bg-darkslateblue-200 [filter:blur(51.48px)] w-[348px] h-[292.4px]" />
        <div className="absolute top-[830px] sm:top-[1000px] lg:top-[1115px] left-[50px] sm:left-[80px] lg:left-[225px] text-[18px] sm:text-[25px] lg:text-xl inline-block w-[270px] sm:w-[650px] lg:w-[1003px] ">{`Lorem hello ji dolor sit amet, consectetur adipiscing elit. Sed non diam libero. Quisque nec sollicitudin sapien. Curabitur sit amet feugiat purus. Morbi ultrices nulla ut ex varius, vel lacinia ex ullamcorper. Sed eget justo non augue facilisis posuere. Vestibulum a mi eget ligula ultrices dictum. Praesent vestibulum, est ac elementum varius, `}</div>
        <div className="absolute hover:bg-sky-200 top-[257px] left-[35px] sm:left-[50px] lg:left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px]   " />
        <div className="  top-[660px] sm:top-[671px] absolute hover:bg-sky-200  left-[35px] sm:left-[50px] lg:left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px]  " />
        <div className="absolute hover:bg-sky-200  top-[460px] sm:top-[257px] left-9 sm:left-[545px]  rounded-xl  shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)]  w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px]  bg-white " />
        <div className="absolute hover:bg-sky-200 top-[257px] left-[193px] sm:left-[300px] lg:left-[965px]  rounded-xl shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)]  w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px]  bg-white" />
        <div className="   top-[460px] sm:top-[671px] absolute hover:bg-sky-200  left-[193px] sm:left-[545px]  rounded-xl  shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)]  w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px] bg-white" />
        <div className="  top-[660px] sm:top-[669px] absolute hover:bg-sky-200 left-[193px] sm:left-[300px] lg:left-[965px]  rounded-xl  bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)]  w-[144px] sm:w-[230px] lg:w-[350px] h-[144px] sm:h-[230px] lg:h-[350px] " />
        <img
          className="absolute top-[456px] sm:top-[680px] lg:top-[700px]  left-[55px] sm:left-[580px] lg:left-[1055px] w-[110px] sm:w-[181px] h-[110px] sm:h-[181px] bg-cover"
          alt=""
          src="/group-4.svg"
        />
        <img
          className="absolute top-[245px]  left-[55px] sm:left-[90px] lg:left-[217px] w-[110px] sm:w-[160px] lg:w-[181px] h-[110px] sm:h-[160px] lg:h-[181px] bg-cover   "
          alt=""
          src="/doctor52196954370608removebgpreview-1@2x.png"
        />
        <div className="absolute top-[315px] left-[658px]  w-[120px] h-[91px] b" />
        <img
          className="absolute top-[246px] sm:top-[250px] lg:top-[280px]  left-[215px] sm:left-[330px] lg:left-[635px] w-[110px] sm:w-[181px] h-[110px] sm:h-[181px] bg-cover "
          alt=""
          src="/calendarandclockiconconceptofscheduleappointmentvectorillustration2dmyhnkremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[456px] sm:top-[250px] lg:top-[280px]  left-[215px] sm:left-[580px] lg:left-[1055px] w-[110px] sm:w-[181px] h-[110px] sm:h-[181px] bg-cover"
          alt=""
          src="/downloadremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[656px] sm:top-[670px] lg:top-[670px]  left-[55px] sm:left-[70px] lg:left-[205px] w-[110px] sm:w-[181px] h-[110px] sm:h-[181px] bg-cover"
          alt=""
          src="/3ddoctorprescriptioniconorpatientreportpapericonfreepng-1@2x.png"
        />
        <img
          className="absolute top-[646px] sm:top-[670px] lg:top-[680px]  left-[215px] sm:left-[330px] lg:left-[655px] w-[110px] sm:w-[181px] h-[110px] sm:h-[181px] bg-cover  "
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="absolute top-[350px] sm:top-[420px] lg:top-[473px] left-[44px] sm:left-[50px] lg:left-[120px] font-thin sm:font-semibold w-[124px] sm:w-[230px] lg:w-[350px]   text-[18px] sm:text-6xl">
          Doctor Directory
        </div>
        <div className="absolute top-[345px] sm:top-[400px] lg:top-[473px] left-[195px] sm:left-[295px] lg:left-[960px] font-thin sm:font-semibold w-[144px] sm:w-[230px] lg:w-[350px]   text-[18px] sm:text-6xl">
          Appointment Booking
        </div>
        <div className="absolute top-[550px] sm:top-[413px] lg:top-[473px] left-[145px] sm:left-[550px] lg:left-[540px] font-thin sm:font-semibold w-[244px] sm:w-[230px] lg:w-[350px]   text-[18px] sm:text-6xl">
          <p className="m-0">Health Records</p>
          <p className="m-0"> Management</p>
        </div>
        <div className="absolute top-[755px] sm:top-[830px] lg:top-[873px] left-[40px] sm:left-[40px] lg:left-[120px] font-thin sm:font-semibold w-[144px] sm:w-[250px] lg:w-[350px]   text-[18px] sm:text-xl lg:text-6xl">
          Prescription Storage 
        </div>
        <div className="absolute top-[736px] sm:top-[820px] lg:top-[873px] left-[195px] sm:left-[290px] lg:left-[550px] font-thin sm:font-semibold w-[144px] sm:w-[250px] lg:w-[350px]   text-[17px] sm:text-xl lg:text-6xl">
          <p className="m-0">Anonymous Patient-Doctor</p>
          <p className="m-0"> Communication</p>
        </div>
        <div className="absolute top-[550px] sm:top-[830px] lg:top-[873px] left-[40px] sm:left-[540px] lg:left-[970px] font-thin sm:font-semibold w-[144px] sm:w-[250px] lg:w-[350px]   text-xl sm:text-xl lg:text-6xl">
          Many More
        </div>
       
     

        <div className="absolute top-[80px] sm:top-[10px] lg:top-[11px] left-[55px] sm:left-[100px] lg:left-[273px] flex flex-row items-center justify-start gap-[25px] text-left text-[55px] text-dodgerblue-100">
          <img className="relative w-[40px] sm:w-[50px] lg:w-[72px] h=[10px] sm:h-[10px] lg:h-4" alt="" src="/line-2.svg" />
          <b className="relative text-[20px] sm:text-[30px] lg:text-[55px]">Our Services</b>
          <img className="relative w-[40px] sm:w-[50px] lg:w-[72px] h=[10px] sm:h-[10px] lg:h-4" alt="" src="/line-3.svg" />
        </div>

        <b className="absolute top-[140px] sm:top-[80px] lg:top-[113px] left-[44px] sm:left-[55px] lg:left-[66px] text-[13px] sm:text-[17px] lg:text-[25px] w-[150px] sm:w-[400px] lg:w-[1000px]">
          Discover our range of services that prioritize your health and
          well-being.
        </b>
        </div>
      <img
        className="animate-trans-right absolute top-[1198px] sm:top-[928px] lg:top-[888px] left-[20px] sm:left-[20px] lg:left-[64px] w-[170px] sm:w-[160.904px] lg:w-[413px] h-[300px] sm:h[496.65px] lg:h-[696px] object-cover"
        alt=""
        src="/image-3removebgpreview-1@2x.png"
      />
      <div className="absolute top-[1497px] sm:top-[963px] lg:top-[993px] left-[20px] sm:left-[220px] lg:left-[486px] text-[15px] sm:text-[17px] lg:text-[22px] inline-block w-[270px]  sm:w-[310px] lg:w-[441px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate

        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="absolute top-[1760px] sm:top-[1250px]  lg:top-[1372px] left-[15px] sm:left-[99px] lg:left-[462px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[80px] sm:w-[116px] lg:w-[116px] h-[80px] sm:h-[116px] lg:h-[116px]" />
      <div className="absolute top-[1760px] sm:top-[1250px] lg:top-[1372px] left-[115px] sm:left-[299px] lg:left-[625px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[80px] sm:w-[116px] lg:w-[116px] h-[80px] sm:h-[116px] lg:h-[116px]" />
      <div className="absolute top-[1760px] sm:top-[1250px] lg:top-[1372px] left-[215px] sm:left-[499px] lg:left-[784px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[80px] sm:w-[116px] lg:w-[116px] h-[80px] sm:h-[116px] lg:h-[116px]" />
      <div className="absolute top-[1784px] sm:top-[1286px] lg:top-[1406px] left-[32px] sm:left-[124px] lg:left-[483px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0 text-[15px] sm:text-[22px] lg:text-[23px] ">300k+</p>
        <p className="m-0 text-[15px] sm:text-[22px] lg:text-[23px] ">users</p>
      </div>
      <div className="absolute top-[1768px] sm:top-[1268px] lg:top-[1394px] left-[225px] sm:left-[520px] lg:left-[803px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0 text-[15px] sm:text-[20px] lg:text-[20px]">1M +</p>
        <p className="m-0 text-[15px] sm:text-[20px] lg:text-[20px]">patients</p>
        <p className="m-0 text-[15px] sm:text-[20px] lg:text-[20px]"> treated</p>
      </div>
      <img
        className="animate-trans-right absolute  top-[1238px] sm:top-[967px] lg:top-[940px] left-[170px] sm:left-[598px] lg:left-[955px] w-[132px] sm:w-[140px] lg:w-[303.52px] h-[230px] sm:h-[255px] lg:h-[542px] object-cover"
        alt=""
        src={screen}
      />
      <b className="absolute top-[1178px] sm:top-[896px] lg:top-[866px] left-[8px] sm:left-[200px]  lg:left-[289px] text-0xl sm:text-[25px] lg:text-31xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Why do we need CareChainAi ?
      </b>
      <div className="absolute top-[1784px] sm:top-[1280px] lg:top-[1406px] left-[121px] sm:left-[310px] lg:left-[635.4px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0 text-[15px] sm:text-[22px] lg:text-[23px]">300+</p>
        <p className="m-0 text-[15px] sm:text-[21px] lg:text-[21px]">Hospitals</p>
      </div>
      <div className="absolute top-[2024px] sm:top-[1650px] lg:top-[1769px] left-[300px] sm:left-[700px] lg:left-[1251px] rounded-181xl bg-white shadow-[23.42592430114746px_4.685184955596924px_35.14px_rgba(0,_0,_0,_0.25)] w-[100px] sm:w-[200px] lg:w-[250px]  h-[100px] sm:h-[200px]  lg:h-[250px] overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0] text-center text-6xl text-darkslateblue-100">
        <div className="absolute top-[70px] sm:top-[140px] lg:top-[189px] left-[125px] sm:left-[170px] lg:left-[200px] font-semibold inline-block w-[150px] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]">
          <p className="m-0 text-[12px] sm:text-[26px] lg:text-[29px]">{`Explore Our `}</p>
          <p className="m-0 text-[12px] sm:text-[26px] lg:text-[29px]">Best services !</p>
        </div>
      </div>
      <div className=" animate-trans-right absolute top-[148px] lg:left-[-90px] w-[320px] sm:w-[900px] lg:w-[1600px] h-[1150px] sm:h-[718px] overflow-hidden  flex-wrap  ">
        <div className="absolute top-[650px] sm:top-[160px] left-0 sm:left-[210px] lg:left-[700px] w-[739.71px] h-[558px] text-center  ">
          <div className="absolute top-0 sm:top-[201px] left-[155px] rounded-181xl [background:linear-gradient(180deg,_rgba(4,_110,_207,_0.82),_rgba(4,_115,_218,_0.02))] w-[200px] h-[200px] overflow-hidden bg-amber-600" />
          <div className="absolute top-[110px] sm:top-[0px] left-[50px] sm:left-[121px] w-[618.71px] h-[558px] ">
            <img
              className="absolute top-[115px] sm:top-[241.54px]  left-0 sm:left-[0px] lg:left-[20px] w-[280px] sm:w-[619px] lg:w-[600px] h-[144px] sm:h-[316.46px] lg:h-[300px] object-cover  "
              alt=""
              src="/956716smallremovebgpreview-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[50px] sm:left-[109.12px]  w-[181px] sm:w-[388.95px] h-[253px] sm:h-[544.28px] object-cover  "
              alt=""
              src="/pngclipartdoctorsandnursesdoctorsandnursesremovebgpreview-1@2x.png"
            />
          </div>
          <div className="absolute top-[4px] sm:top-[23px] left-[10px] sm:left-[1000px] lg:left-0  rounded-[211.89px]  shadow-[17.160493850708008px_3.432098627090454px_25.74px_rgba(0,_0,_0,_0.25)] w-[172px] sm:w-[278px] h-[172px] sm:h-[278px] overflow-hidden ">
            <div className="absolute top-[4px] sm:top-[91px]  sm:left-[30px] font-light sm:font-semibold [background:linear-gradient(180deg,_#ff0000,_#0667c1_0.01%,_#00c1fe)] [-webkit-background-clip:text] text-white">
              <p className="m-0 ">{`Get Your Personalized `}</p>
              <p className="m-0">{`doctor consulation `}</p>
              <p className="m-0">done on your Mobile</p>
              <p className="mb-1 sm:mb-0">Phones !</p>
            </div>
          </div>
        </div>
        <div className="">
        <b className="absolute top-[130px] left-3 sm:left-[20px] lg:left-[157px]  text-[48px] sm:text-31xl [background:linear-gradient(180deg,_#0896ff,_#58b8ff_50.53%,_#004170)] [-webkit-background-clip:text] text-white [text-shadow:5px_4px_5px_rgba(0,_0,_0,_0.25)]">
          CareChainAI
        </b>
        <div className="absolute top-[95px] left-5 sm:left-[20px] lg:left-[157px] font-medium">{`Connect to experts with `}</div>
        <b className="absolute top-[209px]  left-5 sm:left-[20px] lg:left-[157px] text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <p className="m-0">{`We follow  `}</p>
          <p className="m-0">{`holistic approach `}</p>
          <p className="m-0">to health care</p>
        </b>
        <div className="absolute top-[406px] left-3 sm:left-[20px] lg:left-[144px] text-[18px] inline-block  sm:w-[250px] lg:w-[586px]">
          CareChainAI transforms healthcare access in India, seamlessly
          connecting patients with specialized clinics, AI-guided appointments,
          and secure health records on the blockchain. Our commitment to
          convenience and personalized care enhances the healthcare journey for
          all. Welcome to a new era of empowered well-being with CareChainAI.
        </div></div>
      </div>
    </div>
   
  );
};

export default MainPage;
