import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AppContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
