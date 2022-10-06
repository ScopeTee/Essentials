import SubHeroText from "../molecules/subhero-text";
import { BgImg } from "../atoms/assets";
import fff from "../assets/Background.png"


export default function SubHero() {
    return (
      <>
      <div className="sm:w-9/12 sm:mx-auto sm:my-0">

          <SubHeroText />   
          {/* <BgImg className="w-24 h-24">
          <img src={fff} />
        </BgImg>  */}
          <div className="text-center" 
            style={{ 
              backgroundImage: `url(${fff})` ,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center" , 
            }}>
              <div className="p-16 text-neutral-500">           
                <p>Coming Soon</p>
                <p>Curated By</p>
                <p>Creators and experts share products that enrich their lives.</p>
              </div>
          </div>
      </div>
      </>
    );
  }
  
;
  