import PortfolioHeader from '../app/components/headers/portfolioHeader/PortfolioHeader.jsx';
import ProjectsContainer from './ProjectsContainer';
import * as styles from './landingPage.tailwind.ts';

export default function LandingPage() {
  return (
    <div className={styles.landingPage_tw}>
      <PortfolioHeader />
      <ProjectsContainer />
    </div>
  );
}