import styles from "./MatchStatsSummary.module.css";

const MatchStatsSummary = () => {
  return (
    <div className={styles.matchStatsSummary}>
      <div className={styles.statistics}>
        <div className={styles.venueStats}>
          <div className={styles.matchFrequency}>
            <div className={styles.totalMatchesPlayed}>
              Total Matches played
            </div>
            <div className={styles.totalLabel}>5</div>
          </div>
          <img
            className={styles.statisticDetailsIcon}
            alt=""
            src="/frame-427322929-4@2x.png"
          />
          <img
            className={styles.additionalStatsIcon}
            loading="lazy"
            alt=""
            src="/frame-427323171.svg"
          />
        </div>
      </div>
      <div className={styles.barCharts}>
        <div className={styles.chartLabels}>
          <div className={styles.avgFantasyPoints}>Matches Won</div>
          <div className={styles.averageLabel}>4 : 1</div>
        </div>
        <div className={styles.teamComparison}>
          <div className={styles.teamScoresChart}>
            <div className={styles.scoreBars} />
            <div className={styles.scoreBars1} />
          </div>
          <div className={styles.teamNames}>
            <div className={styles.teamLabels}>
              <div className={styles.teamMarkers}>
                <div className={styles.markerShape} />
              </div>
              <div className={styles.teamA}>AFG</div>
            </div>
            <div className={styles.secondTeamDetails}>
              <div className={styles.teamB}>IND</div>
              <div className={styles.teamMarker} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statisticLabels}>
        <div className={styles.venueStats1}>
          <div className={styles.labelContainers}>
            <input
              className={styles.textLabel}
              placeholder="Tie/ Draw"
              type="text"
            />
            <div className={styles.labelDetails}>0</div>
          </div>
        </div>
        <div className={styles.venueStats2}>
          <div className={styles.textLabelParent}>
            <input
              className={styles.textLabel1}
              placeholder="No Result"
              type="text"
            />
            <div className={styles.div}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStatsSummary;
