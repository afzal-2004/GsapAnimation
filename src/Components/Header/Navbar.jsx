import logo from "../../assets/brand_logo.svg";
import "./navBar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Navbar = () => {
  useGSAP(() => {
    gsap.from(
      ".menu li",
      {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
      },
      { scope: ".menu" }
    );
  });
  return (
    <>
      <nav className="   flex     p-[10px]    justify-between  items-center  ">
        <img src={logo} alt="" className="" />
        <ul className=" menu">
          <li> Menu </li>
          <li> Location</li>
          <li>About</li>
          <li> Contact</li>
        </ul>
        <button className=" bg-red-500  px-5 py-1 rounded-[5px] text-white hover:bg-red-700">
          login
        </button>
      </nav>
    </>
  );
};
