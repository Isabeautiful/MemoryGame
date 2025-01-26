import './GameInfo.css'

interface GameInfoProps {
    turns: number;
    playerTurn: number;
}

export default function GameOver({ turns, playerTurn}: GameInfoProps){
    if(playerTurn == 0){
        return(
            <div className="game-info">
                <p>Turn: {turns}</p>
                <p>Current Player: <span className="color-1">Player 1</span></p>
            </div>
        )
    }
    else{
        return(
            <div className="game-info">
                <p>Turnos: {turns}</p>
                <p>Current Player: <span className='color-2'>Player 2</span></p>
            </div>
        )
    }
    
}