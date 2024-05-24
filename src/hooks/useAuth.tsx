import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/check`, {
          withCredentials: true,
        });
        setLoggedIn(response.data.loggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return loggedIn;
};
