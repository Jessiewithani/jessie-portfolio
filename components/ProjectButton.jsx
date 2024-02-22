
import '../LandingPage/styles/project-button.scss';

// have background images for the buttons
// by default the images are black and white
// on hover the images have color
// when clicking on the buttons, it takes you to the project link

export default function ProjectButton({id, src, link}) {
  return (
    <a href={link}>
      <img alt="default" className="project-button-image" src={src} />
    </a>
  )
}