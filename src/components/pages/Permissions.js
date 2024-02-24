import { Grid, Typography } from '@mui/material'
import React from 'react'
import AppData from './AppData'

export default function Permissions() {
  return (
    <Grid pl={1}>
     <Typography fontSize={"2rem"} color={"primary"}> Permissions</Typography>
      
     <AppData />

    </Grid>
  )
}
