import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Encrypt from './pages/Encrypt'
import Decrypt from './pages/Decrypt'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <div className=" bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/decrypt" element={<Decrypt />} />
        </Routes>
      </div>
    </Router>
  )
}