import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateMovieInput { 
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  year: number;
}