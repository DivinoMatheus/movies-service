export interface DeleteMovieUseCase { 
  deleteMovie: (_id: string) => Promise<void>
}