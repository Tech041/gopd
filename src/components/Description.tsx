import { assets } from "../assets/assets";
import Container from "./Container";
const headingStyle =
  "text-secondary mulish text-[18px] leading-[27px] font-bold";
const divStyle = "wrapper flex justify-center gap-4 mt-10 ";
const Description = () => {
  return (
    <div className="mt-10 py-10 lg:bg-tertiary">
      <Container>
        <div className="max-w-[1200px] h-auto mx-4 px-4 py-2 flex   ">
          {/* left side */}
          <div className="h-[500px] lg:h-[628px] flex-1  ">
            <img src={assets.group} alt="" className="" />
          </div>
          {/* right side */}
          <div className="hidden lg:block w-[50%] flex-1   min-w-[300px] ">
            <h1 className="mulish font-bold text-[32px] leading-[48px]">
              Why GOPD
            </h1>
            <p className="mulish text-[18px]  text-secondary font-normal leading-[27px]">
              Eget at blandit id facilisi felis, est. Adipiscing est sem leo non
              est.
            </p>
            <div className={divStyle}>
              <div className="w-20 pt-1 ">
                <img
                  src={assets.tick_icon}
                  alt="w-[24px] h-[24px]"
                  className="tick_icon"
                />
              </div>
              <div className="">
                <h1 className={headingStyle}>
                  Eget at blandit id facilisi felis, est.
                </h1>
                <p className="text-secondary">
                  Lorem viverra elementum faucibus nisl amet amet convallis.
                  Cursus eros posuere quam tincidunt. Ornare varius ac blandit
                  facilisis ut risus at. Nulla erat odio nec.
                </p>
              </div>
            </div>
            <div className={divStyle}>
              <div className="w-20 pt-1 ">
                <img
                  src={assets.tick_icon}
                  alt="w-[24px] h-[24px]"
                  className="tick_icon"
                />
              </div>
              <div className="">
                <h1 className={headingStyle}>
                  Eget at blandit id facilisi felis, est.
                </h1>
                <p className="text-secondary">
                  Lorem viverra elementum faucibus nisl amet amet convallis.
                  Cursus eros posuere quam tincidunt. Ornare varius ac blandit
                  facilisis ut risus at. Nulla erat odio nec.
                </p>
              </div>
            </div>{" "}
            <div className={divStyle}>
              <div className="w-20 pt-1 ">
                <img
                  src={assets.tick_icon}
                  alt="w-[24px] h-[24px]"
                  className="tick_icon"
                />
              </div>
              <div className="">
                <h1 className={headingStyle}>
                  Eget at blandit id facilisi felis, est.
                </h1>
                <p className="text-secondary">
                  Lorem viverra elementum faucibus nisl amet amet convallis.
                  Cursus eros posuere quam tincidunt. Ornare varius ac blandit
                  facilisis ut risus at. Nulla erat odio nec.
                </p>
              </div>
            </div>{" "}
            <div className={divStyle}>
              <div className="w-20 pt-1 ">
                <img
                  src={assets.tick_icon}
                  alt="w-[24px] h-[24px]"
                  className="tick_icon"
                />
              </div>
              <div className="">
                <h1 className={headingStyle}>
                  Eget at blandit id facilisi felis, est.
                </h1>
                <p className="text-secondary">
                  Lorem viverra elementum faucibus nisl amet amet convallis.
                  Cursus eros posuere quam tincidunt. Ornare varius ac blandit
                  facilisis ut risus at. Nulla erat odio nec.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Description;
