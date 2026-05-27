import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Main from "../components/home/Main";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
