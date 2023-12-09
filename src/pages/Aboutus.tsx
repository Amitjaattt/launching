import React from "react";
import Header from "../components/Header";
import iso from "../imgs/iso.png";
import am from "../imgs/am.png";
import is from "../imgs/is.png";
import vector from "../imgs/Vector.png";
import vector1 from "../imgs/Vector1.png"
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
const Aboutus: FunctionComponent = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const handleButtonClick1 = () => {
      // Use navigate to navigate to a different route
      navigate1('/');
    };
   
    const handleButtonClick2 = () => {
      navigate2('/Contactus');
      };
  return (
<div className="relative bg-white w-full h-[2740px] sm:h-[2500px] lg:h-[2500px] overflow-hidden text-center text-lg text-darkslateblue font-inter">
     <Header></Header>
     <div className="absolute top-[896px] sm:top-[650px] lg:top-[886px] left-[-25px] sm:left-[-20px] lg:left-[-46px] rounded-[30px] [background:linear-gradient(180deg,_rgba(47,_155,_255,_0.7),_rgba(255,_255,_255,_0))] shadow-[15px_6px_20px_rgba(0,_0,_0,_0.25)_inset] w-[400px] sm:w-[600px] lg:w-[882px] h-[60px] sm:h-[95px] lg:h-[98px] overflow-hidden text-21xl">
        <b className="absolute top-[20px] sm:top-[30px] lg:top-[34px left-[43px] sm:left-[50px] lg:left-[67px] leading-[30px] text-[15px] sm:text-[25px] lg:text-[25px]">
          What CareChainAi offers to its users ?
        </b>
      </div>
      <div className="absolute top-[1000px] sm:top-[800px] lg:top-[994px] left-[0px] sm:left-[-20px] lg:left-[0px] w-[800px] sm:w-[1000px] lg:w-[1388px] h-[2300px] sm:h-[1500px] lg:h-[1506px] overflow-hidden">
        <img
          className="animate-trans-right absolute top-[960px] sm:top-[547px] lg:top-[568px] left-[0px] sm:left-[0px] lg:left-[0px] w-[300px] sm:w-[750px] lg:w-[936px]  h-[180px] sm:h-[590px] lg:h-[452px]"
          alt=""
          src="/amit2.svg"
        />
        <div className="absolute top-[1120px] sm:top-[1019px] lg:top-[1020px] left-[0px]  bg-cornflowerblue w-[1388px]  h-[450px] sm:h-[356px] lg:h-[356px] overflow-hidden text-left text-white">
          <b className="absolute top-[8px] sm:top-[15px] lg:top-[13px] left-[22px] sm:left-[200px] lg:left-[536px] text-[26px] sm:text-[30px] lg:text-[35px]">
            Know more about us !
          </b>
          <div className="absolute top-[65px] sm:top-[85px] lg:top-[92px] left-[40px] sm:left-[24px] lg:left-[80px] text-[22px] sm:text-[23px] lg:text-[25.94px] font-semibold">
            About CareChainAi:
          </div>
          <div className="absolute top-[215px] sm:top-[85px] lg:top-[92px] left-[40px] sm:left-[315px] lg:left-[536px] text-[20px] sm:text-[23px] lg:text-[25.94px] font-semibold">
            Latest Updates:
          </div>
          <div className="absolute  top-[100px] sm:top-[130px] lg:top-[137px] left-[40px] sm:left-[24px] lg:left-[80px] text-[13px] sm:text-[15px] lg:text-[21.94px] font-semibold text-black inline-block  w-[250px] sm:w-[210px] lg:w-[348px]">
            CareChainAI is a revolutionary healthcare platform that connects
            patients with specialized doctors, offers secure health record
            management, virtual consultations, and more.
          </div>
          <div className="absolute top-[250px] sm:top-[130px] lg:top-[137px] left-[40px] sm:left-[315px] lg:left-[536px] text-[13px] sm:text-[15px] lg:text-[21.94px] font-semibold text-black inline-block  w-[250px] sm:w-[190px] lg:w-[348px]">
            <p className="m-0">We are working on Developing our fully</p>
            <p className="m-0">functional Website of CareChainAi .</p>
          </div>
          <div className="absolute h-[20%] sm:h-[25%] lg:h-[38.2%] w-[10%] sm:w-[14%] lg:w-[19.74%] top-[44%] sm:top-[39%] lg:top-[34.27%] right-[3%] sm:right-[5%] lg:right-[8.72%] bottom-[12%] sm:bottom-[20%] lg:bottom-[27.53%] left-[30%] sm:left-[40%] lg:left-[69.54%] text-black">
            <img
              className="animate-trans-right absolute h-[17.78%] w-[6.3%] top-[120px] sm:top-[-10px] lg:top-[2.94%] right-[89.32%] bottom-[79.28%] left-[-370px] sm:left-[10px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector}
            />
            <img
              className="animate-trans-right absolute h-[13.24%] w-[6.57%] top-[183px] sm:top-[58px] lg:top-[67.29%] right-[89.05%] bottom-[26.47%] left-[-370px] sm:left-[10px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector1}
            />
            <img
              className="animate-trans-right absolute h-[13.24%] w-[6.57%] top-[213px] sm:top-[88px] lg:top-[96.76%] right-[89.05%] bottom-[0%] left-[-370px] sm:left-[10px] lg:left-[4.38%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={vector1}
            />
            <img
              className="animate-trans-right absolute top-[141px] sm:top-[9px] lg:top-[34.24px] left-[-384px] sm:left-[-5px] lg:left-[0px] w-[25px] sm:w-[30px] lg:w-[35.27px] h-[25px] sm:h-[30px] lg:h-[35.27px] overflow-hidden"
              alt=""
              src="/typcnmail.svg"
            />
        <b className="absolute top-[120px] sm:top-[-10px] lg:top-[6px]  left-[-350px] sm:left-[45px] lg:left-[63.29px] text-[12px] sm:text-[14px] lg:text-[21.94px]">
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
        <div className="absolute top-[1570px] sm:top-[1375px] lg:top-[1375px] left-[0px] bg-gainsboro shadow-[0px_6px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1386px] h-[130px] overflow-hidden text-left text-[20px] text-black">
          <a
            className="absolute top-[70px] sm:top-[50px] lg:top-[63px] left-[13px] sm:left-[30px] lg:left-[150px] [text-decoration:underline]  w-[300px] sm:w-[600px] lg:w-[1000.76px] text-[11px] sm:text-[13px] lg:text-[22px] font-bold text-[inherit]"
            href="https://www.carechainai.com/#"
            target="_blank"
          >
            2023 © All Rights Reserved | Designed and Developed by
            carechainai.com
          </a>
          <div className="absolute top-[30px] sm:top-[50px] lg:top-[51.87px] left-[15px] sm:left-[520px] lg:left-[1045.76px]  w-[100px] sm:w-[150px] lg:w-[214.76px] flex flex-row items-center justify-start gap-[20.75px]">
          <img
            className="animate-trans-right relative w-[30px] sm:w-[30px] lg:w-[51.87px] h-[30px] sm:h-[30px] lg:h-[51.87px] overflow-hidden shrink-0"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.11px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.22px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="animate-trans-right relative w-[20px] sm:w-[25px] lg:w-[40.22px] h-[20px] sm:h-[25px] lg:h-[40.11px]"
            alt=""
            src="/vector.svg"
          />
        </div>
          
          <b className="absolute top-[36px] sm:top-[17px] lg:top-[21px] left-[180px] sm:left-[520px] lg:left-[1055px]  text-[13px] sm:text-[17px] lg:text-[22px]">
            Get in touch with us !
          </b>
        </div>
        <div className="absolute top-[1070px] sm:top-[884px]  lg:top-[840px] left-[-290px] sm:left-[-160px] lg:left-[54px] text-[16px] sm:text-[28px] lg:text-[30px] font-semibold inline-block w-[760px]">
          Revealing Soon...
        </div>
        <div className="absolute top-[1040px] sm:top-[790px] lg:top-[736px]  left-[29px] sm:left-[70px] lg:left-[270px] text-[22px] sm:text-[60px] lg:text-[70px]  font-semibold  text-blue-600">
          Our Team
        </div>
        <img
          className="animate-trans-right absolute top-[959px] sm:top-[678px] lg:top-[606px] left-[188px] sm:left-[520px] lg:left-[988px] w-[150px] sm:w-[250px] lg:w-[356px] h-[160px] sm:h-[350px] lg:h-[428px] object-cover"
          alt=""
          src={is}
        />
        <img
          className="animate-trans-right absolute top-[-10px] sm:top-[-100px] lg:top-[10px] left-[36px] sm:left-[100px] lg:left-[902px] w-[250px] sm:w-[0px] lg:w-[400px] h-[265px] sm:h-[500px] lg:h-[500px] object-cover"
          alt=""
          src={am}
        />
       <div className="absolute top-[280px] sm:top-[0px] lg:top-[30px] left-[10px] sm:left-[89px]  sm:w-[600px] lg:w-[631px] smh-[543px] lg:h-[543px] text-3xl  ">
          <div className="absolute top-[0px] left-[3px] rounded-mini bg-blue-100 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden" />
          <div className="absolute top-[255px] left-[3px] rounded-mini  bg-blue-300 sm:bg-blue-200 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden">
            <div className="absolute top-[44px] sm:top-[24px] lg:top-[24px] left-[0px] sm:left-[15px] leading-[30px] text-[16px] sm:text-[21px] lg:text-[23px] font-medium inline-block  w-[138px] sm:w-[130px]">
              Secure Health Record Management
            </div>
          </div>
          <div className="absolute top-[0px] sm:top-[50px] left-[160px] sm:left-[237px] rounded-mini  bg-blue-200 sm:bg-blue-300 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden " />
          <div className="absolute top-[260px] sm:top-[345px] left-[160px] sm:left-[237px] rounded-mini bg-blue-400 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden" />
          <div className="absolute top-[500px] sm:top-[0px] left-[0px] sm:left-[471px] rounded-mini bg-blue-500 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden" />
          <div className="absolute top-[500px] sm:top-[295px] left-[160px] sm:left-[471px] rounded-mini bg-blue-600 shadow-[20px_7px_10px_rgba(0,_0,_0,_0.25)] w-[138px] sm:w-40 h-[171px] sm:h-[198px] overflow-hidden">
            <div className="absolute top-[55px] sm:top-[69px] lg:top-[69px] left-[4px] leading-[30px]  text-[16px] sm:text-[21px] lg:text-[23px] font-medium inline-block w-[138px] sm:w-[152px]">
              Personalized Patient Care
            </div>
          </div>
          <div className="absolute top-[45px] sm:top-[50px] lg:top-[50px] left-[0px] text-[16px] sm:text-[21px] lg:text-[23px] leading-[30px] font-medium inline-block w-[138px] sm:w-[164px] ">
            Innovative Healthcare Solutions
          </div>
          <div className="absolute top-[45px] sm:top-[87px] lg:top-[87px] left-[162px] sm:left-[237px] leading-[30px]  text-[16px] sm:text-[21px] lg:text-[23px] font-medium inline-block w-[138px] sm:w-[155px]">
            Seamless Online Appointment Booking
          </div>
          <div className="absolute top-[555px] sm:top-[50px] lg:top-[50px]  left-[0px] sm:left-[474px] leading-[30px]  text-[16px] sm:text-[21px] lg:text-[23px] font-medium text-black inline-block w-[138px] sm:w-[155px]">
            Blockchain-backed Privacy
          </div>
          <div className="absolute top-[300px] sm:top-[393px] left-[160px] sm:left-[218px]  text-[16px] sm:text-[21px] lg:text-[23px] leading-[30px] font-medium inline-block w-[138px] sm:w-[193px]">
            Empowering Healthcare Accessibility
          </div>
        </div>
      </div>
      <div className="absolute top-[144px] left-[0px] w-[1388px] h-[742px] sm:h-[180] lg:h-[742px] overflow-hidden text-left text-white">
        <img
          className="animate-trans-right absolute top-[140px] sm:top-[4px] lg:top-[0px] left-[-50px] sm:left-[200px] lg:left-[582px] w-[950px] sm:w-[570px] lg:w-[776px] h-[950px] sm:h-[500px] lg:h-[692.28px]"
          alt=""
          src="/amit.svg"
        />
        <b className="absolute top-[250px] sm:top-[38px]  lg:top-[26px] left-[90px] sm:left-[310px] lg:left-[736px] text-[26px] sm:text-[30px] lg:text-[45px] inline-block w-[317px] text-blue-700 [text-shadow:10px_4px_10px_rgba(0,_0,_0,_0.25)]">{`Welcome to              `}</b>
        <b className="absolute top-[0px] sm:top-[38px]  lg:top-[29px]  left-[300px] sm:left-[490px] lg:left-[1017px] text-[1px] sm:text-[30px] lg:text-[45px] inline-block  text-blue-400">
        CareChainAI
        </b>
        <b className="absolute top-[290px] sm:top-[87px] lg:top-[89px]  left-[95px] sm:left-[360px]  lg:left-[781px] text-[15px] sm:text-[23px] lg:text-[32px] inline-block w-[546px]  text-blue-500 [text-shadow:10px_4px_10px_rgba(0,_0,_0,_0.25)]">
          Revolutionizing Healthcare
        </b>
        <div className="absolute top-[320px] sm:top-[130px] lg:top-[180px] left-[125px] sm:left-[323px] lg:left-[797px] text-[13px] sm:text-[12px] lg:text-[18px] font-medium text-black text-center inline-block w-[170px] sm:w-[360px] lg:w-[513px]">
          CareChainAI is a pioneering healthcare platform dedicated to
          redefining how medical services are accessed and experienced. Our
          advanced technology empowers patients to seamlessly connect with
          specialized clinics, book appointments online, and securely manage
          health records through blockchain.
        </div>
        <div className="absolute top-[560px] sm:top-[250px] lg:top-[342px]  left-[130px] sm:left-[323px] lg:left-[795px]  text-[12px] sm:text-[12px] lg:text-[18px]   font-medium text-black text-center inline-block  w-[170px] sm:w-[360px] lg:w-[513px]">
          At CareChainAI, we prioritize your convenience, privacy, and
          personalized care, setting a new standard for healthcare accessibility
          and patient empowerment. Join us on this transformative journey where
          innovation meets your well-being.
        </div>
        <img
          className="animate-trans-right absolute top-[-28px] sm:top-[25px] lg:top-[37px] left-[-10px] sm:left-[6px] lg:left-[0px] w-[300px] sm:w-[290px] lg:w-[656px] h-[300px] sm:h-[350px] lg:h-[648px] object-cover"
          alt=""
          src={iso}
        />
      </div>
      <div className="absolute top-[28px] left-[108px] w-[1245px] overflow-hidden flex flex-row items-center justify-center gap-[151px] text-3xl text-deepskyblue">
        <img
          className="animate-trans-right relative w-[97.43px] h-[82px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
     <nav className="text-white font-bold py-2 px-4 rounded "> 
      <div className="relative rounded-[10px] bg-white shadow-[-10px_-5px_20px_rgba(61,_162,_255,_0.25),_20px_4px_20px_rgba(61,_162,_255,_0.22)] w-[598px] h-20">
          <div className="absolute top-[22px] left-[68px] flex flex-row items-center justify-start gap-[75px]">
          <button className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">     <div className="relative   text-[20px] font-medium"onClick={handleButtonClick1}>Home</div></button>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  <b className="relative  text-[20px] font-medium" >About us</b></button>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <div className="relative text-[20px] font-medium"onClick={handleButtonClick2}>Contact Us</div> </button>
          </div>
          
        </div>
        <img
                className="animate-trans-right absolute top-[61.5px] left-[335.07px] w-[500px] h-[5px]"
                alt=""
                src="/line-4.svg"
              />
        </nav>
        <div className="rounded-[7px] [background:linear-gradient(180deg,#e2a5ff,#c2d3ff)] shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-[15px] text-6xl text-white">
      <div className="hover:bg-purpal-300 relative font-semibold">Visit now</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

