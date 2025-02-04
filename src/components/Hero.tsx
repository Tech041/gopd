import { assets } from "../assets/assets";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="mt-12 pt-2">
      <Container>
        <div className="flex  justify-between h-auto w-full ">
          {/* left side */}
          <div className="w-full lg:w-[55%] ">
            <div className="">
              <h1 className=" text-[20px] lg:text-[48px] lg:leading-[72px] font-semibold text-wrap py-10">
                Hire the best talent for <br /> your job.
              </h1>
              <p className="text-secondary text-[18px] leading-[27px] font-normal">
                Imperdiet pulvinar augue mauris morbi sed nibh gravida. Proin
                aliquam risus viverra elit. Metus rhoncus cras egestas in nullam
                et posuere eget quis. Laoreet blandit viverra senectus viverra.
              </p>
              <button className="text-white w-[157px] h-[48px] px-3 py-1 rounded-[10px] bg-primary border-[1px] my-5">
                Post a Job
              </button>
              <p className="text-[18px] leading-[27px] font-semibold my-5">
                Trusted by 1000+ companies.
              </p>
              {/* companies */}
              <div className="flex justify-between flex-wrap  gap-4 ">
                <img src={assets.star} alt="star" />
                <img src={assets.icon} alt="icon" />
                <img src={assets.jumia} alt="jumia" />
                <img src={assets.icon} alt="icon" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-[45%] hidden lg:block ">
            <img
              src={assets.hero}
              alt="Hero Image"
              className="w-[506px] h-[546px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
