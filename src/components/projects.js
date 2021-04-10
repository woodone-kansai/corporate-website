import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Progress = ({ project }) => {
  const steps = project.projectType.match(/リノベーション/)
    ? ['設計', '解体', '着工', '引渡']
    : ['設計', '申請', '着工', '上棟', '内装', '外装', '検査', '引渡']
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li className={`step ${index <= steps.indexOf(project.progress) ? 'done' : ''}`}>
          <span>{step}</span>
        </li>
      ))}
    </ul>
  )
}

const Projects = ({ projects }) => {
  return (
    <div className="projects-container">
      <div className="heading-works-container">
        <h2 className="heading-works en">PROJECTS</h2>
        <h2 className="heading-works ja">- 進行中の家 -</h2>
      </div>

      <ul className="project-list">
        {projects.map(({ node: project }) => (
          <li className="project-list-item" key={project.id}>
            <Link to={`/properties/${project.case}/`} className="project-inner">
              <Img className="project-image" fluid={project.eyeCatchImage.fluid} alt={project.title} />
              <div className="project-info">
                <div className="project-text">
                  <h4 className="project-title">{project.title}</h4>
                  <h4 className="project-type">{project.projectType}</h4>
                </div>
                <div className="project-progress">
                  <Progress project={project} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
