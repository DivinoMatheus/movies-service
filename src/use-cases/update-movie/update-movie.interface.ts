import { Movie } from "@entities/Movie";
import { UpdateMovieInput } from "@entities/graphql/update-movie.input";

export interface UpdateMovieUseCase { 
  updateMovie: (movie: UpdateMovieInput) => Promise<Movie>
}