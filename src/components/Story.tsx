import './Story.css'

interface StoryProps {
    idParagraph: number;
}

export default function StoryProps({idParagraph}: StoryProps){
    if(idParagraph == 1){
        return (
            <div className="story-container">
                <p>Paragrafo de teste</p>
            </div>
        )
    }
    else if(idParagraph == 2){
        return(
            <div className="story-container">
                <p>Paragrafo 2 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 3){
        return(
            <div className="story-container">
                <p>Paragrafo 3 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 4){
        return(
            <div className="story-container">
                <p>Paragrafo 4 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 5){
        return(
            <div className="story-container">
                <p>Paragrafo 5 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 6){
        return(
            <div className="story-container">
                <p>Paragrafo 6 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 7){
        return(
            <div className="story-container">
                <p>Paragrafo 7 de teste</p>
            </div>
        )
    }
    else if(idParagraph == 8){
        return(
            <div className="story-container">
                <p>Paragrafo 8 de teste</p>
            </div>
        )
    }
    
    else
        return(null)
}