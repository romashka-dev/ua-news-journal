import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { useTheme } from 'app/providers/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Button</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
