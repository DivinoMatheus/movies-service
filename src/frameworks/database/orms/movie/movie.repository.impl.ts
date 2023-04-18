import { Movie } from '@entities/Movie'
import MovieModel from './movie.model'
import { MovieRepository } from '@use-cases/interfaces/repositories/movie-repository'
import { Service } from 'typedi'
import { UpdateMovieInput } from '@entities/graphql/update-movie.input'
import { CreateMovieInput } from '@entities/graphql/create-movie.input'

@Service('frameworks.database.orms.movierepository')
export class MovieRepositoryImpl implements MovieRepository { 
  async create(movie: CreateMovieInput): Promise<Movie> {
    console.info('[database.movierepository] creating a movie...', movie)
    return new MovieModel(movie).save()
  }

  async update({ _id, ...movie }: UpdateMovieInput): Promise<Movie> {
    console.info('[database.movierepository] updating a movie...', { _id, ...movie })
    return MovieModel.findOneAndUpdate({ _id }, { ...movie }) as unknown as Movie
  }

  async findAll(): Promise<Movie[]>{
    console.info('[database.movierepository] finding all movies...')
    return await MovieModel.find()
  }

  async delete(_id: string) {
    console.info('[database.movierepository] deleting a movie by id...', _id)
    await MovieModel.deleteOne({ _id })
  }
}