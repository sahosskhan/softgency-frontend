import CaseStudy from "./CaseStudy";
import Collaboration from "./Collaboration";
import Counter from "./Counter";
import HeroPage from "./HeroPage";
import HowWeWork from "./HowWeWork";
import ServiceHighlight from "./ServiceHighlight";
import WhyChooseUs from "./WhyChooseUs";



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 pt-10">
      <HeroPage />
<WhyChooseUs/>
<Counter/>
{/* <HowWeWork/> */}
<ServiceHighlight/>
<CaseStudy/>
<Collaboration/>
    </div>
  );
};

export default Home;
