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
import jsonData from "../data/revenue.json";

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





export default function Chart({labTotal, regTotal, pharmTotal,radTotal, procTotal}) {
  const theme = useTheme();
  
  const data = [
    {
      name: 'laboratory',
      revenues: labTotal
    },
    {
      name: "Registration",
      revenues: regTotal
    },
    {
      name: "Pharmacy",
      revenues: pharmTotal
    },
    {
      name: "Radiology",
      revenues: radTotal
    },
    {
      name: "Procedures",
      revenues: procTotal
    }
  ];

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
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenues" fill="#8884d8" />
      {/* <Bar dataKey="amount" fill="blue" />
      <Bar dataKey="amount" fill="yellow" />
      <Bar dataKey="amount" fill="black" /> */}
    </BarChart>      
      </ResponsiveContainer>
    </React.Fragment>
  );
}