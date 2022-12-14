import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Header from "../../components/Header";
import Chat from "../../assets/icon-chat.png";
import Money from "../../assets/icon-money.png";
import Security from "../../assets/icon-security.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features
          icon={Chat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Features
          icon={Money}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Features
          icon={Security}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
