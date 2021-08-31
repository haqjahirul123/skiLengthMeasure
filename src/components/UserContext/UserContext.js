import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { length: '100', age_group1: '4' }
   
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
