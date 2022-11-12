import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import jsonData from '../data/revenue.json'

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
  createData('Laboratoty', labTotal),
  createData('Registation', regTotal),
  createData('Procedures', procTotal),
  createData('Radiology', radTotal),
  createData('Pharmacy', pharmTotal),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.primary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Revenues (KES)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}