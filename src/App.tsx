import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import { AboutPageAsync } from './pages/AboutPage.async'
import { MainPageAsync } from './pages/MainPage.async'

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />}></Route>
          <Route path="/" element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
