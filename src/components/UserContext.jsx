import React, { createContext, useContext, useState, useEffect } from "react";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../firebase";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
