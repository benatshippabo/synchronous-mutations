# synchronous-mutations

## Description

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
