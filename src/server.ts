import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { MoviesResolver } from './adapters/resolvers/movies.resolver'
import { Container } from 'typedi'
import path from 'node:path'
import database from '@frameworks/database'

async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [
			MoviesResolver
		],
		container: Container,
		emitSchemaFile: path.resolve(__dirname, 'schema.gql')
	})

	const server = new ApolloServer({
		schema
	})
	
	server.listen().then(({ url }) => { 
		console.log(`[server] HTTP server is running on ${url}`)
	})
}

bootstrap()
database.connect()