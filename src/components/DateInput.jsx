import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export const DateInput = () => {
  const newDate = new Date();
  const [value, setValue] = React.useState(dayjs(newDate.toString()));
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        openTo="year"
        views={["year", "month", "day"]}
        label="Year, month and date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};
