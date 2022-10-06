import search from "../assets/search.png"
import menu from "../assets/menu.svg"

export default function Navigation() {
    return (
      <>
      <div className="flex justify-between items-center	">
        <h3>FEW</h3>
        {/* <ul className="flex">
            <li><a href="#"> All </a></li>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Kitchen </a></li>
            <li><a href="#"> Work </a></li>
            <li><a href="#"> Travel </a></li>
            <li><a href="#"> Tech </a></li>
            <li><a href="#"> Gift Guide </a></li>
        </ul> */}
        <div className="flex items-center">
            <img src={search} alt="" />
            <img src={menu} alt="" className="w-6" />
        </div>
      </div>
      </>
    );
  }
  
;
  