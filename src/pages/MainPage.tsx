
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="absolute   top-[28px] left-[108px] w-[1245px] overflow-hidden flex flex-row items-center justify-center gap-[151px] text-3xl text-deepskyblue">
        <img
          className=" animate-trans-right relative w-[97.43px] h-[82px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
     <nav className=" text-white font-bold py-2 px-4 rounded "> 
      <div className="relative rounded-[10px] bg-white shadow-[-10px_-5px_20px_rgba(61,_162,_255,_0.25),_20px_4px_20px_rgba(61,_162,_255,_0.22)] w-[598px] h-20">
          <div className="absolute top-[22px] left-[68px] flex flex-row items-center justify-start gap-[75px]">
          <button className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">     <div className="relative   text-[20px] font-medium">Home</div></button>
          <button className="-300 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  <b className="relative  text-[20px] font-medium" onClick={handleButtonClick1}>About us</b></button>
          <button className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <div className="relative text-[20px] font-medium"onClick={handleButtonClick2}>Contact Us</div> </button>
          </div>
          
        </div>
        <img
                className=" absolute top-[61.5px] left-[372px] w-[80px] h-[5px]"
                alt=""
                src="/line-4.svg"
              />
              </nav>
        <div className="rounded-[7px] [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-[15px] text-6xl text-white">
    <button className=" [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)]"> <div className=" text-6xl [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] relative font-semibold text-white">Visit now</div></button>
        </div>
      </div>
      <div className="absolute top-[4565px] left-[0px] bg-gainsboro w-[1440px] h-[134.87px] overflow-hidden text-[20.75px]">
        <a
          className="absolute top-[65.36px] left-[155.62px] [text-decoration:underline] font-bold text-[inherit]"
          href="https://www.carechainai.com/#"
          target="_blank"
        >
          2023 © All Rights Reserved | Designed and Developed by carechainai.com
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
      <div className="absolute top-[4196px] left-[0px] bg-cornflowerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[369.34px] overflow-hidden text-[18.67px] text-white">
        <b className="absolute top-[13.49px] left-[556.08px] text-[36.31px]">
          Know more about us !
        </b>
        <div className="absolute top-[95.45px] left-[155.62px] text-[25.94px] font-semibold">
          About CareChainAi:
        </div>
        <div className="absolute top-[95.45px] left-[556.08px] text-[25.94px] font-semibold">
          Latest Updates:
        </div>
        <div className="absolute top-[142.13px] left-[157.69px] font-semibold text-black inline-block w-[361.04px]">
          CareChainAI is a revolutionary healthcare platform that connects
          patients with specialized doctors, offers secure health record
          management, virtual consultations, and more.
        </div>
        <div className="absolute top-[142.13px] left-[556.08px] font-semibold text-black inline-block w-[361.04px]">
          <p className="m-0">We are working on Developing our fully</p>
          <p className="m-0">functional Website of CareChainAi .</p>
        </div>
        <div className="absolute h-[38.2%] w-[19.74%] top-[34.27%] right-[8.72%] bottom-[27.53%] left-[71.54%] text-black">
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
        </div>
      </div>
      <div className="absolute top-[3541px] left-[1px] bg-lightcyan shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[655px] overflow-hidden">
        <b className="absolute top-[24px] left-[419px] text-31xl text-darkslategray">
          Contact us Via an Email !
        </b>
        <div className="absolute top-[162px] left-[252px] bg-gray-200 [filter:blur(50px)] w-[370px] h-[72px]" />
        <div className="absolute top-[152px] left-[644px] bg-gray-100 [filter:blur(50px)] w-[547px] h-[72px]" />
        <div className="absolute top-[145px]  left-[252px] w-[939px] h-[62px]">
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[370px] h-[62px] overflow-hidden">
           
             
            <input className=" text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Name..." type="text" name=""/>
         
          </div>
          <div className="absolute top-[0px] left-[392px] rounded-mini bg-white w-[500px] h-[62px] overflow-hidden">
          <input className=" text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Email..." type="text" name=""/>

          </div>
        </div>
        <div className="absolute top-[332px] left-[1010px] bg-darkslategray [filter:blur(50px)] w-[172px] h-[65px]" />
        <div className="absolute top-[315px] left-[996px] rounded-mini bg-green w-[195px] h-16 overflow-hidden text-11xl text-white">
       <button>  <b className="absolute  top-[14px] text-11xl  text-white left-[47px]">Submit</b></button>
        </div>
        <div className="absolute top-[311px] left-[252px] bg-gray-200 [filter:blur(50px)] w-[677px] h-[205px]" />
        <div className="absolute top-[270px] left-[252px] rounded-mini bg-white w-[677px] h-[218px] overflow-hidden">
        <input className=" text-[20px] w-[370px] h-[62px] opacity-[0.5]   bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  " placeholder="Enter Your Message..." type="text" name=""/>

        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[208px] h-[408px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <img
          className="absolute top-[0px] left-[1130px] w-[223.16px] h-[283px] object-cover opacity-[0.8] mix-blend-multiply"
          alt=""
          src="/images--1-removebgpreview-1-1@2x.png"
        />
      </div>
      <div className="absolute top-[2902px] left-[0px] w-[1440px] h-[571px] overflow-hidden text-center text-[28.16px]">
         <div className="relative w-full h-[550px] overflow-hidden text-center text-[28.16px] font-inter">
      <img
        className="absolute top-[304.5px] left-[0px] w-[1442px] h-[259px] opacity-[0.5]"
        alt=""
        src="/line.svg"
      />
      <div className="absolute top-[82px] left-[0px] w-[237px] h-[204px]">
      <img
        className="absolute left-[7px] "
        alt=""
        src="/box.svg"
      />
      </div>
      <img
        className="absolute top-[100px] left-[1206px] w-[172px] h-[180px]"
        alt=""
        src="/circle.svg"
      />
      <div className="absolute top-[161px] left-[202px] w-[1091.32px] h-[291.69px]">
        <img
          className="absolute top-[-140px] left-[-212px] w-[1460px] h-[562px]"
          alt=""
          src="/rectangle-24.svg"
        />
        <div className="absolute top-[163.3px] left-[0px] font-semibold text-red(180deg, #0047FF 0%, rgba(255, 0, 0, 0.90)">
          <p className="m-0">
            We're excited to bring you a revolutionary healthcare experience.
            Our platform is under development and will be launching soon to
            transform the way you access healthcare.
          </p>
          <p className="m-0">
            Stay tuned for updates and be the first to experience CareChainAI's
            innovative services.
          </p>
        </div>
        <div className="absolute top-[0px] left-[101.36px] rounded-[16.89px] bg-white shadow-[0px_4.5049309730529785px_4.5px_rgba(0,_0,_0,_0.25)_inset,_30.230457305908203px_6.046091079711914px_45.35px_rgba(0,_0,_0,_0.25)] w-[887.26px] h-[114.88px]" />
        <div className="absolute top-[15.77px] left-[calc(50%_-_314.78px)] text-[67.57px] font-semibold background: linear-gradient(180deg, #0047FF 0%, rgba(255, 0, 0, 0.90) 100%)
background-clip: text
-webkit-background-clip: text
-webkit-text-fill-color: transparent">
          Launching Soon .....
        </div>
      </div>
    </div>
      </div>
      <div className="absolute top-[1581px] left-[-26px] w-[1440px] h-[1253px] overflow-hidden text-center text-6xl">
        <div className="absolute top-[323px] left-[125px] rounded-8xs bg-dodgerblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
        <div className="absolute top-[323px] left-[551px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
        <div className="absolute top-[323px] left-[968px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
        <div className="absolute top-[724.48px] left-[965px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
        <div className="absolute top-[724.48px] left-[545px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
        <div className="absolute top-[727px] left-[125px] rounded-[5.15px] bg-darkslateblue-200 [filter:blur(51.48px)] w-[348px] h-[292.4px]" />
        <b className="absolute top-[1115px] left-[225px] text-xl inline-block w-[1003px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam libero. Quisque nec sollicitudin sapien. Curabitur sit amet feugiat purus. Morbi ultrices nulla ut ex varius, vel lacinia ex ullamcorper. Sed eget justo non augue facilisis posuere. Vestibulum a mi eget ligula ultrices dictum. Praesent vestibulum, est ac elementum varius, `}</b>
        <div className="absolute hover:bg-sky-200 top-[257px] left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <div className="absolute hover:bg-sky-200   top-[661px] left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <div className="absolute hover:bg-sky-200  top-[257px] left-[545px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <div className="absolute hover:bg-sky-200 top-[257px] left-[965px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <div className="absolute hover:bg-sky-200  top-[661px] left-[965px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <div className="absolute hover:bg-sky-200  top-[669px] left-[551px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
        <img
          className="absolute top-[746.25px] left-[1047.25px] w-[197.5px] h-[70px]"
          alt=""
          src="/group-4.svg"
        />
        <img
          className="absolute top-[251px] left-[217px] w-[181px] h-[181px] object-cover"
          alt=""
          src="/doctor52196954370608removebgpreview-1@2x.png"
        />
        <div className="absolute top-[315px] left-[658px] bg-black w-[120px] h-[91px]" />
        <img
          className="absolute top-[246px] left-[620px] w-[211px] h-[224.87px] object-cover"
          alt=""
          src="/calendarandclockiconconceptofscheduleappointmentvectorillustration2dmyhnkremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[254px] left-[1050px] w-[185px] h-[189px] object-cover"
          alt=""
          src="/downloadremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[636px] left-[183px] w-[232px] h-[232px] object-cover"
          alt=""
          src="/3ddoctorprescriptioniconorpatientreportpapericonfreepng-1@2x.png"
        />
        <img
          className="absolute top-[647.53px] left-[599.74px] rounded-[16.51px] w-[285.54px] h-[218.54px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="absolute top-[473px] left-[186px] font-semibold">
          Doctor Directory
        </div>
        <div className="absolute top-[473px] left-[595px] font-semibold">
          Appointment Booking
        </div>
        <div className="absolute top-[473px] left-[1018px] font-semibold inline-block w-[247px]">
          <p className="m-0">Health Records</p>
          <p className="m-0"> Management</p>
        </div>
        <div className="absolute top-[851px] left-[141px] text-3xl font-semibold inline-block w-[318px]">
          Prescription Storage and Medication Reminders
        </div>
        <div className="absolute top-[851px] left-[575px] text-3xl font-semibold">
          <p className="m-0">Anonymous Patient-Doctor</p>
          <p className="m-0"> Communication</p>
        </div>
        <div className="absolute top-[858px] left-[1068px] font-semibold">
          Many More
        </div>
        <div className="absolute top-[11px] left-[303px] flex flex-row items-center justify-start gap-[25px] text-left text-[55px] text-dodgerblue-100">
          <img className="relative w-[72px] h-4" alt="" src="/line-2.svg" />
          <b className="relative">Our Services</b>
          <img className="relative w-[72px] h-4" alt="" src="/line-3.svg" />
        </div>
        <b className="absolute top-[113px] left-[136px] text-left">
          Discover our range of services that prioritize your health and
          well-being.
        </b>
      </div>
      <img
        className="absolute top-[888px] left-[64px] w-[413px] h-[696px] object-cover"
        alt=""
        src="/image-3removebgpreview-1@2x.png"
      />
      <div className="absolute top-[963px] left-[486px] font-medium inline-block w-[441px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="absolute top-[1372px] left-[442px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
      <div className="absolute top-[1372px] left-[588px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
      <div className="absolute top-[1372px] left-[734px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
      <div className="absolute top-[1406px] left-[472px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0">300k+</p>
        <p className="m-0">users</p>
      </div>
      <div className="absolute top-[1394px] left-[753px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0">1M +</p>
        <p className="m-0">patients</p>
        <p className="m-0"> treated</p>
      </div>
      <img
        className="absolute top-[927px] left-[955px] w-[303.52px] h-[552px] object-cover"
        alt=""
        src=""
      />
      <b className="absolute top-[866px] left-[274px] text-31xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Why do we need CareChainAi ?
      </b>
      <div className="absolute top-[1401px] left-[605px] font-semibold text-dodgerblue-100 text-center [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
        <p className="m-0">300+</p>
        <p className="m-0">Hospitals</p>
      </div>
      <div className="absolute top-[1729px] left-[1251px] rounded-181xl bg-white shadow-[23.42592430114746px_4.685184955596924px_35.14px_rgba(0,_0,_0,_0.25)] w-[250px] h-[250px] overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0] text-center text-6xl text-darkslateblue-100">
        <div className="absolute top-[179px] left-[200px] font-semibold inline-block w-[150px] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]">
          <p className="m-0">{`Explore Our `}</p>
          <p className="m-0">Best services !</p>
        </div>
      </div>
      <div className=" animate-trans-right absolute top-[148px] right-[15px] w-[1440px] h-[718px] overflow-hidden">
        <div className="absolute top-[160px] left-[700px] w-[739.71px] h-[558px] text-center">
          <div className="absolute top-[201px] left-[155px] rounded-181xl [background:linear-gradient(180deg,_rgba(4,_110,_207,_0.82),_rgba(4,_115,_218,_0.02))] w-[200px] h-[200px] overflow-hidden" />
          <div className="absolute top-[0px] left-[121px] w-[618.71px] h-[558px]">
            <img
              className="absolute top-[241.54px] left-[0px] w-[619px] h-[316.46px] object-cover"
              alt=""
              src="/956716smallremovebgpreview-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[109.12px] w-[388.95px] h-[544.28px] object-cover"
              alt=""
              src="/pngclipartdoctorsandnursesdoctorsandnursesremovebgpreview-1@2x.png"
            />
          </div>
          <div className="absolute top-[23px] left-[0px] rounded-[211.89px] bg-white shadow-[17.160493850708008px_3.432098627090454px_25.74px_rgba(0,_0,_0,_0.25)] w-[278px] h-[278px] overflow-hidden">
            <div className="absolute top-[91px] left-[30px] font-semibold [background:linear-gradient(180deg,_#ff0000,_#0667c1_0.01%,_#00c1fe)] [-webkit-background-clip:text] text-white">
              <p className="m-0">{`Get Your Personalized `}</p>
              <p className="m-0">{`doctor consulation `}</p>
              <p className="m-0">done on your Mobile</p>
              <p className="m-0">Phones !</p>
            </div>
          </div>
        </div>
        <b className="absolute top-[130px] left-[157px] text-31xl [background:linear-gradient(180deg,_#0896ff,_#58b8ff_50.53%,_#004170)] [-webkit-background-clip:text] text-white [text-shadow:5px_4px_5px_rgba(0,_0,_0,_0.25)]">
          CareChainAI
        </b>
        <div className="absolute top-[95px] left-[157px] font-medium">{`Connect to experts with `}</div>
        <b className="absolute top-[209px] left-[157px] text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <p className="m-0">{`We follow a `}</p>
          <p className="m-0">{`holistic approach `}</p>
          <p className="m-0">to health care</p>
        </b>
        <div className="absolute top-[406px] left-[144px] text-[18px] inline-block w-[586px]">
          CareChainAI transforms healthcare access in India, seamlessly
          connecting patients with specialized clinics, AI-guided appointments,
          and secure health records on the blockchain. Our commitment to
          convenience and personalized care enhances the healthcare journey for
          all. Welcome to a new era of empowered well-being with CareChainAI.
        </div>
      </div>
    </div>
   
  );
};

export default MainPage;
