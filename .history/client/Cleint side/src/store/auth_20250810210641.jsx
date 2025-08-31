import { useContext, useState, createContext, useEffect } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [userAuth, setuserAuth] = useState(null);

  const storetokenIn = (serverToken) => {
    settoken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    settoken("");
    localStorage.removeItem("token");
    setuserAuth(null);
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ fixed
        },
      });

      if (response.ok) {
        const data = await response.json();
        setuserAuth(data.userData);
      } else {
        setuserAuth(null);
      }
    } catch (error) {
      console.log(error, "This error from jwt token");
      setuserAuth(null);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <Authcontext.Provider value={{ isLoggedIn, storetokenIn, LogoutUser, userAuth }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
