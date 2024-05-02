import styles from "./RecentMatches.module.css";

const RecentMatches = () => {
  return (
    <section className={styles.recentMatches}>
      <div className={styles.matchesContainer}>
        <div className={styles.recentMatchesParent}>
          <div className={styles.recentMatches1}>Recent Matches</div>
          <div className={styles.last5Recent}>Last 5 recent matches</div>
        </div>
        <div className={styles.matchDetailsContainer}>
          <img
            className={styles.infoIcon}
            loading="lazy"
            alt=""
            src="/info.svg"
          />
        </div>
      </div>
      <div className={styles.matchHistory}>
        <div className={styles.accordianRecentMatches}>
          <div className={styles.teamPerformance}>
            <div className={styles.teamDetails}>
              <div className={styles.afg}>AFG</div>
              <div className={styles.matchOutcomes}>
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
            <img
              className={styles.arrowUpKeyIcon}
              loading="lazy"
              alt=""
              src="/arrow-up-key.svg"
            />
          </div>
          <div className={styles.recentMatchSummaries}>
            <div className={styles.menuTileRecentMatches}>
              <div className={styles.team1}>Team 1</div>
              <div className={styles.team2}>Team 2</div>
            </div>
            <div className={styles.menuTileRecentMatches1}>
              <div className={styles.matchDetails}>
                <div className={styles.matchStats}>
                  <div className={styles.matchScoreContainers}>
                    <div className={styles.score}>183/8</div>
                    <div className={styles.badge}>
                      <div className={styles.badgeChild} />
                    </div>
                  </div>
                  <div className={styles.overs}>183/8</div>
                </div>
                <div className={styles.versusDetails}>
                  <div className={styles.matchResults}>
                    <div className={styles.badge1}>
                      <div className={styles.badgeShapes} />
                    </div>
                    <div className={styles.vsTxt}>vs PAK</div>
                  </div>
                  <div className={styles.result}>PAK won by 7 wkts</div>
                </div>
                <div className={styles.opponentScores}>
                  <div className={styles.score1}>183/8</div>
                  <div className={styles.overs1}>183/8</div>
                </div>
              </div>
              <img
                className={styles.arrowRightAltIcon}
                alt=""
                src="/arrow-right-alt.svg"
              />
            </div>
            <div className={styles.menuTileRecentMatches2}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.scoreParent}>
                    <div className={styles.score2}>183/8</div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeItem} />
                    </div>
                  </div>
                  <div className={styles.overs2}>(20)</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.badgeParent}>
                    <div className={styles.badge3}>
                      <div className={styles.badgeInner} />
                    </div>
                    <div className={styles.vsTxt1}>vs PAK</div>
                  </div>
                  <div className={styles.result1}>PAK won by 7 wkts</div>
                </div>
                <div className={styles.scoreGroup}>
                  <div className={styles.score3}>183/8</div>
                  <div className={styles.overs3}>(20)</div>
                </div>
              </div>
              <img
                className={styles.arrowRightAltIcon1}
                alt=""
                src="/arrow-right-alt.svg"
              />
            </div>
            <div className={styles.menuTileRecentMatches3}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.scoreContainer}>
                    <div className={styles.score4}>183/8</div>
                    <div className={styles.badge4}>
                      <div className={styles.ellipseDiv} />
                    </div>
                  </div>
                  <div className={styles.overs4}>(20)</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.badgeGroup}>
                    <div className={styles.badge5}>
                      <div className={styles.badgeChild1} />
                    </div>
                    <div className={styles.vsTxt2}>vs PAK</div>
                  </div>
                  <div className={styles.result2}>AFG won by 7 wkts</div>
                </div>
                <div className={styles.scoreParent1}>
                  <div className={styles.score5}>183/8</div>
                  <div className={styles.overs5}>(20)</div>
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
                    <div className={styles.score6}>183/8</div>
                    <div className={styles.badge6}>
                      <div className={styles.badgeChild2} />
                    </div>
                  </div>
                  <div className={styles.overs6}>(20)</div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.badgeContainer}>
                    <div className={styles.badge7}>
                      <div className={styles.badgeChild3} />
                    </div>
                    <div className={styles.vsTxt3}>vs PAK</div>
                  </div>
                  <div className={styles.result3}>PAK won by 7 wkts</div>
                </div>
                <div className={styles.scoreParent3}>
                  <div className={styles.score7}>183/8</div>
                  <div className={styles.overs7}>(20)</div>
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
                    <div className={styles.score8}>183/8</div>
                    <div className={styles.badge8}>
                      <div className={styles.badgeChild4} />
                    </div>
                  </div>
                  <div className={styles.overs8}>(20)</div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.badgeParent1}>
                    <div className={styles.badge9}>
                      <div className={styles.badgeChild5} />
                    </div>
                    <div className={styles.vsTxt4}>vs PAK</div>
                  </div>
                  <div className={styles.result4}>AFG won by 7 wkts</div>
                </div>
                <div className={styles.scoreParent5}>
                  <div className={styles.score9}>183/8</div>
                  <div className={styles.overs9}>(20)</div>
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
        <div className={styles.accordianRecentMatches1}>
          <div className={styles.teamInfo}>
            <div className={styles.afg1}>IND</div>
            <div className={styles.matchHistory1}>
              <div className={styles.winLoss5}>
                <div className={styles.w3}>W</div>
              </div>
              <div className={styles.winLoss6}>
                <div className={styles.w4}>W</div>
              </div>
              <div className={styles.winLoss7}>
                <div className={styles.l2}>L</div>
              </div>
              <div className={styles.winLoss8}>
                <div className={styles.l3}>L</div>
              </div>
              <div className={styles.winLoss9}>
                <div className={styles.w5}>W</div>
              </div>
            </div>
          </div>
          <img
            className={styles.arrowDownKeyIcon}
            loading="lazy"
            alt=""
            src="/arrow-down-key.svg"
          />
        </div>
      </div>
      <div className={styles.tooltip}>
        <div className={styles.content}>
          <div className={styles.text}>This is a tooltip</div>
        </div>
        <img className={styles.tooltipIcon} alt="" src="/tooltip.svg" />
      </div>
    </section>
  );
};

export default RecentMatches;
