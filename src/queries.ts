import { Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class Queries {
  private readonly logger = new Logger('Queries');

  @Query(() => String)
  async hello() {
    this.logger.log('Non delayed query successful');

    return 'hello world';
  }

  @Query(() => String)
  async helloDelayed(
    @Args({
      name: 'duration',
      type: () => Number,
      description: 'Delay duration in ms',
    })
    duration: number
  ) {
    await new Promise((resolve) => setTimeout(resolve, duration));

    this.logger.log(`Delayed query successful after ${duration}ms`);
    return 'hello world';
  }
}
