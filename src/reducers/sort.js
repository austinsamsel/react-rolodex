import _ from 'lodash'

const initialState = {
  order: null
}

export default function sort(state = initialState, action){
  if (action.type === 'SORT_CONTACTS') {
    return _.assign({}, state, {
      order: !state.order
    })
  }
  return state
}