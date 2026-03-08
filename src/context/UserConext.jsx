import React, { createContext } from "react";
import userData from "../UserData.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => (
  <UserContext.Provider value={userData}>
    {children}
  </UserContext.Provider>
);