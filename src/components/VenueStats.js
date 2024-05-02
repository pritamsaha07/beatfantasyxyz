import styles from "./VenueStats.module.css";
import { PieChart } from '@mui/x-charts/PieChart';
const VenueStats = () => {
  return (
    <section className={styles.venueStats}>
      <div className={styles.locationDetails}>
        <div className={styles.location}>
          <div className={styles.venue}>Venue</div>
          <div className={styles.bengaluruIndia}>(Bengaluru, India)</div>
          <div className={styles.mchinnaswamyStadiumBengalu}>
            M.Chinnaswamy Stadium, Bengaluru
          </div>
        </div>
        <div className={styles.additionalDetails}>
          <div className={styles.infoContainer}>
            <img
              className={styles.infoIcon}
              loading="lazy"
              alt=""
              src="/info.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.venuePerformance}>
        <div className={styles.performanceMetrics}>
          <div className={styles.runDetails}>
            <div className={styles.venueStats1}>
              <div className={styles.pitchInfo}>
                <div className={styles.avgRuns}>{`Avg. Runs `}</div>
                <div className={styles.pitchBalance}>162</div>
              </div>
              <img
                className={styles.additionalStatIcon}
                alt=""
                src="/additional-stat@2x.png"
              />
              <img
                className={styles.additionalStatIcon1}
                alt=""
                src="/additional-stat.svg"
              />
            </div>
            <div className={styles.venueStats2}>
              <div className={styles.weatherInfo}>
                <div className={styles.goodFor} >Good for</div>
                <div className={styles.pacers}>Pacers</div>
              </div>
              <img
                className={styles.additionalStatIcon2}
                alt=""
                src="/frame-427322929-1@2x.png"
              />
              <img
                className={styles.additionalStatIcon3}
                alt=""
                src="/additional-stat1@2x.png"
              />
            </div>
          </div>
          <div className={styles.runDetails1}>
            <div className={styles.venueStats3}>
              <div className={styles.pitchParent}>
                <div className={styles.pitch}>Pitch</div>
                <div className={styles.balanced}>Balanced</div>
              </div>
              <img
                className={styles.venueStatsChild}
                loading="lazy"
                alt=""
                src="/frame-427322929-2@2x.png"
              />
              <img
                className={styles.venueStatsItem}
                alt=""
                src="/frame-427323167@2x.png"
              />
            </div>
            <div className={styles.venueStats4}>
              <div className={styles.weatherParent}>
                <div className={styles.weather}>Weather</div>
                <div className={styles.sunny}>Sunny</div>
              </div>
              <img
                className={styles.venueStatsInner}
                alt=""
                src="/frame-427322929-3@2x.png"
              />
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-427323170.svg"
              />
            </div>
          </div>
         
        </div>
        <div className={styles.avgDreamTeamPoints}>
          <div className={styles.statsContainer}>
            <div className={styles.pointsInfoWrapper}>
              <div className={styles.pointsInfo}>
                <div className={styles.pointsHeader}>
                  <div className={styles.avgDreamTeam}>
                    Avg. Dream Team points
                  </div>
                  <div className={styles.last5Matches}>
                    Last 5 matches in this venue
                  </div>
                </div>
                <div className={styles.pts}>620 pts</div>
              </div>
            </div>
            <img
              className={styles.arrowUpKeyIcon}
              alt=""
              src="/arrow-up-key.svg"
            />
          </div>
          <div className={styles.pieChartContainer}>
  <PieChart 
    series={[
      {
        data: [
          { id: 0, value: 372, color:'#FF9933', label: 'Bat: 372 pts' },
          { id: 1, value: 248, color:'yellow', label: 'Bowl: 248 pts' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
</div>
        </div>
        <div className={styles.tossTrend}>
          <div className={styles.trendsContainer}>
            <div className={styles.trendsHeader}>
              <div className={styles.trendsTitle}>
                <div className={styles.tossTrends}>Toss Trends</div>
                <div className={styles.howTeamsPerform}>
                  how teams perform after toss is made?
                </div>
              </div>
              <div className={styles.trendsVisualization}>
                <div className={styles.winVisualization}>
                  <div className={styles.outcomeComparison}>
                    <img
                      className={styles.sportsCricketBatIcon}
                      loading="lazy"
                      alt=""
                      src="/sports-cricket-bat.svg"
                    />
                    <div className={styles.winsBattingFirst}>
                      Wins Batting first
                    </div>
                  </div>
                  <div className={styles.outcomeDivider}>60%</div>
                </div>
                <div className={styles.winVisualization1}>
                  <div className={styles.sportsCricketBallParent}>
                    <img
                      className={styles.sportsCricketBallIcon}
                      alt=""
                      src="/sports-cricket-ball.svg"
                    />
                    <div className={styles.winsChasing}>Wins Chasing</div>
                  </div>
                  <div className={styles.div}>40%</div>
                </div>
              </div>
            </div>
            <img
              className={styles.arrowUpKeyIcon1}
              alt=""
              src="/arrow-up-key.svg"
            />
          </div>
        </div>
        <div className={styles.barCharts}>
          <div className={styles.wicketSummary}>
            <div className={styles.wicketDetails}>
              <img
                className={styles.cricketStumpIcon}
                loading="lazy"
                alt=""
                src="/cricket-stump.svg"
              />
              <div className={styles.wicketLabel}>
                <div className={styles.totalWickets}>Total Wickets</div>
              </div>
            </div>
            <div className={styles.overallSummary}>14</div>
          </div>
          <div className={styles.bowlingStyleComparison}>
            <div className={styles.styleBreakdown}>
              <div className={styles.styleIconContainerParent}>
                <div className={styles.styleIconContainer}>
                  <div className={styles.bowlingStyleIcon} />
                </div>
                <div className={styles.byPacer}>By Pacer :</div>
              </div>
              <div className={styles.styleDivider}>5</div>
            </div>
            <div className={styles.wicketComparison}>
              <div className={styles.wicketChart} />
            </div>
          </div>
          <div className={styles.bowlingStyleComparison1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.bySpinner}>By Spinner :</div>
              </div>
              <div className={styles.div1}>9</div>
            </div>
            <div className={styles.bowlingStyleComparisonInner}>
              <div className={styles.frameInner} />
            </div>
          </div>
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

export default VenueStats;
