import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="border-b flex items-center gap-8 mb-4 py-4">
      <Link className="text-xl text-blue-400 font-bold" to="/">
        Movies
      </Link>
      <Link className="text-xl text-blue-400 font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  )
}

export default Navbar
