import ShortCard from "./ShortCard";
import Container from "./Container";
import LongCard from "./LongCard";

const Plans = () => {
  return (
    <div className="h-auto">
      <Container>
        <div className="flex items-center lg:items-start  lg:justify-center flex-col  lg:flex-row  gap-10 my-20 ">
          <div className="">
            <ShortCard />
          </div>
          <div className="">
            <LongCard />
          </div>
          <div className="">
            <ShortCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
