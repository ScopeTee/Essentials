import { Span } from "../atoms/typography";
export default function Products(props) {
    // console.log(props)
    
    return (
      <>
        <div className="border-2 bg-white	">
            <img src={`../assets/${props.image}`} alt="" className=" bg-gray-400	"/>

            <div className="text-start mx-2 space-y-5">
              <p className="flex justify-between mb-1 items-center">
                <span className="text-sm font-light	text-neutral-500">{props.name}</span>
                <Span className="font-extrabold	">${props.price}</Span>
              </p>
              <p className="text-base font-normal		">{props.description}</p>
            </div>
        </div>     
      </>
    );
  }
  
;
  