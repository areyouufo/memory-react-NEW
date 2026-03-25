import { Link } from "react-router-dom"
import images from "../data.json"
import Card from "./Card/Card"
export default function PageList() {
    return (
        <>
            <h2>список картинок</h2>
            {
                images.map((item) => (
                    <Link to={`/images/item/${item.id}`}> 
                       <Card url={item.url} key={item.id} />
                    </Link>
                ))
            }
        </>
    )


}