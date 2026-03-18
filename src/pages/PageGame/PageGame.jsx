import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";

export default function PageGame() {
    return (
        <div className='container'>
            <Header />
            <main>
                <Button title='заказать' color='red' rounded='false' />
                <Button title="купить" />
                <Button title='Войти' color='blue' />
                <button>моя кнопка</button>
                <Grid />
            </main>
            <footer>
                <p>&copy; Рудова Лиза, 2026 г.</p>
            </footer>
        </div>
    )
}