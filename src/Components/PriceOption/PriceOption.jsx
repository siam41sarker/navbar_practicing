import Feature from "../Feature/Feature";

const PriceOption = ({ priceItem }) => {
  const { name, price, features } = priceItem;
  return (
      <div className="flex flex-col w-11/12 md:w-[450px] mx-auto h-[420px] bg-blue-500 rounded-xl pb-5">
        <div className="flex  flex-col items-center gap-3 mt-5">
          <h1>
            <span className="text-7xl text-white font-extrabold">{price}</span>
            <span className="text-3xl text-white">/month</span>
          </h1>
          <p className="text-white text-3xl">{name}</p>
        </div>
        <div className="ml-8 flex-grow mt-10">
            {features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)}
        </div>
        <button className="bg-green-400 text-white text-center w-full p-2 font-bold hover:bg-green-800 ">Buy Now</button>
      </div>
  );
};

export default PriceOption;
