import Description from "../components/Description";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Plans />
      <Footer/>
    </div>
  );
};

export default Home;
