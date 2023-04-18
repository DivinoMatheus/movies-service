import { Movie } from "@entities/Movie";
import { Inject, Service } from 'typedi'
import { UpdateMovieUseCase } from "./update-movie.interface";
import { MovieRepository } from "@use-cases/interfaces/repositories/movie-repository";
import { MovieRepositoryImpl } from "@frameworks/database/orms/movie/movie.repository.impl";
import { UpdateMovieInput } from "@entities/graphql/update-movie.input";


@Service('usecases.updatemovie')
export class UpdateMovieImpl implements UpdateMovieUseCase {

  movieRepository: MovieRepository

  constructor(
    @Inject('frameworks.database.orms.movierepository') movieRepository: MovieRepositoryImpl
  ) {
    this.movieRepository = movieRepository
  }

  async updateMovie(movie: UpdateMovieInput): Promise<Movie> {
    return this.movieRepository.update(movie)
  }; 
}