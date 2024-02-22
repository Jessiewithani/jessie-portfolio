import PortfolioHeader from '../landingPage/PortfolioHeader';
import ProjectsContainer from '../landingPage/ProjectsContainer';
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