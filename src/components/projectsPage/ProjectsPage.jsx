import PortfolioHeader from '../../app/components/headers/portfolioHeader/PortfolioHeader.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import * as styles from './landingPage.tailwind.ts';

export default function ProjectsPage() {
  return (
    <div className={styles.landingPage_tw}>
      <PortfolioHeader />
      <ProjectsContainer />
    </div>
  );
}