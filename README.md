<p align="center">
  <a href="https://github.com/benatshippabo/synchronous-mutations/actions/workflows/ci.yml">
    <img alt="dotfiles status" src="https://github.com/benatshippabo/synchronous-mutations/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
</p>

# synchronous-mutations

This is a minimal example to verify synchronous mutation execution. We can test this using the NestJS playground:

http://localhost:3000/graphql

Given this mutation:

```gql
mutation Test {
  mutateDelayed(duration: 5000)
  mutate
}
```

We can expect `mutateDelayed` to finish execution before `mutate` beyond reasonable doubt. This is within expectations based on [the documentation between the differences between GraphQL queries and mutations beyond semantics.](https://graphql.org/learn/queries/#multiple-fields-in-mutations)

```log
[Nest] 48600  - 07/13/2022, 4:33:27 PM     LOG [Mutations] Delayed mutation successful after 5000ms
[Nest] 48600  - 07/13/2022, 4:33:27 PM     LOG [Mutations] Non delayed mutation successful
```

This is in contrast to when we perform a query using:

```gql
query Test {
  helloDelayed(duration: 5000)
  hello
}
```

Where the execution order is asynchronous and `hello` is executed while we are waiting for `helloDelayed` to resolve:

```log
[Nest] 19396  - 07/14/2022, 11:12:22 AM     LOG [Queries] Non delayed query successful
[Nest] 19396  - 07/14/2022, 11:12:27 AM     LOG [Queries] Delayed query successful after 5000ms
```
