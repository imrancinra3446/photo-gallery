import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  console.log(state);
  return {
  }
}
const Contact = () => {
  return (
    <div>
      Contact
    </div>
  )
}

export default connect(mapStateToProps)(Contact);
