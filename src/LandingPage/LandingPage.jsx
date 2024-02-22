import PortfolioHeader from './PortfolioHeader';
import ProjectsContainer from './ProjectsContainer';
import * as styles from './styles/landingPage.tailwind.ts';

export default function LandingPage() {
  return (
    <div className={styles.landingPage_tw}>
      <PortfolioHeader />
      <ProjectsContainer />
    </div>
  );
}