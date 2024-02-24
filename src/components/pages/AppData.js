import { useTheme } from "@emotion/react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchAppData = async () => {
  // const [appData, setAppData] = useState(null);
  // const dispatch = useDispatch();
  try {
    // debugger;
    const token = window.localStorage.getItem("accessToken");
    console.log(token);
    const appData = await axios.get("http://smsbackend.leadowsdev.in:9001/app/get", {
      withCredentials: true,
    });
    if (appData.status === 200) {
      console.log(appData, ";;;;;");
      // setAppData(appData.data.data);
      return appData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

function AppData() {
  const theme = useTheme();
  const [appData, setAppData] = useState(null);

  const getData = async () => {
    // debugger;
    const app = await FetchAppData();
    setAppData(app.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid mt={2}>
      {/* <Typography>Modules And Features </Typography> */}
      <Grid display={"flex"} gap={4} mt={1}>
        <Grid
          item
          md={5}
          border={1}
          borderColor={theme.palette.primary.main}
          p={1}
        >
          <Typography
            fontWeight={"500"}
            textAlign={"start"}
            color={"primary"}
            fontSize={"1.2rem"}
          >
            For this CU
          </Typography>
          <Divider />
          <Grid container mt={1} justifyContent={"space-between"}>
            <Grid item md={7}>
              <Typography> Modules</Typography>
              {appData &&
                appData.modules &&
                appData.modules.map((item, index) => (
                  <Grid
                    key={`${item._id}-${index}-cu`}
                    display={"flex"}
                    alignItems={"center"}
                    gap={3}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                    <FormGroup row sx={{ gap: "10px" }}>
                      <FormControlLabel
                        title="Read"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForCU
                            ? item.moduleForCU.read
                              ? item.moduleForCU.read
                              : false
                            : false
                        }
                        label={"R"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForCU", 'read');
                        }}
                      />
                      <FormControlLabel
                        title="Write"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForCU
                            ? item.moduleForCU.write
                              ? item.moduleForCU.write
                              : false
                            : false
                        }
                        label={"W"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForCU", 'write');
                        }}
                      />
                      <FormControlLabel
                        title="Update"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForCU
                            ? item.moduleForCU.update
                              ? item.moduleForCU.update
                              : false
                            : false
                        }
                        label={"U"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForCU", 'update');
                        }}
                      />
                      <FormControlLabel
                        title="Delete"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForCU
                            ? item.moduleForCU.delete
                              ? item.moduleForCU.delete
                              : false
                            : false
                        }
                        label={"D"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForCU", 'delete');
                        }}
                      />
                    </FormGroup>
                  </Grid>
                ))}
            </Grid>
            <Grid item md={5}>
              <Typography> Features</Typography>
              {appData &&
                appData.features &&
                appData.features.map((item, index) => (
                  <Grid
                    key={`${item._id}-${index}-cu`}
                    display={"flex"}
                    alignItems={"center"}
                    gap={3}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                    <RadioGroup
                      row
                      value={
                        item.featureForCU
                          ? item.featureForCU.active
                            ? item.featureForCU.active
                            : false
                          : false
                      }
                      onChange={(e) => {
                        // onHandleForFeatureCheck(e, item.id, "featureForCU");
                      }}
                      sx={{ gap: "10px" }}
                    >
                      <FormControlLabel
                        sx={{ margin: 0 }}
                        value={true}
                        control={<Radio size="small" />}
                        label="On"
                      />
                      <FormControlLabel
                        sx={{ margin: 0 }}
                        value={false}
                        control={<Radio size="small" />}
                        label="Off"
                      />
                    </RadioGroup>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={5}
          border={1}
          borderColor={theme.palette.primary.main}
          p={1}
        >
          <Typography
            fontWeight={"500"}
            textAlign={"start"}
            color={"primary"}
            fontSize={"1.2rem"}
          >
            For MU of this CU
          </Typography>
          <Divider />
          <Grid container mt={1} justifyContent={"space-around"}>
            <Grid item md={7}>
              <Typography> Modules</Typography>
              {appData &&
                appData.modules &&
                appData.modules.map((item, index) => (
                  <Grid
                    key={`${item._id}-${index}-mu`}
                    display={"flex"}
                    alignItems={"center"}
                    gap={3}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                    <FormGroup row sx={{ gap: "10px" }}>
                      <FormControlLabel
                        title="Read"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForMU
                            ? item.moduleForMU.read
                              ? item.moduleForMU.read
                              : false
                            : false
                        }
                        label={"R"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForMU", 'read');
                        }}
                      />
                      <FormControlLabel
                        title="Write"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForMU
                            ? item.moduleForMU.write
                              ? item.moduleForMU.write
                              : false
                            : false
                        }
                        label={"W"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForMU", 'write');
                        }}
                      />
                      <FormControlLabel
                        title="Update"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForMU
                            ? item.moduleForMU.update
                              ? item.moduleForMU.update
                              : false
                            : false
                        }
                        label={"U"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForMU", 'update');
                        }}
                      />
                      <FormControlLabel
                        title="Delete"
                        sx={{ margin: 0 }}
                        control={<Checkbox size="small" />}
                        checked={
                          item.moduleForMU
                            ? item.moduleForMU.delete
                              ? item.moduleForMU.delete
                              : false
                            : false
                        }
                        label={"D"}
                        onChange={(e) => {
                          // onHandleForModuleCheck(e, item.id, "moduleForMU", 'delete');
                        }}
                      />
                    </FormGroup>
                  </Grid>
                ))}
            </Grid>
            <Grid item md={5}>
              <Typography> Features</Typography>
              {appData &&
                appData.features &&
                appData.features.map((item, index) => (
                  <Grid
                    key={`${item._id}-${index}-mu`}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                    <RadioGroup
                      row
                      value={
                        item.featureForMU
                          ? item.featureForMU.active
                            ? item.featureForMU.active
                            : false
                          : false
                      }
                      onChange={(e) => {
                        // onHandleForFeatureCheck(e, item.id, "featureForMU");
                      }}
                      sx={{ gap: "10px" }}
                    >
                      <FormControlLabel
                        sx={{ margin: 0 }}
                        value={true}
                        control={<Radio size="small" />}
                        label="On"
                      />
                      <FormControlLabel
                        sx={{ margin: 0 }}
                        value={false}
                        control={<Radio size="small" />}
                        label="Off"
                      />
                    </RadioGroup>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppData;
