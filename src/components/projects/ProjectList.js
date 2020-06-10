import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
       //using map to store data in firestore
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            {/* Add a firebase genereated project ID at the end of the URL*/}
            <ProjectSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList
