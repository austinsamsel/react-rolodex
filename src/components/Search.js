import React from 'react'

export default ({search_query, search_input_value}) =>  {
  return(
    <form>
      <input 
        onChange={ e => {
          search_query(e.target.value)
        }}
        type="text"
        placeholder="🔎 Search Contacts"
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          border: '1px solid aquamarine',
        }}
      />
    </form>
  )
}