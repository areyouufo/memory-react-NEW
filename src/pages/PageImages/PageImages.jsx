import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function PageImages() {
    return (
        <>
            <Header />
            <div className="sub-menu">
                <ul>
                    <li>
                        <Link to="list">список</Link>
                    </li>
                    <li>
                        <Link to="item">картинка</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}