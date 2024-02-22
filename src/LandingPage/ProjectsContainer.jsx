import ProjectButton from './ProjectButton';
import { Projects } from '../projects';
import './styles/projects-container.scss';

export default function ProjectsContainer() {
  const projectButton = Projects.map((project) => {
    // console.log(project)
    return (
      <ProjectButton id={project.name} src={project.src} link={project.link} />
    )
  })
  return (
    <div className="projects-container">
      {projectButton}  
    </div>
  )
  
}