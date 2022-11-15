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
import Total_Component from "../../components/charts/MethodPie";

export const DashboardContainer = ({
  takeDate,
  grandTotal,
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
  RadiologyFilterTotal,
  ProcedureFilterTotal,
  RegistrationFilterTotal,
  PharmacyFilterTotal,
  LaboratoryFilterTotal,
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
   
   
   
    const dateFrom = `${from.$d.getDate()}-${from.$d.getMonth()}-${from.$d.getFullYear()}`
    const dateTo = `${to.$d.getDate()}-${to.$d.getMonth()}-${to.$d.getFullYear()}`

    takeDate(dateTo,dateFrom)
 

    setReg(RegistrationFilterTotal)
    setPharm(PharmacyFilterTotal)
    setRad(RadiologyFilterTotal)
    setProc(ProcedureFilterTotal)
    setLab(LaboratoryFilterTotal)
    
    console.log(RegistrationFilterTotal)
    console.log(PharmacyFilterTotal)
    console.log(RadiologyFilterTotal)
    console.log(ProcedureFilterTotal)
    console.log(LaboratoryFilterTotal)

    // window.location.reload()


    

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
            <Chart lab={lab} proc={proc} rad={rad} pharm={pharm} reg={reg}/>
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
                <ListItemText primary="Registration" secondary={reg} />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Laboratory" secondary={lab} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Procedure" secondary={proc} />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Radiology" secondary={rad} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pharmacy" secondary={pharm} />
              </ListItem>
            </List>
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
              </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={5}>
          
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 290,
            }}
          >            
            <PieRechartComponent reg={reg}   grandTotal={grandTotal} pharm={pharm} lab={lab} rad={rad} proc={proc}/>
          </Paper>
        </Grid>

        {/* Chart */}
        <Grid item xs={12} md={8} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 290,
            }}
          >
            <Total_Component />
          </Paper>
        </Grid>

        {/* Recent Patients */}
        {/* <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Patients />
          </Paper>
        </Grid> */}
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};
