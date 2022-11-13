import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../components/Chart";
import Deposits from "../../components/Deposits";
import { Patients } from "../../components/Patients";
import { Box, Link, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PieRechartComponent from "../../components/charts/PieComponent";

export const DashboardContainer = () => {

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          Your Website
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  // date picker
  const newDate = new Date();
  const [to, setTo] = React.useState(dayjs(newDate.toString()));
  const [from, setFrom] = React.useState(dayjs(newDate.toString()));

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(from)
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h2>Dashboard</h2>
      {/* datepicker */}
      <form onSubmit={handlesubmit}>
        <Box sx={{ mt: 4, mx: 4, display: "flex" }}>
          <div className="from">
            <label htmlFor="from" style={{ paddingRight: "5px" }}>
              From:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Year, month and date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="to" style={{ paddingLeft: "10px" }}>
            <label htmlFor="to" style={{ paddingRight: "5px" }}>
              To:{" "}
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Year, month and date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </div>

          <input type="submit" value="Filter" />
        </Box>
      </form>
      <Grid container spacing={3}>
         {/* Chart */}
         <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <PieRechartComponent/>
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
         
        {/* Recent Revenue */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Patients */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Patients />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};
