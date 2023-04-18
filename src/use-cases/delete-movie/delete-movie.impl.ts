import { Inject, Service } from 'typedi'
import { DeleteMovieUseCase } from "./delete-movie.interface";
import { MovieRepository } from "@use-cases/interfaces/repositories/movie-repository";
import { MovieRepositoryImpl } from "@frameworks/database/orms/movie/movie.repository.impl";


@Service('usecases.deletemovie')
export class DeleteMovieImpl implements DeleteMovieUseCase {

  movieRepository: MovieRepository

  constructor(
    @Inject('frameworks.database.orms.movierepository') movieRepository: MovieRepositoryImpl
  ) {
    this.movieRepository = movieRepository
  }

  async deleteMovie(_id: string): Promise<void> {
    await this.movieRepository.delete(_id)
  }; 
}