import { Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.smsSlice);

  return (
    <Grid pl={1} pt={0}>
      <Typography fontSize={"2rem"} color={"primary"}>Campaigns</Typography>
      
    </Grid>
  );
}
