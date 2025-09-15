import HeroPage from "./HeroPage";
import HowWeWork from "./HowWeWork";
import WhyChooseUs from "./WhyChooseUs";



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 pt-10">
      <HeroPage />
<WhyChooseUs/>
<HowWeWork/>
    </div>
  );
};

export default Home;
