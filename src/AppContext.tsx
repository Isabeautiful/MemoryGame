
import React, { useState, createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { Card, Player, Score } from './Types.tsx';

// Definir tipos para o contexto
interface AppContextType {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  turns: number;
  setTurns: Dispatch<SetStateAction<number>>;
  playerTurn: Player;
  setPlayerTurn: Dispatch<SetStateAction<Player>>;
  score: Score;
  setScore: Dispatch<SetStateAction<Score>>;
  choiceOne: Card | null;
  setChoiceOne: Dispatch<SetStateAction<Card | null>>;
  choiceTwo: Card | null;
  setChoiceTwo: Dispatch<SetStateAction<Card | null>>;
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0)
  const [playerTurn, setPlayerTurn] = useState<Player>(0) // Para alternar entre jogador 1 e 2
  const [score, setScore] = useState<Score>([0, 0]) // Para armazenar a pontuação dos jogadores
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState<boolean>(false)
  
  
  return (
    <AppContext.Provider value={{ 
      
      cards,
      setCards,
      turns,
      setTurns,
      playerTurn,
      setPlayerTurn,
      score,
      setScore,
      choiceOne,
      setChoiceOne,
      choiceTwo,
      setChoiceTwo,
      disabled,
      setDisabled,
      
    }}>

      {children}
    </AppContext.Provider>
  );
};