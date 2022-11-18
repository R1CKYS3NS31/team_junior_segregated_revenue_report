import { Grid } from '@mui/material'
import React from 'react'
import Table from '../../components/table/Table'

export const PatientSummaries = ({patients}) => {
  return (
    <Grid
    container
    spacing={3}
    sx={{ justifyContent: "center", alignItems: "center" }}
  >
    <Table patients={patients} />
    {/* report */}
  </Grid>
  )
}
