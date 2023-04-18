import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Movie {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  year: number;

  @Field()
  createdAt: Date;
}