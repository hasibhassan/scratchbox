/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
