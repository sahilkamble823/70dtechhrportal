import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/dashlite.css'
import './assets/css/theme.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
