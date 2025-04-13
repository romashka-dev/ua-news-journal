import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import './styles/index.scss'

import { AboutPageAsync } from './pages/AboutPage.async'
import { MainPageAsync } from './pages/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Button</button>
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
