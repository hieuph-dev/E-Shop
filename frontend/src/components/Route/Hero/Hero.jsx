import React from "react";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      // className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      className={`relative min-h-[20vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
          "url(https://cdn.hoanghamobile.com/i/home/Uploads/2023/06/16/14prm-pc.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        {/* <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> Electronics 
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p> */}
        {/* <Link to="/products" className="inline-block">
          <div className={`absolute w-[212px] bg-rose-400 h-[65px] !my-11 !ml-12  flex items-center justify-center rounded-xl cursor-pointer `}>
            <span className="text-[#000] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>        
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
