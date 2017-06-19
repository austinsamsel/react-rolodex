import React from 'react'

export default ({contact, mark_as_favorite}) =>  {
  return(
    <span 
      onClick={ e => {
        e.preventDefault()
        mark_as_favorite(contact.id)
      }}
      style={{cursor:'default'}}
    >
      {contact.favorite 
        ? (
            <span role="img" aria-label="heart">
              ❤️
            </span>
          ) 
        : (
            <span style={{opacity: '0.3'}} role="img" aria-label="faded heart">
              ❤️
            </span>
          ) 
        }  
    </span>
  )
}