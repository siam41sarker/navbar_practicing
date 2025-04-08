import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
const PhoneData = ({setLoading}) => {
    const [phones,setPhones] = useState([]);
    useEffect(()=>
        {
            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data=>{
                const phoneData = data.data.data;
                console.log(phoneData);
                const myData = phoneData.map(phone=>{
                    const phoneObj = {
                        name: phone.phone_name,
                        price:parseInt(phone.slug.split('-')[1])
                    };
                    return phoneObj;
                })
                setPhones(myData);
                setLoading(false);
                console.log(myData)
            })
        },[])
    return (
        <div className="mt-10 ml-20">
            <h1 className="text-7xl">Total Phones:{phones.length}</h1>
            <div className="mt-10">
                <BarChart width={1400} height={500} data={phones}>
                    <CartesianGrid strokeDasharray="5 3"></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="price" fill="blue"></Bar>
                </BarChart>
            </div>
        </div>
    );
};
export default PhoneData;