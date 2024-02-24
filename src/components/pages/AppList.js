import { Grid, Modal } from "@mui/material";
import React from "react";
import { ApplicationName } from "../../utils/Application";
import AppsListCard from "./AppListCard";
import { appServerPortNumberMapping } from "../../utils/localSetup";
import { appConfig } from "../../confing";

export default function AppsList({ openAppList, setOpenAppsList }) {
 
    
 const redirectToAppService = item => {
       
        if (!item.domain) {
            console.log("Invalid Sub Domain.");
            return null;
        }
 
        let protocol = "https";
        let portNumber = null;
        let appUrl = `${protocol}://${item.domain}.${appConfig.REACT_APP_BASE_DOMAIN_URL}`;
        if (window.location.protocol === "http:") {
            const localAppServerData = appServerPortNumberMapping(item.appName);
            if (localAppServerData) {
                protocol = "http";
                portNumber = `:${localAppServerData.PORT}`;
                appUrl = `${protocol}://${item.domain}.${appConfig.REACT_APP_BASE_DOMAIN_URL}${portNumber}`;
            }
        }
        console.log(appUrl,"appurl")
        window.open(appUrl, "_blank");
    };
 
 

      // const response = await axios.post("http://localhost:5000/application/login", loginDetails);
      // if (response.status === 200) {
      // //   console.log(response, "----------");
      //   window.open("/bots", "_blank");
      // } else if (response.status === 400) {
      //   alert("You do not have access to use BOT");
      // }
    

  return (
    <Modal
      style={{
        paddingTop: "50px",
        justifyContent: "end",
        display: "flex",
        height: "55%",
        marginRight: "20px",
      }}
      open={openAppList}
      onClose={() => setOpenAppsList(false)}
    >
      <Grid container className="app-list-grid-container">
        {ApplicationName.length > 0 &&
          ApplicationName.map((app, key) => (
            <Grid
              item
              key={key}
              md={4}
              className="app-list-grid"
              onClick={() => redirectToAppService(app)}
            >
              <AppsListCard app={app} />
            </Grid>
          ))}
      </Grid>
    </Modal>
  );
}
