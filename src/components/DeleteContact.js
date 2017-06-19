import React from 'react'

export default ({delete_contact, id}) =>  {
  return(
    <span 
      onClick={ e => {
        delete_contact(id)
      }}
      style={{
        fontSize:'small', 
        color: 'gray',
        cursor:'default'
      }}
    >
    <span role='img' aria-label='trash'>🗑</span> <span role='img' aria-label='sparkles'>✨</span> <span role='img' aria-label='rainbow'>🌈</span>
    </span>
  )
}