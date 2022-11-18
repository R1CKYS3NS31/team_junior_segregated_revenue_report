import React from "react";
import { Bar, BarChart, Tooltip } from "recharts";
import { XAxis, YAxis, CartesianGrid, Legend } from "recharts";

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
    revenue: 90300,
  },
  {
    name: "Nov",
    revenue: 89300,
  },
  {
    name: "Dec",
    revenue: 43300,
  },
];

export default function RegRevenue() {
  return (
    <>
      <h1>Laboratory revenue generated per month</h1>
      <BarChart width={600} height={600} data={data}>
        <Bar dataKey="revenue" fill="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <YAxis />
      </BarChart>
    </>
  );
}
