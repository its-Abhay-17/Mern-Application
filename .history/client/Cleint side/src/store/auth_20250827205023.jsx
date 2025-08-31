import { useContext, useState, createContext, useEffect } from "react";
const AuthorizationToken = `Bearer ${token}`

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [userr, setuserr] = useState(null);
  const [Services, setServices] = useState([]);

  const storetokenIn = (serverToken) => {
    localStorage.setItem("token", serverToken);
    settoken(serverToken);
  };

  let isLoggedIn = !!token;
  console.log("Is logged In:", isLoggedIn);

  // Log out functionality
  const LogoutUser = () => {
    settoken("");
    localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION (auto-fill)
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken, 
        },
      });

      if (response.ok) {
        const Data = await response.json();
        console.log("user data:", Data.UserData);
        setuserr(Data.UserData);
      } else {
        console.error("Failed to fetch user data:", response.status);
      }
    } catch (error) {
      console.error("Error in userAuthentication:", error);
    }
  };

  // to fetch the services from backend
  const userServices = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("services data:", data);
        setServices(data.msg || []); 
      } else {
        console.error("Failed to fetch services:", response.status);
      }
    } catch (error) {
      console.error("Error in userServices:", error);
    }
  };

  // Run once on mount
  useEffect(() => {
    (async () => {
      try {
        await userServices();
        await userAuthentication();
      } catch (err) {
        console.error("AuthProvider crashed:", err);
      }
    })();
  }, []);

  return (
    <Authcontext.Provider
      value={{ isLoggedIn, storetokenIn, LogoutUser, userr, Services }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
