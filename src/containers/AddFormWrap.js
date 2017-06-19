import React from 'react'
import { connect } from 'react-redux'
import { AddContact } from '../actions/contacts.js'
import AddForm from '../components/AddForm.js'

let AddFormWrap = ({ dispatch, contact }) =>  {
  const add_contact = (contact) => {
    dispatch(AddContact(contact))
  }
  return (
    <AddForm contact={contact} add_contact={add_contact} />
  )
}
AddFormWrap = connect()(AddFormWrap)

export default AddFormWrap