import search from "../assets/search.png"
import menu from "../assets/menu.svg"

export default function Navigation() {
    return (
      <>
      <div className="flex justify-between items-center	">
        <h3 className="font-bold">FEW</h3>
        <div className="hidden sm:flex space-x-5 md:space-x-10">
          <a href="#" className="hover:text-red-500	"> All </a>
          <a href="#" className="hover:text-red-500	"> Home </a>
          <a href="#" className="hover:text-red-500	"> Kitchen </a>
          <a href="#" className="hover:text-red-500	"> Work </a>
          <a href="#" className="hover:text-red-500	"> Travel </a>
          <a href="#" className="hover:text-red-500	"> Tech </a>
          <a href="#" className="hover:text-red-500	"> Gift Guide </a>
        </div>
        <a href="#">
          <img src={search} alt="" className="hidden sm:flex" />
        </a>

        <div className="flex items-center sm:hidden">
            {/* <img src={search} alt="" /> */}
            <img src={menu} alt="" className="w-6" />
        </div>
      </div>
      </>
    );
  }
  
;
  