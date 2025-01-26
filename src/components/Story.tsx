import './Story.css'
import './GameInfo.css'

interface StoryProps {
    idParagraph: number;
    playerTurn: number;
}

export default function StoryProps({idParagraph, playerTurn}: StoryProps){
    console.log(playerTurn)
    if(idParagraph == 1){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 2){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 2 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 2 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 3){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 3 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 3 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 4){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 4 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 4 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 5){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 5 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 5 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 6){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 6 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 6 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 7){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 7 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 7 de teste</p>
                </div>
            )
        }
    }
    else if(idParagraph == 8){
        if(playerTurn == 0){
            return (
                <div className="story-container">
                    <p className='player-1 color-1'>Paragrafo 8 de teste</p>
                </div>
            )
        }
        else{
            return (
                <div className="story-container">
                    <p className='player-2 color-2'>Paragrafo 8 de teste</p>
                </div>
            )
        }
    }
    
    else
        return(null)
}