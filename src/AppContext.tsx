
import React, { useState, createContext, ReactNode } from "react";
import { Card } from './Types.tsx';

// Definir tipos para o contexto
interface AppContextType {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface AppProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [cards, setCards] = useState<Card[]>([]);
  
  return (
    <AppContext.Provider value={{ cards, setCards }}>
      {children}
    </AppContext.Provider>
  );
};