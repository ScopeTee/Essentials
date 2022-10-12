import Home from "../molecules/home-prod";
import Kitchen from "../molecules/kitchen-prod";
import Work from "../molecules/work-prod";
import Travel from "../molecules/travel-prod";
import Tech from "../molecules/tech-prod";
import Newsletter from "../molecules/newsletter";

export default function Sections() {
  function hello() {
    alert("This button works")
  }
    return (
      <>
      <div className="space-y-16">
        <Home 
                button = {hello}
                />
        <Kitchen 
                        button = {hello}
                        />
        <Work 
                        button = {hello}
                        />
        <Travel 
                        button = {hello}
                        />
        <Tech 
                        button = {hello}
                        />
        <Newsletter 
                        button = {hello}
                        />
      </div>

      </>
    );
  }
  