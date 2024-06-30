import "./home.css";
import flipcart from "../../assets/flipkart.svg";
import Amazon from "../../assets/amazon.svg";
import shoes_image from "../../assets/shoe_image.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Home = () => {
  useGSAP(() => {
    gsap.from(".text", {
      opacity: 0,
      x: 100,
      duration: 2,
      delay: 0.5,
    });
  }, []);
  useGSAP(() => {
    gsap.from(".maintext", {
      opacity: 0,
      x: -100,
      duration: 2,
      delay: 0.5,
    });
  }, []);
  useGSAP(() => {
    gsap.from(".shoe", {
      opacity: 0,
      x: 100,
      duration: 2,
      delay: 0.5,
    });
  }, []);
  useGSAP(() => {
    gsap.from(".Shopnow ,.category", {
      opacity: 0,
      x: -100,
      duration: 2,
      delay: 0.5,
    });
  }, []);
  useGSAP(() => {
    gsap.from(".media", {
      opacity: 0,
      x: 100,
      duration: 2,
      delay: 0.5,
    });
  }, []);
  return (
    <main className=" xl:flex justify-between  m-[5%]">
      <div className=" xl:w-[50%]">
        <h1 className="maintext "> Your Feet deserve the best</h1>
        <p className=" text">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <section className=" flex gap-x-9 mt-4">
          <button className="Shopnow"> Shop Now </button>
          <button className=" category"> Category</button>
        </section>
        <p className="  mt-5 opacity-55 media">Also Available On</p>

        <section className=" mt-5 flex gap-x-4 items-center media">
          <a href="#">
            <img src={flipcart} alt="f" className=" " />
          </a>
          <a href="#">
            <img src={Amazon} alt="a" className=" " />
          </a>
        </section>
      </div>
      <div className="  mt-[5%] md:mt-0   shoe">
        <img src={shoes_image} alt="" />
      </div>
    </main>
  );
};
