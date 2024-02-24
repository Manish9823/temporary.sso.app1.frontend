import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function AppsListCard({ app }) {
    const theme = useTheme();
  return (
    // <Card className="app-list-card">
    //   <Box className="app-list-box">

    // <Box  sx={{height:"80px" , width:"80px", display:"grid" , alignContent:"center"}}> 
      <Card className="app-list-card" sx={{height:"80px", width:"90px" , display:"grid" , placeItems:"center", boxShadow:"none", border:"1px solid #8b87ff", borderRadius:"8px"}}>
        <app.icon color="danger" fontSize="small" style={{ color:theme.palette.primary.main}} />
        <Typography
          className="ml-4 m-2"
          color="inherit"
          underline="hover"
          variant="body2"
          style={{ fontSize: "0.7rem" ,fontWeight:"bold", color:theme.palette.primary.main}}
          
        >
          {app.appName}
        </Typography>
      </Card>
    // </Box>
    // </Card>
  );
}
