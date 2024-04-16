import Header from "../../globalComponents/header/Header";
import Hero1 from "./components/Hero1";
import About from "./components/About";
import Job from "./components/Job";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function LandingPage() {
  return (
    <>
     
      <main>
        
        <Hero1></Hero1>
        <About></About>
        <Service></Service>
        <Job></Job>
        <Testimonial></Testimonial>
      </main>
    </>
  );
}
