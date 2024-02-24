import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Typography,
} from "@mui/material";
import React from "react";
// import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router";
import { NavBarOptions } from "../../utils/navBarOptions";
import SidebarProfile from "./SidebarProfile";

const Drawer = styled(MuiDrawer)`
  border-right: 0;
  > div {
    border-right: 0;
  }
`;

const Sidebar = ({ items }) => {
  const navigate = useNavigate();
  // const state = useSelector(store => store.pyramidStore);
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const theme = useTheme();
  console.log(items);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "16vw",
        height: "100%",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "16vw",
          boxSizing: "border-box",
          background: theme.palette.primary.main,
        },
        background: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
      }}
      direction={"column"}
    >
      <Grid paddingX={2} mt={2}>
        <Grid display={"flex"} alignItems={"center"} gap={2}>
          <Grid style={{ fontSize: "2rem", color: "white" }} mt={1}>
            {/* {state.loginData.registry_name} */}
            SMS
          </Grid>
        </Grid>
      </Grid>
      <Grid flex={1} overflow={"auto"} mt={3}>
        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{ backgroundColor: "white" }}
        />
        <Grid flex={1} overflow={'auto'} >
        <List className="mt-1 " sx={{padding:"8px", marginTop:"4px"}} >
          {items.map((item, index) => (
            <>
              <Card
                className="mb-2"
                style={{
                  boxShadow: "none",
                  fontWeight: 600,
                  backgroundColor:
                    item.route === currentPath ? "#8b87ff" : "#706bf9",
                  color: item.route === currentPath ? "white" : "#fff",
                  borderRadius: item.route === currentPath ? "15px" : "none",
                  marginBottom:"5px"
                //   margin: item.route === currentPath ? "8px" : "none",
                }}
                key={index}
              >
                <ListItem
                  className="mt-2 mb-2 poppins-regular"
                  selected={item.route === currentPath}
                  key={item.name}
                  onClick={() => {
                    navigate(`${item.route}`);
                  }}
                  sx={{paddingX:"0px",paddingY:"8px"}}
                >
                  <ListItemButton >
                    <item.icon style={{marginRight:"5px"}}/>

                    <ListItemText
                      className="ml-2 poppins-regular"
                      primary={item.name}
                    />
                  </ListItemButton>
                </ListItem>
              </Card>
            </>
          ))}
        </List>
        </Grid>
      </Grid>

      <Grid ml={1}>
        <SidebarProfile />
      </Grid>
    </Drawer>
  );
};

export default Sidebar;
