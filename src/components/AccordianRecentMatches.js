import styles from "./AccordianRecentMatches.module.css";

const AccordianRecentMatches = () => {
  return (
    <div className={styles.accordianRecentMatches}>
      <div className={styles.teamInformation}>
        <div className={styles.teamNameContainer}>
          <div className={styles.afg}>Recent H2H matches</div>
          <div className={styles.winLossParent}>
            <div className={styles.winLoss}>
              <div className={styles.w}>W</div>
            </div>
            <div className={styles.winLoss1}>
              <div className={styles.l}>L</div>
            </div>
            <div className={styles.winLoss2}>
              <div className={styles.w1}>W</div>
            </div>
            <div className={styles.winLoss3}>
              <div className={styles.l1}>L</div>
            </div>
            <div className={styles.winLoss4}>
              <div className={styles.w2}>W</div>
            </div>
          </div>
        </div>
        <img className={styles.arrowUpKeyIcon} alt="" src="/arrow-up-key.svg" />
      </div>
      <div className={styles.versusMatchSummaries}>
        <div className={styles.menuTileRecentMatches}>
          <div className={styles.team1}>AFG</div>
          <div className={styles.team2}>IND</div>
        </div>
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>Overs</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt}>{`vs `}</div>
              </div>
              <div className={styles.result}>AFG won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
        <footer className={styles.menuTileRecentMatches2}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.scoreParent}>
                <div className={styles.score2}>183/8</div>
                <div className={styles.badge2}>
                  <div className={styles.badgeItem} />
                </div>
              </div>
              <div className={styles.overs2}>Overs</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.badgeParent}>
                <div className={styles.badge3}>
                  <div className={styles.badgeInner} />
                </div>
                <div className={styles.vsTxt1}>{`vs `}</div>
              </div>
              <div className={styles.result1}>IND won by 7 wkts</div>
            </div>
            <div className={styles.scoreGroup}>
              <div className={styles.score3}>183/8</div>
              <div className={styles.overs3}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon1}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </footer>
        <div className={styles.menuTileRecentMatches3}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.scoreContainer}>
                <div className={styles.score4}>Score</div>
                <div className={styles.badge4}>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
              <div className={styles.overs4}>Overs</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.badgeGroup}>
                <div className={styles.badge5}>
                  <div className={styles.badgeChild1} />
                </div>
                <div className={styles.vsTxt2}>{`vs `}</div>
              </div>
              <div className={styles.result2}>Result</div>
            </div>
            <div className={styles.scoreParent1}>
              <div className={styles.score5}>Score</div>
              <div className={styles.overs5}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon2}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
        <div className={styles.menuTileRecentMatches4}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.scoreParent2}>
                <div className={styles.score6}>Score</div>
                <div className={styles.badge6}>
                  <div className={styles.badgeChild2} />
                </div>
              </div>
              <div className={styles.overs6}>Overs</div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.badgeContainer}>
                <div className={styles.badge7}>
                  <div className={styles.badgeChild3} />
                </div>
                <div className={styles.vsTxt3}>{`vs `}</div>
              </div>
              <div className={styles.result3}>Result</div>
            </div>
            <div className={styles.scoreParent3}>
              <div className={styles.score7}>Score</div>
              <div className={styles.overs7}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon3}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
        <div className={styles.menuTileRecentMatches5}>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.scoreParent4}>
                <div className={styles.score8}>Score</div>
                <div className={styles.badge8}>
                  <div className={styles.badgeChild4} />
                </div>
              </div>
              <div className={styles.overs8}>Overs</div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.badgeParent1}>
                <div className={styles.badge9}>
                  <div className={styles.badgeChild5} />
                </div>
                <div className={styles.vsTxt4}>{`vs `}</div>
              </div>
              <div className={styles.result4}>Result</div>
            </div>
            <div className={styles.scoreParent5}>
              <div className={styles.score9}>Score</div>
              <div className={styles.overs9}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon4}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AccordianRecentMatches;
