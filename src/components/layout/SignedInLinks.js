import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

//Entire packets of links that need to be showed when signed in
const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">AK</NavLink></li>
      </ul>
    </div>
  )
}
//Mappping dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
    //makes sign out invisible
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
