import React from "react";
import { Tooltip } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";
 
const data = [
  {
    name: "Jan",
    revenue: 4000,
    
  },
  {
    name: "Feb",
    revenue: 3000,
    
  },
  {
    name: "Mar",
    revenue: 9800,
  },
  {
    name: "Apr",
    revenue: 3908,
  },
  {
    name: "May",
    revenue: 4800,
  },
  {
    name: "Jun",
    revenue: 3800,
  },
  {
    name: "Jul",
    revenue: 4300,
  },
  {
    name: "Aug",
    revenue: 4300,
  },
  {
    name: "Sep",
    revenue: 4300,
  },
  {
    name: "Oct",
    revenue: 4300,
  },
  {
    name: "Nov",
    revenue: 4300,
  },
  {
    name: "Dec",
    revenue: 4300,
  }
];
 
export default function App() {
  return (
    <>
    <h1>Registration revenue generated per month</h1>
    <BarChart
      width={800}
      height={800}
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
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
    </>
  );
}