import {Heading1} from "../atoms/typography"
import { Btn } from "../atoms/buttons";
import Products from "./product-component";
import {products} from "../organisms/data";


export default function HeroProd(props) {
  console.log(props)
  const heroElement = products.map(prod => {
        return <Products 
            key={prod.key}
            name={prod.name} 
            description={prod.description} 
            price={prod.price} 
            image = {prod.img}
            />
    })



    return (
      <>
        <div className="flex flex-col	items-center justify-between space-y-12">
          <Heading1 className="text-3xl sm:text-6xl sm:font-bold shadow-2xl	shadow-black	">Essentials Curated</Heading1>
          <div className="grid gap-x-2 gap-y-4	text-center	 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4	">
            {heroElement}
          </div>
          <Btn className="border-2 border-black p-2 rounded-3xl hover:bg-red-500 hover:text-white" onClick={props.button} >See all Products</Btn>
        </div>
      </>
    );
  }
  