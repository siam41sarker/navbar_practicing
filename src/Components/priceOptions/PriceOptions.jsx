import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
    const [prices,setPrices] = useState([]);
    useEffect(()=>
            {
                fetch('gym.json')
                .then(response=>response.json())
                .then(data=>setPrices(data))
                .catch(e=>console.log(e))
            },[])
    return (
        <div className="md:pl-10 pb-2 mt-[200px]">
            <h1 className="mt-10 mb-5 text-center md:text-left text-4xl font-extrabold">Best Prices In The Town:</h1>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
                {prices.map((price,idx)=><PriceOption key={idx} priceItem={price}></PriceOption>)}
            </div>
        </div>
    );
};

export default PriceOptions;