import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import jsonData from '../data/revenue.json'
import { indexes } from 'd3';

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
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
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
            stroke={theme.palette.text.secondary}
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
              Sales ($)
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