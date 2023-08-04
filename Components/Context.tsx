/* eslint-disable prettier/prettier */
import React, {useState, createContext, ReactNode} from 'react';
import {Data} from './Data';

export interface User {
  Id: number;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  Status: string;
  Photo: string;
}

interface UserContextType {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User[]>>;
}

interface ContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext<UserContextType | null>(null);

const Context: React.FC<ContextProps> = ({children}) => {
  const [data, setData] = useState<User[]>(Data);
  const contextValue: UserContextType = {data, setData};

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
