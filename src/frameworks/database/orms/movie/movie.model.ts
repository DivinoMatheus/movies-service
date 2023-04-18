import mongoose from 'mongoose'
import movieSchema from './movie.schema'
import { Movie } from '@entities/Movie'


export default mongoose.model<Movie>('Movie', movieSchema)