import { createContext, useContext, type PropsWithChildren } from 'react';

const AocDataContext = createContext(undefined);

type AocDataProviderProps = {
  value: any;
} & PropsWithChildren;

export const AocDataProvider = ({ children, value }: AocDataProviderProps) => {
  return (
    <AocDataContext.Provider value={value}>{children}</AocDataContext.Provider>
  );
};

export const useAocDataContext = () => {
  const context = useContext(AocDataContext);
  if (context === undefined) {
    throw new Error('useAocDataContext must be used within an AocDataProvider');
  }
  return context;
};
