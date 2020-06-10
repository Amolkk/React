import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
  render() {

    // console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
//if the user is not logged in redirect to sign in page
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l8">
            <ProjectList projects={projects} />
          </div>

        </div>

      </div>
    )
    //shows list of project by sending to this.props
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
