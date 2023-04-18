import { Field, InputType } from "type-graphql";

@InputType()
export class CreateMovieInput { 
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  year: number;
}