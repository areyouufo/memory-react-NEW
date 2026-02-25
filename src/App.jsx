import './App.css'
import Button from './components/Button/Button'
import Grid from './components/Grid/Grid'


function App() {
  return (
    <div className='container'>
      <header>
        <h1>Игра мемори</h1>
      </header>
      <main>
        контент

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

export default App
