import { Movie } from "@entities/Movie";
import { Inject, Service } from 'typedi'
import { GetMoviesUseCase } from "./get-movies.interface";
import { MovieRepositoryImpl } from "@frameworks/database/orms/movie/movie.repository.impl";
import { MovieRepository } from "@use-cases/interfaces/repositories/movie-repository";


@Service('usecases.getmovies')
export class GetMoviesImpl implements GetMoviesUseCase {
  movieRepository: MovieRepository

  constructor(
    @Inject('frameworks.database.orms.movierepository') movieRepository: MovieRepositoryImpl
  ) {
    this.movieRepository = movieRepository
  }

  async getMovies(): Promise<Movie[]> {
    return this.movieRepository.findAll()
  }; 
}