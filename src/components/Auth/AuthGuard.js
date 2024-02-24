import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUserData } from "../../store/SmsSlice";
import { setSession } from "../../utils/jwt";
import { FetchAppData } from "../pages/AppData";

// For routes that can only be accessed by authenticated team members
function AuthGuard({ children, params }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const setup = async () => {
    try {
      //   if (window.localStorage.getItem("accessToken")) {
      //     navigate("/dashboard"); // AUTH GUARD WILL VALIDATE THE JWT
      //   } else {
      // if (params.consumerUnitId) {

      const response = await axios.post(
        "http://app1backend.leadowsdev.in:9001/authenticate",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        const token = response.data.token;
        setSession(token);
        const appData =await FetchAppData();
        dispatch(setUserData({email:appData.email, unit_type:appData.unit_type}));

        navigate("/campaign");
      } else {
        window.location.href = "http://wl1.com:5000/login";
        return;
      }
      //   }
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    setup();
  }, []);
  return <>{children}</>;
}

export default AuthGuard;
