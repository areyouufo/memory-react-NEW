import { useState } from 'react';
import './Card.css';

export default function Card({url}) {
    
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    const classCard = `card ${isVisible ? 'card-show' : ''}`
    return (
      <div className={classCard} onClick={handleClick}>
         <img src={url} alt="ромашка" />
     </div>        
    )
}