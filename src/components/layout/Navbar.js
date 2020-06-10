import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


//navigation bar
const Navbar = (props) => {
  const { auth } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/ProjectM' className="brand-logo">Project M</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}
//maps state to props function
export default connect(mapStateToProps)(Navbar)
