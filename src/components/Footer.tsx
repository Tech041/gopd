import { assets } from "../assets/assets";
import Container from "./Container";
const spanStyle = "dm-sans font-normal text-[15px] text-secondary";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-tertiary">
      <Container>
        <div className="pb-20">
          <div className="pt-[45px] flex justify-center">
            <img
              src={assets.footer_image}
              alt="footer_image"
              className="w-[88px] h-[64px]"
            />
          </div>
          <div className="">
            <p className="text-center text-[17px] dm-sans font-normal text-secondary pt-5">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-5 pt-4">
            <span className={spanStyle}>Campaigns</span>
            <span className={spanStyle}>Email Marketing</span>
            <span className={spanStyle}>Branding</span>
            <span className={spanStyle}>Offline</span>
            <span className={spanStyle}>Contact</span>
            <span className={spanStyle}>FAQs</span>
          </div>
          <div className="flex justify-center items-center gap-10 mt-10 pt-4">
            <span>
              <img
                src={assets.facebook}
                alt="facebook"
                className="w-[10px] h-[20px]"
              />
            </span>
            <span>
              <img
                src={assets.twitter}
                alt="twitter"
                className="w-[22px] h-[18px]"
              />
            </span>
            <span>
              <img
                src={assets.instagram}
                alt="instagram"
                className="w-[22px] h-[22px]"
              />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
