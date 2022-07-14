import { Logger } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class Mutations {
  private readonly logger = new Logger("Mutations");

  @Mutation(() => Int, { nullable: true })
  async mutateDelayed(
    @Args({
      name: "duration",
      type: () => Int,
      description: "Delay duration in ms",
    })
    duration
  ) {
    await new Promise((resolve) => setTimeout(resolve, duration));

    this.logger.log(`Delayed mutation successful after ${duration}ms`);
    return null;
  }

  @Mutation(() => Int, { nullable: true })
  async mutate() {
    this.logger.log("Non delayed mutation successful");

    return null;
  }
}
