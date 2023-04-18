import { Movie } from "@entities/Movie";
import { Inject, Service } from 'typedi'
import { CreateMovieUseCase } from "./create-movie.interface";
import { MovieRepository } from "@use-cases/interfaces/repositories/movie-repository";
import { MovieRepositoryImpl } from "@frameworks/database/orms/movie/movie.repository.impl";
import { CreateMovieInput } from "@entities/graphql/create-movie.input";


@Service('usecases.createmovie')
export class CreateMovieImpl implements CreateMovieUseCase {

  movieRepository: MovieRepository

  constructor(
    @Inject('frameworks.database.orms.movierepository') movieRepository: MovieRepositoryImpl
  ) {
    this.movieRepository = movieRepository
  }

  async createMovie(movie: CreateMovieInput): Promise<Movie> {
    return this.movieRepository.create(movie)
  }; 
}