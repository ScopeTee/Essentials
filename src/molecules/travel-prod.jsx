import {Heading1} from "../atoms/typography"
import { Btn } from "../atoms/buttons";
import OtherProducts from "./hero-products";
import {travel} from "../organisms/data"


export default function Work() {

  const travelProducts = travel.map(prod => {
    return <OtherProducts 
        key={prod.key}
        name={prod.name} 
        description={prod.description} 
        price={prod.price} 
        image = {prod.img}
        />
    })
    return (
      <>
      <div>
            <div className="flex flex-col	items-center justify-between">
              <Heading1 className="text-4xl">Travel</Heading1>
              <div className="grid gap-x-2 gap-y-2	text-center	 grid-cols-2 sm:grid-cols-3">
                {travelProducts}
              </div>
              <Btn className="border-2 border-black p-2 rounded-3xl	">See all Travel</Btn>
            </div>
        </div>

      </>
    );
  }
  