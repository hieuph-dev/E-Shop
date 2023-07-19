import React from "react";
import styles from "../../styles/style";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
        {
            navItems && navItems.map((i, index) => (
                <div className="flex" key={i}>
                    <Link to={i.url}
                        className={`${active === index + 1 ? "text-[#fff]" : "text-black 800px:text-[#434343]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
        }
    </div>
  )
};

export default Navbar;
