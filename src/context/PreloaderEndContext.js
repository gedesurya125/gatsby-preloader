import React from 'react';

const PreloadEnd = React.createContext();

export const usePreloaderEnd = () => React.useContext(PreloadEnd);

export const PreloaderEndProvider = ({ children }) => {
  const [isPreloaderEnd, setIsPreloaderEnd] = React.useState(false);
  return (
    <PreloadEnd.Provider value={{ isPreloaderEnd, setIsPreloaderEnd }}>
      {children}
    </PreloadEnd.Provider>
  );
};
