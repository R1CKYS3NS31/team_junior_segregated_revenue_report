import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../components/charts/Chart";
import Deposits from "../../components/Deposits";

import {
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PieRechartComponent from "../../components/charts/PieComponent";
import Total_Component from "../../components/charts/MethodPie";
import TestComponent from "../../components/test/TestComponent";
import PatientSummaries from "../patientSummaries/PatientSummaries";
import Table from "../../components/table/Table";
// import Order from "../../components/charts/Order";

export const DashboardContainer = ({
  patients,
  takeDate,
  totalRevenue,
  reg,
  setReg,
  lab,
  setLab,
  proc,
  setProc,
  rad,
  setRad,
  pharm,
  setPharm,
  Datefilter
}) => {
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

    const dateFrom = `${from.$d.getFullYear()}-${from.$d.getMonth()}-${from.$d.getDate()}`;
    const dateTo = `${to.$d.getFullYear()}-${to.$d.getMonth()}-${to.$d.getDate()}`

    takeDate(dateFrom, dateTo);
    Datefilter()
    console.log(dateFrom, dateTo)

  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h2>Dashboard</h2>
      {/* datepicker */}

      <form onSubmit={handlesubmit}>
        <Grid
          container
          spacing={3}
          sx={{
            mt: 4,
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="from" style={{ flex: 2 }}>
            <label htmlFor="from" style={{ paddingRight: "5px" }}>
              From:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Year, month and date"
                value={from}
                onChange={(newValue) => setFrom(newValue)}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="to" style={{ paddingLeft: "10px", flex: 2 }}>
            <label htmlFor="to" style={{ paddingRight: "5px" }}>
              To:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Year, month and date"
                value={to}
                onChange={(newValue) => setTo(newValue)}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </div>
          <Button
            type="submit"
            sx={{
              width: "100%",
              ml: 4,
              mr: 4,
              flex: 1,
              color: "white",
              backgroundColor: "lightblue",
            }}
          >
            Filter
          </Button>
        </Grid>
      </form>

      {/* report */}

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
            {/* <MonthComponent reg={reg} pharm={pharm} lab={lab} rad={rad} proc={proc}/> */}
            <Chart lab={lab} proc={proc} rad={rad} pharm={pharm} reg={reg} />
          </Paper>
        </Grid>

        {/* Recent Revenue */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: '100%',
            }}
          >
            {/* <Departments /> */}
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-label="mailbox folders"
            >
              {/* <ListItem button>
                <ListItemText primary="Registration" secondary={`KES ${reg}`} />
              </ListItem>
              <Divider />             */}
            
              <ListItem button>
                <ListItemText
                  primary="TOTAL REVENUE"
                  secondary={`KES ${totalRevenue}`}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        {/* Chart */}
        {/* <Grid item xs={12} md={8} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Total_Component />
          </Paper>
        </Grid>
        Chart */}

        {/* Recent Patients */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{paddingBottom:"20px"}}>Patients Summary</h3>
            <Table patients={patients} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};
