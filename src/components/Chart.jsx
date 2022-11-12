import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";
import Title from './Title';
import jsonData from '../data/revenue.json'

// import { indexes } from 'd3';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

// details.forEach(detail => {
//   console.log(detail);
// })


// const filtered_dets = details.filter(det => {
//   return det.userId == 1;
// }) 
// console.log(filtered_dets);



const laboratory = jsonData["revenue"][0]["department"][0]["laboratory"]
const registration = jsonData["revenue"][0]["department"][0]["registration"]
const procedures = jsonData["revenue"][0]["department"][0]["procedures"]
const radiology = jsonData["revenue"][0]["department"][0]["radiology"]
const pharmacy = jsonData["revenue"][0]["department"][0]["pharmacy"]

const laboratory_details = laboratory.map((data)=>{return data})
const registration_details = registration.map((data)=>{return data})
const procedures_details = procedures.map((data)=>{return data})
const radiology_details = radiology.map((data)=>{return data})
const pharmacy_details = pharmacy.map((data)=>{return data})


let detail_total = 0;

function calcTotal(detail){
  detail_total = 0;
  for (var i=0; i < detail.length; i++) {
    const amount = detail[i]["amount_paid"]
    detail_total += amount
  }
  
  return detail_total;
}

const labTotal = calcTotal(laboratory_details)
const regTotal = calcTotal(registration_details)
const procTotal = calcTotal(procedures_details)
const radTotal = calcTotal(radiology_details)
const pharmTotal = calcTotal(pharmacy_details)


const grandTotal = labTotal+regTotal+procTotal+radTotal+pharmTotal;

const data = [
  {
    name: "Jan",
    buy: 4000,
    sell: 2400,
  },
  {
    name: "Feb",
    buy: 3000,
    sell: 1398,
  },
  {
    name: "Mar",
    buy: 2000,
    sell: 9800,
  },
  {
    name: "Apr",
    buy: 2780,
    sell: 3908,
  },
  {
    name: "May",
    buy: 1890,
    sell: 4800,
  },
  {
    name: "Jun",
    buy: 2390,
    sell: 3800,
  },
  {
    name: "Jul",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Aug",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Sep",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Oct",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Nov",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Dec",
    buy: 3490,
    sell: 4300,
  }

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
      <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="buy" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
    </BarChart>      
      </ResponsiveContainer>
    </React.Fragment>
  );
}