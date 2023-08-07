// write the connect provider using react conetext api which stores the state of the user and access tokens
"use client";

import React, { createContext, useState } from "react";

export const ConnectContext = createContext();

export const ConnectProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [userAccessTokensData, setUserAccessTokensData] = useState("");

  const setUserTokensData = (accessTokenData) => {
    setIsConnected(true);
    setUserAccessTokensData(accessTokenData);
  };

  const removeUserTokensData = () => {
    setIsConnected(false);
    setUserAccessTokensData("");
  };

  return (
    <ConnectContext.Provider
      value={{
        isConnected,
        userAccessTokensData,
        setUserTokensData,
        removeUserTokensData,
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};
