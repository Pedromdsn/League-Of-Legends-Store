import Footer from "../components/Footer";
import Header from "../components/Header";
import MainChampion from "../components/Home/mainChampion";
import Why from "../components/Home/Why";
import Region from "../components/Home/Region";

const Home = () => {
  return (
    <>
      <Header/>
      <MainChampion/>
      <Why/>
      <Region/>
      <Footer/>
    </>
  );
}

export default Home;