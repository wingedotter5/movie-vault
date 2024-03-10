import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Layout from './pages/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
