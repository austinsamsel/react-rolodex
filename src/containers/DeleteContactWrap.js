import React from 'react'
import { connect } from 'react-redux'
import { Delete } from '../actions/contacts.js'
import DeleteContact from '../components/DeleteContact.js'

let DeleteContactWrap = ({ dispatch, id }) =>  {
  const delete_contact = (id) => {
    dispatch(Delete(id))
  }
  return (
    <DeleteContact id={id} delete_contact={delete_contact} />
  )
}
DeleteContactWrap = connect()(DeleteContactWrap)

export default DeleteContactWrap