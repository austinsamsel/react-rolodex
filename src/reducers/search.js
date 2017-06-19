export default function searchReducer(state = { search_query: '' }, action) {
  if (action.type === 'QUERY') {
    return { 
      search_query: action.user_input 
    }
  }
  return state;
}
