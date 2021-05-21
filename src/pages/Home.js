import Breedsdiscover from "../components/Home/Breedsdiscover";
import Header from "../components/Home/Header";
import WhyShould from "../components/Home/WhyShould";
import "./Home.scss";

const Home = () => {
   return (
      <div>
         <Header />
         <Breedsdiscover />
         <WhyShould />
      </div>
   );
};

export default Home;
