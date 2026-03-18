import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function PageMain() {
    return (
        <div>
            <Header />
            <main>
                <p>Правила игры:</p>
                <ol>
                    <li>Правило 1</li>
                    <li>Правило 2</li>
                    <li>Правило 3</li>
                </ol>
                <Link to="/game">Начать игру</Link>
            </main>
            <footer>
                <p>&copy; Рудова Лиза, 2026 г.</p>
            </footer>
        </div>
    );
}