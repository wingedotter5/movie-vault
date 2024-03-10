import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
