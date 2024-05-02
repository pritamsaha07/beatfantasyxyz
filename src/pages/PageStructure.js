import VenueStats from "../components/VenueStats";
import RecentMatches from "../components/RecentMatches";
import MatchStatsSummary from "../components/MatchStatsSummary";
import AccordianRecentMatches from "../components/AccordianRecentMatches";
import styles from "./PageStructure.module.css";
import React, { useState } from 'react';


const PageStructure = () => {
  const [activeOption, setActiveOption] = useState(0);

  const handleHover = (index) => {
    setActiveOption(index);
  };
  return (
    <div className={styles.pageStructure}>
      <header className={styles.tabsMultiple}>
        <div className={styles.tabsMaster}>
          <div className={styles.tabContent}>
            <div className={styles.labelContainer}>
              <div className={styles.labelText}>AI Teams</div>
              <div className={styles.badge}>
                <div className={styles.badgeChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabsMaster1}>
          <div className={styles.dummyIconParent}>
            <img className={styles.dummyIcon} alt="" src="/dummy-icon.svg" />
            <div className={styles.contentArea}>
              <div className={styles.labelText1}>Prediction</div>
              <div className={styles.badge1}>
                <div className={styles.badgeItem} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabsMaster2}>
          <div className={styles.tabContent1}>
           
            <div className={styles.contentArea1}>
              <div className={styles.labelText2}>Stats</div>
              <div className={styles.badge2}>
                <div className={styles.badgeInner} />
              </div>
            </div>
          </div>
          
        </div>
        <div className={styles.tabsMaster3}>
          <div className={styles.dummyIconGroup}>
            
            <div className={styles.labelTextParent}>
              <div className={styles.labelText3}>Experts</div>
              <div className={styles.badge3}>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
          </div>
        </div>
       
      </header>
      <main className={styles.venueStatsParent}>
        <VenueStats />
        <RecentMatches />
        <section className={styles.headToHead}>
          <div className={styles.headToHeadContainer}>
            <div className={styles.headToHeadTitle}>
              <div className={styles.headToHead1}>Head To Head</div>
              <div className={styles.matchesPlayedH2h}>Matches played H2H</div>
            </div>
            <div className={styles.matchInfo}>
              <img
                className={styles.infoIcon}
                loading="lazy"
                alt=""
                src="/info.svg"
              />
            </div>
          </div>
          <MatchStatsSummary />
          <AccordianRecentMatches />
          
        </section>
      </main>
    </div>
  );
};

export default PageStructure;
