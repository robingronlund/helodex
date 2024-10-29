import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CurrentPageContextProps {
  currentPage: number;
  setCurrentPage: (id: number) => void;
}

const CurrentPageContext = createContext<CurrentPageContextProps | undefined>(
  undefined
);

export const CurrentPageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const value = React.useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage, setCurrentPage]
  );

  return (
    <CurrentPageContext.Provider value={value}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPage = (): CurrentPageContextProps => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error('useCurrentPage must be used within a CurrentPageProvider');
  }
  return context;
};
