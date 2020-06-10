import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by Amol Kakkar</p>
        <p className="grey-text">May 9, 2020</p>
      </div>
    </div>
  )
}
//needs to be dynamic make changes
export default ProjectSummary
