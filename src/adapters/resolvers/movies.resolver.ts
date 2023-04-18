import { Service, Inject } from 'typedi'
import { Resolver, Query, Mutation, Arg} from 'type-graphql'
import { GetMoviesUseCase } from '@use-cases/get-movies/get-movies.interface'
import { Movie } from '@entities/Movie'
import { GetMoviesImpl } from '../../use-cases/get-movies/get-movies.impl'
import { CreateMovieInput } from '@entities/graphql/create-movie.input'
import { CreateMovieUseCase } from '@use-cases/create-movie/create-movie.interface'
import { CreateMovieImpl } from '@use-cases/create-movie/create-movie.impl'
import { UpdateMovieInput } from '@entities/graphql/update-movie.input'
import { UpdateMovieUseCase } from '@use-cases/update-movie/update-movie.interface'
import { UpdateMovieImpl } from '@use-cases/update-movie/update-movie.impl'
import { DeleteMovieImpl } from '@use-cases/delete-movie/delete-movie.impl'
import { DeleteMovieUseCase } from '@use-cases/delete-movie/delete-movie.interface'

@Service()
@Resolver(() => String)
export class MoviesResolver { 

  getMoviesUseCase: GetMoviesUseCase
  createMovieUseCase: CreateMovieUseCase
  updateMovieUseCase: UpdateMovieUseCase
  deleteMovieUseCase: DeleteMovieUseCase

  constructor(
    @Inject('usecases.getmovies') getMoviesUseCase: GetMoviesImpl,
    @Inject('usecases.createmovie') createMovieUseCase: CreateMovieImpl,
    @Inject('usecases.updatemovie') updateMovieUseCase: UpdateMovieImpl,
    @Inject('usecases.deletemovie') deleteMovieUseCase: DeleteMovieImpl,
  ) {
    this.getMoviesUseCase = getMoviesUseCase
    this.createMovieUseCase = createMovieUseCase
    this.updateMovieUseCase = updateMovieUseCase
    this.deleteMovieUseCase = deleteMovieUseCase
  }

  @Query(() => [Movie])
  async movies() {
    return this.getMoviesUseCase.getMovies()
  } 

  @Mutation(() => Movie)
  async createMovie(@Arg('data') data: CreateMovieInput) {
    return this.createMovieUseCase.createMovie(data)
  }

  @Mutation(() => Movie)
  async updateMovie(@Arg('data') data: UpdateMovieInput) { 
    return this.updateMovieUseCase.updateMovie(data)
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg('_id') _id: string) { 
    const succeeded = () => true
    const unsucceeded = () => false
    return this.deleteMovieUseCase.deleteMovie(_id).then(succeeded).catch(unsucceeded)
  }
}