import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, CssBaseline, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBarOptions } from "../utils/navBarOptions";
import Sidebar from "./sidebar/Sidebar";
import { Apps } from "@mui/icons-material";
import AppsList from "./pages/AppList";
import { useSelector } from "react-redux";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export default function Layout({ children }) {
  const theme = useTheme();
  const [openAppList, setOpenAppsList] = useState(false);
  const handleAppsOnClick = () => {
    setOpenAppsList(true);
  };
  const state = useSelector(store => store.smsSlice);
  return (
    <Root>
      <CssBaseline />
      <Grid container>
        <Box>
          <Sidebar
            PaperProps={{ style: { width: 100 } }}
            variant="temporary"
            open={false}
            onClose={() => {}}
            items={NavBarOptions}
            // isBotsScreen={true}
          />
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Sidebar
            PaperProps={{ style: { width: 100 } }}
            variant="temporary"
            open={false}
            onClose={() => {}}
            items={NavBarOptions}
            // isBotsScreen={true}
          />
        </Box>

        <Grid
          item
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <AppContent>
            <Grid
            sx={{height: "45px"}}
              pt={2}
              pl={3}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                }}
              >
                Welcome - {state.userData.email} - {state.userData.unit_type==="CONSUMER_UNIT"? "Consumer Unit": "Monitoring Unit"}
              </div>
              <Grid mr={5} sx={{display:"flex", alignItems:"center"}}>
                <IconButton onClick={handleAppsOnClick}>
                  <Apps style={{ color: "#706bf9"}} />
                </IconButton>
              </Grid>
            </Grid>
            {/* <Grid flex={1} overflow={"scroll"}> */}
              <Grid p={2} overflow={"auto"}>
                {children}
                <Outlet />
              </Grid>
            {/* </Grid> */}
            <Grid style={{ justifySelf: "flex-end" }}>{/* <Footer /> */}</Grid>
          </AppContent>
        </Grid>
      </Grid>
      {/* <SnackbarMessage /> */}
      {openAppList == true && (
        <AppsList setOpenAppsList={setOpenAppsList} openAppList={openAppList} />
      )}
    </Root>
  );
}
