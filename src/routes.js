import async from "./components/Async";

const Layout = async(() => import("./components/Layout"));
const SmsPage = async(() => import("./components/SmsConsolePage"));
const Logs = async(() => import("./components/pages/Logs"));
const Pricing = async(() => import("./components/pages/Pricing"));
const Charts = async(() => import("./components/pages/Charts"));
const Permissions = async(() =>import("./components/pages/Permissions"));
const Templates = async(() => import("./components/pages/Templates"));
const Dashboard = async(() => import("./components/pages/Dashboard"));
const AuthGuard = async(() => import("./components/Auth/AuthGuard"));
const routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "campaign",
        element: <Dashboard />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      ,
      {
        path: "permissions",
        element: <Permissions />,
      },
      {
        path: "templates",
        element: <Templates />,
      },
    ],
  },
];
export default routes;
