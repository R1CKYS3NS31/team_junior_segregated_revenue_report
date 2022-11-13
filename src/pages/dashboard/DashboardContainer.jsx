import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../components/Chart";
import Deposits from "../../components/Deposits";
import {Patients} from "../../components/Patients";
import { Link, Typography } from "@mui/material";

export const DashboardContainer = ({labTotal, regTotal, pharmTotal,radTotal, procTotal, grandTotal}) => {
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

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
            <Chart labTotal={labTotal} regTotal={regTotal} pharmTotal={pharmTotal} radTotal={radTotal} procTotal={procTotal}/>
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
            <Deposits grandTotal={grandTotal}/>
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
