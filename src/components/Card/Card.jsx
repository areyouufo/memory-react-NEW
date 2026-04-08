
import './Card.css';

export default function Card({url, isVisible, isFinished, onCardClick, id}) {
    
    const handleClick = () => {
        onCardClick(id)
    }

    const classCard = `card ${isVisible ? 'card-show' : ''} ${isFinished ? "card-finish" : ''}`

    return (
      <div className={classCard} onClick={handleClick}>
         <img src={url} alt="ромашка" />
     </div>        
    )
}