import {Heading1} from "../atoms/typography"
import { Btn } from "../atoms/buttons";
import HeroProducts from "../molecules/hero-products";
import {products} from "./data"


export default function Hero() {
  const heroElement = products.map(prod => {
        return <HeroProducts 
            key={prod.key}
            name={prod.name} 
            description={prod.description} 
            price={prod.price} 
            image = {prod.img}
            />
    })

    return (
      <>
        <div className="flex flex-col	items-center justify-between space-y-4">
          <Heading1 className="text-4xl">Essentials Curated</Heading1>
          <div className="grid gap-x-2 gap-y-2	text-center	 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4	">
            {heroElement}
          </div>
          <Btn className="border-2 border-black p-2 rounded-3xl	">See all Products</Btn>
        </div>
      </>
    );
  }
  