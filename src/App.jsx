import { useState } from "react";
import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import PhoneData from "./Components/PhoneData/PhoneData";
import PriceOptions from "./Components/priceOptions/PriceOptions";
import { Audio, Grid } from "react-loader-spinner";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      
      <PriceOptions></PriceOptions>
      <div className="hidden md:block ">
        <LineChart></LineChart>
        {loading && (
          <div className="mt-10 ml-20 flex gap-20">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
            <Grid
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
          </div>
        )}
        <div className="mt-16">
          <PhoneData setLoading={setLoading}></PhoneData>
        </div>
      </div>
    </>
  );
}
export default App;
