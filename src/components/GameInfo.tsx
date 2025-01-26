import './GameInfo.css'

interface GameInfoProps {
    turns: number;
    playerTurn: number;
}

export default function GameOver({ turns, playerTurn}: GameInfoProps){
    if(playerTurn == 0){
        return(
            <div className="game-info">
                <p>Turnos: {turns}</p>
                <p>Jogador Atual: <span className="player-1">Jogador 1</span></p>
            </div>
        )
    }
    else{
        return(
            <div className="game-info">
                <p>Turnos: {turns}</p>
                <p>Jogador Atual: <span className='player-2'>Jogador 2</span></p>
            </div>
        )
    }
    
}