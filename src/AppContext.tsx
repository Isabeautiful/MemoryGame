
import React, { useState, createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { Card, Player, Score, Posic, Mode } from './Types.tsx';

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

  indexToPosic: (index: Posic) => Posic,
  lerp: (start: Posic, end: Posic, t: number) => Posic,
  randomCard: (cards: Card[]) => Card,
  newGame: () => void,
  handleChoice: (card: Card) => void,
  resetTurn: (isMatch: boolean) => void,

  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
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
  const [mode, setMode] = useState<Mode>(Mode.NORMAL);


  const createCard = (name: string): Card => {
    return { name: name, matched: false, id: -1, posic: [0, 0] };
  }
  
  const cardStock: Card[] = [
  
    createCard("bandeira"),
    createCard("bau-tesouro"),
    createCard("bussola"),
    createCard("chapeu"),
    createCard("moeda"),
    createCard("rum"),
    createCard("roda-barco"),
    createCard("bomba"),
    createCard("gancho")
  ]
  
  // ============= Moving =============
  
  const bubbleDimensions = [3, 6];
  
  const indexToPosic = (index: Posic): Posic => {
  
      /* Converte um índice de linha e coluna em uma posição baseada em porcentagem*/
  
      return [
        (100 * index[0]) / bubbleDimensions[0],
        (100 * index[1]) / bubbleDimensions[1]
      ];
  }

  const lerp = (start: Posic, end: Posic, t: number): Posic => {
  
    /* Calcula uma posição intermediária entre dois pontos de acordo com um coeficiente t */
  
    return [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t
    ];
  }
  

  
  const randomCard = (cards: Card[]): Card => {
  
    /* Dado um array de cartas retorna uma carta aleatória */
  
    const length = cards.length;
    const index = Math.floor(Math.random() * length);
  
    return cards[index];
  }

  const newGame = () => {
    
    // Função para embaralhar as cartas e resetar o estado do jogo

    //embaralha as cartas
		const cardStockCopy1 = cardStock.map(card => createCard(card.name))
		const cardStockCopy2 = cardStock.map(card => createCard(card.name))
    const shuffledCards = [...cardStockCopy1, ...cardStockCopy2].sort(() => Math.random() - 0.5);

		// Definir ids únicos
		let id = 0;
		for (let card of shuffledCards)
			card.id = id++;

        // Definir a posição de cada um em um "grade" de posições
		for (let card of shuffledCards) {

            // Convertendo id em coluna e linha
			const column = card.id % bubbleDimensions[0];
			const row = Math.floor(card.id / bubbleDimensions[0]);
            
            // Definindo posição em porcentagens, de acordo com coluna e linha (será usado dentro de "SingleCard")
			card.posic = indexToPosic([column, row]);
		}

    // Resetando as variáveis de estado para começar um novo jogo
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setPlayerTurn(0) // Jogador 1 começa após cada novo jogo
    setScore([0, 0]) // Resetando a pontuação dos jogadores
  }

  const handleChoice = (card: Card) => {
    
    //Seleção de Cartas nas variaveis de estado choice one ou two

    if (card.id === choiceOne?.id) return; //tratamento de erro
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = (isMatch: boolean) => {
    
    // reseta o turno

    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)

    // Alterna o jogador apenas se o jogador errar
    if (!isMatch) {
      setPlayerTurn(prev => (prev === 0 ? 1 : 0))
    }
  }
  
  
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
      indexToPosic,
      lerp,
      randomCard,
      newGame,
      handleChoice,
      resetTurn,

      mode,
      setMode
      
    }}>

      {children}
    </AppContext.Provider>
  );
};