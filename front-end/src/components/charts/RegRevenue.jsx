import React from "react";
import { BarChart, Tooltip } from "recharts";
import { Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
  {
    name: "Jan",
    revenue: 0,
  },
  {
    name: "Feb",
    revenue: 0,
  },
  {
    name: "Mar",
    revenue: 0,
  },
  {
    name: "Apr",
    revenue: 0,
  },
  {
    name: "May",
    revenue: 0,
  },
  {
    name: "Jun",
    revenue: 0,
  },
  {
    name: "Jul",
    revenue: 400,
  },
  {
    name: "Aug",
    revenue: 0,
  },
  {
    name: "Sep",
    revenue: 0,

  },
  {
    name: "Oct",
    revenue: 0,

  },
  {
    name: "Nov",
    revenue: 0,
  },
  {
    name: "Dec",
    revenue: 0,
  },
];

export default function RegRevenue() {
  return (
    <>
      <BarChart width={600} height={400} data={data}>
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
