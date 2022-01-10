import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from '@src/graphql/mutations'
import defaultCode from '@utils/defaultCode'

export default function updateCode(id, newCode) {
  async function autoSaveCode(id, code) {
    try {
      let updateDetails = { id: id, code: code, '_version': 1 }
      let result = await API.graphql(
        graphqlOperation(mutations.updateBox, { input: updateDetails })
      )
    } catch (error) {
      console.log('error autosaving code in updateCode', error)
    }
  }

  if (newCode !== defaultCode) {
    console.log('running autosave in updateCode')
    autoSaveCode(id, newCode)
  }
}
