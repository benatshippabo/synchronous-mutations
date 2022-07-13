import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class Queries {
  @Query(() => String)
  async hello() {
    return "hello world";
  }
}
