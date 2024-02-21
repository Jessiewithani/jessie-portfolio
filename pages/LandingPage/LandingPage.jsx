import PortfolioHeader from '../LandingPage/PortfolioHeader';
import ProjectsContainer from '../LandingPage/ProjectsContainer';
import './styles/landing-page.scss';

export default function LandingPage() {
  return (
    <div className="intro-wrapper">
      <PortfolioHeader />
      {/* add a porjects container underneath the header */}
      <ProjectsContainer />
    </div>
  );
}