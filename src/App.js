import "./App.css";
import { About } from "./components/about/About";
import VideoIntroductions from "./components/about/VideoIntroductions";
import WhyChooseUs from "./components/about/WhyChooseUs";
import Blogs from "./components/blogs/Blogs";
import { Customer } from "./components/customer/Customer";
import FAQs from "./components/FAQ/FAQs";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/services/Header";
import { Services } from "./components/services/Services";
import { Subscribe } from "./components/subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Header/>
      <Services />
      <About />
      <WhyChooseUs/>
      <VideoIntroductions/>
      <Blogs/>
      <FAQs/>
      <Subscribe />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
