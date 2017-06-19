import React from 'react'
import { connect } from 'react-redux'
import { FavoriteContact } from '../actions/contacts.js'
import FavoriteItem from '../components/FavoriteItem.js'

let FavoriteWrap = ({ dispatch, contact }) =>  {
  const favorite = (id) => {
    dispatch(FavoriteContact(id))
  }
  return (
    <FavoriteItem 
      contact={contact} 
      mark_as_favorite={favorite} 
    />
  )
}
FavoriteWrap = connect()(FavoriteWrap)

export default FavoriteWrap