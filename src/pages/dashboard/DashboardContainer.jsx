import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../components/charts/Chart";
import Deposits from "../../components/Deposits";
import { Patients } from "../../components/Patients";
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
import MonthComponent from "../../components/charts/MonthComponent";
import Total_Component from "../../components/charts/Total_Component";

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
    console.log(from);
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
                onChange={(e) => setFrom(e.target.value)}
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
                onChange={(e) => setTo(e.target.value)}
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
            <MonthComponent/>
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
            <Total_Component/>
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
              <ListItem button>
                <ListItemText primary="Registration" secondary="13000" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Laboratory" secondary="13000" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Procedure" secondary="13000" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Radiology" secondary="13000" />
              </ListItem>
            </List>
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
  )
};
