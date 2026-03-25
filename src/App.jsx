import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './components/Button/Button'
import Grid from './components/Grid/Grid'
import PageMain from './pages/PageMain/PageMain'
import PageGame from './pages/PageGame/PageGame'
import Page404 from './pages/Page404/Page404'
import PageImages from './pages/PageImages/PageImages'
import PageList from './components/PageList'
import PageItem from './components/PageItem'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/game" element={<PageGame />} />
        <Route path='/images' element={<PageImages />} >
            <Route path='list' element={<PageList />} />
            <Route path='item/:id' element={<PageItem />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
