import Copyright from "../molecules/copyright";
import FootSocial from "../molecules/foot-socials";


export default function Footer() {
    return (
      <>
      <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-between md:space-y-0" >
      <FootSocial />
      <Copyright />
      </div>
      </>
    );
  }
  
;
  