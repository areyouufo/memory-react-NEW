import './Button.css'

export default function Button ({title, color = 'red'}){
    return (
        <button className={color}>
            {title}
        </button>
    )
}

