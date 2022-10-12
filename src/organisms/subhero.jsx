import SubHeroText from "../molecules/subhero-text";
import SubHeroImg from "../molecules/subhero-img";


export default function SubHero() {
    return (
      <>
      <div className="sm:w-9/12 sm:mx-auto sm:my-0  py-10 space-y-10">

          <SubHeroText />   
          <SubHeroImg />

      </div>
      </>
    );
  }
  
;
  