import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import MiddleImage from "../Components/MiddleImage/MiddleImage";
import MiddleImage2 from "../Components/MiddleImage/MiddleImage2";
import PopularMenu from "../Components/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Urban Feast</title>
      </Helmet>
      <div className="px-2">
        <Banner></Banner>
      </div>
      <MiddleImage></MiddleImage>

      <div className="max-w-7xl mx-auto px-6 md:px-3">
        <PopularMenu></PopularMenu>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-3">
        <Faq></Faq>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-3">
        <MiddleImage2></MiddleImage2>
      </div>
    </div>
  );
};

export default Home;
