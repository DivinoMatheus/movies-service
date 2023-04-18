import { Movie } from "@entities/Movie";
import { CreateMovieInput } from "@entities/graphql/create-movie.input";

export interface CreateMovieUseCase { 
  createMovie: (movie: CreateMovieInput) => Promise<Movie>
}