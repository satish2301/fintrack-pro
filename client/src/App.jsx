
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './Layout/Layout'
import WebRoutes from './routes'
import Transaction from './pages/Transaction'
function App() {


  return (
    <Router>
      <Routes>
        <Route path={WebRoutes.LOGIN} element={<Login />} />
        <Route path={WebRoutes.REGISTER} element={<Register />} />

        <Route path={WebRoutes.LOGIN} element={<Layout />}>
          <Route path={WebRoutes.DASHBOARD} element={<Dashboard />} />
          <Route path={WebRoutes.TRANSACTION} element={<Transaction/>} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
