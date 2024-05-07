import { useState } from 'react'
import MovieCard from './Component/Movie/MovieCard.jsx';
import moviesData from './Component/Movie/MovieData.jsx';
import './App.css';


const App = () => {
  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="head">Movie List</h1>
          <div className="grid grid-cols-1">
              {moviesData.map(movie => (
                  <div key={movie.id} className="mb-6">
                      <MovieCard
                          title={movie.title}
                          subtitle={movie.subtitle}
                          description={movie.description}
                          imageUrl={movie.imageUrl}
                          poster={movie.poster}
                          duration={movie.duration}
                          category={movie.category}
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};
export default App;
