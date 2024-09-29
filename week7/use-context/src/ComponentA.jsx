import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("BroCode");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}
