// src/context/GlobalStateContext.jsx
import React, { createContext, useState, useContext } from 'react';

interface GlobalState {
    apiUrl: string
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

interface childrenProps {
    children: React.ReactNode;
}

// 2. Create a provider component
export const GlobalStateProvider = ({ children }: childrenProps, apiUrlProp: string) => {
    const [apiUrl, setApiUrl] = useState(apiUrlProp);
    const value : GlobalState = {
        apiUrl,
    };
    return (
        <GlobalStateContext.Provider value={value}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// 3. Custom hook for easy access
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};