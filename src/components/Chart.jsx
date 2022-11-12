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

const laboratory_details = laboratory.map((data)=>{return data})
const registration_details = registration.map((data)=>{return data})
const procedures_details = procedures.map((data)=>{return data})
const radiology_details = radiology.map((data)=>{return data})

let lab_total = 0;
let reg_total = 0;
let proc_total = 0;
let rad_total = 0;

for (var i=0; i < laboratory_details.length; i++) {
  const lab_amount = laboratory_details[i]["amount_paid"]
  lab_total += lab_amount

}

for (var n=0; n < registration_details.length; n++) {
  const reg_amount = registration_details[n]["amount_paid"]
  reg_total += reg_amount
}

for (var n=0; n < procedures_details.length; n++) {
  const proc_amount = procedures_details[n]["amount_paid"]
  proc_total += proc_amount
}

for (var n=0; n < radiology_details.length; n++) {
  const rad_amount = radiology_details[n]["amount_paid"]
  rad_total += rad_amount
}


console.log(lab_total)
console.log(reg_total)
console.log(proc_total)
console.log(rad_total)


// {console.log(jsonData["revenue"][0]["department"][0]["laboratory"][0]["amount_paid"])}
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