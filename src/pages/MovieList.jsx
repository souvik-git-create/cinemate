import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const[movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7c2969f73a68e73f60cbc7b7da7ba1a7");
      const data = await response.json();
      setMovies(data.results)
    }
    fetchMovies();
  }, [movies])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap md:gap-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
