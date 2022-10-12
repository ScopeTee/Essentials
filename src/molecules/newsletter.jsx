import Arrow from "../assets/arrow.png"

export default function Newsletter(props) {
    return (
      <>
      <div className="text-center space-y-5">
        <h1 className="text-4xl sm:text-6xl font-normal">Join the Newsletter</h1>
        <p className="text-base sm:text-2xl font-normal">Get curated essentials and updates to your inbox.</p>
        <div className="border-2 flex justify-between items-center rounded-3xl p-1 pl-5 sm:w-1/2 sm:mx-auto">
            <input type="text" placeholder="Your Email" className="bg-zinc-200 p-1 indent-2 w-11/12"/>
            <a href="#" onClick={props.button}>
                <img src={Arrow} />   
            </a>
        </div>
      </div>
      </>
    );
  }
  
;
  