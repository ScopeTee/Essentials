import Navigation from "../organisms/navigation";
import Hero from "../organisms/hero";
import SubHero from "../organisms/subhero";
import Sections from "../organisms/sections";
import Footer from "../organisms/footer";


export default function Essentials() {
  function hello() {
    alert("This button works")
  }
    return (
      <>
      <div className="w-11/12 mx-auto space-y-16">
      <Navigation />
      <Hero />
      <SubHero />
      <Sections />
      <Footer />
      </div>
      </>
    );
  }
  
;
  