import Card from '../Card/Card'
import './Grid.css'
import data from '../../data.json'

export default function Grid() {

    return (
        <div className='grid'>
            {
                data.map((item)=>(
                    <Card url={item.url} key={item.id}/>
                ))
            }
        </div>
    )
}