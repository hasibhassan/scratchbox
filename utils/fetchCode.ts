import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '@src/graphql/queries'

export default async function fetchCode(id) {
  let result = await API.graphql(graphqlOperation(queries.getBox, { id }))
  result = await result?.data?.getBox?.code

  return result
}
