import React from 'react'
import { connect } from 'react-redux'
import { SortContacts } from '../actions/sort.js'
import SortButton from '../components/SortButton.js'

let SortWrap = ({ dispatch, order }) =>  {
  const sort = () => {
    dispatch(SortContacts())
  }
  return (
    <SortButton sort={sort} order={order} />
  )
}
SortWrap = connect(mapStateToProps)(SortWrap)

export default SortWrap

function mapStateToProps(state) {
  return {
    order: state.sort.order
  }
}