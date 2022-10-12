import fff from "../assets/Background.png"

export default function SubHeroImg() {
    return (
      <>
        <div className="text-center sm:h-96" 
            style={{ 
            backgroundImage: `url(${fff})` ,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center" , 
            }}>
            {/* <div className=" text-neutral-500 w-1/2 space-y-5 mx-auto">            */}
            <div className=" text-neutral-500 flex flex-col items-center space-y-5">
                <p className="text-base	">Coming Soon</p>
                <p className="text-4xl sm:text-6xl	">Curated By</p>
                <p className="text-base sm:text-2xl	">Creators and experts share products that enrich their lives.</p>
            </div>
        </div>
      </>
    );
  }
  
;
  