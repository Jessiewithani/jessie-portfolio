import * as styles from './PortfolioHeader.tailwind.ts';

export default function PortfolioHeader() {
  return (
    <div className={styles.headerWrapper_tw}>
      <h1 className={styles.heading_tw}>Jessiethanh</h1>
      <h3 className={styles.subheading_tw}>Portfolio</h3>
    </div>
  )
}