
export default function OtherProducts(props) {
    console.log(props)
    
    return (
      <>
        <div className="border-2">
            <img src={`../assets/${props.image}`} alt="" className=" bg-gray-400	"/>
            <div className="text-start">
                <span className="text-sm font-normal		">{props.name}</span>
                <p className="text-base font-normal		">{props.description}</p>
                <span className="text-base font-normal	text-bold	">${props.price}</span>
            </div>
        </div>     
      </>
    );
  }
  
;
  