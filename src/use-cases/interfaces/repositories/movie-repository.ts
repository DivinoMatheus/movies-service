import { Movie } from "@entities/Movie";
import { CreateMovieInput } from "@entities/graphql/create-movie.input";
import { UpdateMovieInput } from "@entities/graphql/update-movie.input";

export interface MovieRepository {
  create: (movie: CreateMovieInput) => Promise<Movie>
  update: (movie: UpdateMovieInput) => Promise<Movie>
  delete: (_id: string) => Promise<void>
  findAll: () => Promise<Movie[]>
}