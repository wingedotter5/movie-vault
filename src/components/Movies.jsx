import MovieCard from './MovieCard'

const Movies = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-8">Trending Movies</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <MovieCard />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Movies
