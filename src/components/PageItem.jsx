import images from "../data.json"
import { useParams } from "react-router-dom";

export default function PageItem()
{
    const param = useParams()
    const image = images[param.id];
    return(
        <>
            <img className="item_img" src={image.url} alt="" />
        </>
    );
}