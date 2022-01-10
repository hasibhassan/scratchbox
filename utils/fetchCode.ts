import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '@src/graphql/queries'

export default function fetchCode(id) {
  let res

  async function getCode(username) {
    let result

    try {
      console.log('running fetchCode')

      result = await API.graphql(
        graphqlOperation(queries.getBox, { id: username })
      )

      console.log('result in fetchCode is; ', result)
    } catch {
      result = 'not found'
    }

    return result
  }

  res = getCode(id)

  res.then((data) => {
    res = data.getBox?.code

    console.log('the return value in fetchCode is;', res)
  })

  if (res) {
    return res
  } else {
    return 'not found'
  }
}
