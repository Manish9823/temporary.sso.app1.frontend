import { Android, MarkUnreadChatAlt, RepeatOne, SmartToy, Sms, SupportAgent, WhatsApp } from "@mui/icons-material";
 
export const ApplicationName = [
  {
    appName: "SMS",
    iconProvider: "mui",
    icon: Sms,
    PORT:9000,
    domain:"sms"
  },
  {
    appName: "WhatsApp",
    iconProvider: "mui",
    icon:WhatsApp,
    PORT:9002,
    domain:"whatsapp"
  },
 
  {
    appName: "Bots",
    iconProvider: "mui",
    icon: SmartToy,
    url: "/",
  },
 
  {
    appName: "Processes",
    iconProvider: "mui",
    icon: Android,
    url: "/",
  },
 
  {
    appName: "URl Shortner",
    iconProvider: "mui",
    icon: RepeatOne,
    url: "/",
  },
 
  {
    appName: "Live Agent",
    iconProvider: "mui",
    icon: SupportAgent,
    url: "/",
  },
 
  {
    appName: "Integration",
    iconProvider: "mui",
    icon: MarkUnreadChatAlt,
    url: "/",
  },
 
  {
    appName: "Analytics",
    iconProvider: "mui",
    icon: Sms,
    url: "/",
  },
  {
    appName: "RCS",
    iconProvider: "mui",
    icon: Sms,
    url: "/",
  },
];



 