/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
      id
      code
      createdAt
      updatedAt
    }
  }
`;
export const listBoxes = /* GraphQL */ `
  query ListBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
