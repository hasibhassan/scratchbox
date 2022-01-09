import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '@src/graphql/queries'

export default function fetchCode(id) {
  let res

  async function getCode() {
    let result = await API.graphql(graphqlOperation(queries.getBox, { id: id }))

    return result
  }

  try {
    res = getCode()
  } catch {
    res = 'error'
  }

  return res
}
