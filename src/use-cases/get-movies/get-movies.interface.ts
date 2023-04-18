import { Movie } from "@entities/Movie";

export interface GetMoviesUseCase { 
  getMovies: () => Promise<Movie[]>
}