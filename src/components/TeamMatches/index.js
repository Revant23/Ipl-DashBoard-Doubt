// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {TeamItems: [], isLoading: true}

  componentDidMount = () => {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const UpdatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({TeamItems: UpdatedData, isLoading: false})
  }

  render() {
    const {TeamItems, isLoading} = this.state
    console.log(TeamItems)

    return (
      <>
        <div className="TeamMatches">
          {isLoading ? (
            <Loader
              className="loader"
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
            />
          ) : (
            <div>
              <img
                src={TeamItems.teamBannerUrl}
                alt="TeamName"
                className="TeamBanner"
              />
              <p className="latesh-head">Latesh Matches</p>
              <div className="latesh-Match-Details">
                <div className="upper-container">
                  <div>
                    <h1>{TeamItems.latestMatchDetails.competing_team}</h1>
                    <p>{TeamItems.latestMatchDetails.date}</p>
                    <p>{TeamItems.latestMatchDetails.venue}</p>
                    <p>{TeamItems.latestMatchDetails.result}</p>
                  </div>
                  <div className="competing-team-logo">
                    <img
                      src={TeamItems.latestMatchDetails.competing_team_logo}
                      alt="competingTeam"
                    />
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="DownContainer">
                  <h1>First Innings</h1>
                  <p>{TeamItems.latestMatchDetails.first_innings}</p>
                  <h1>Second Innings</h1>
                  <p>{TeamItems.latestMatchDetails.second_innings}</p>
                  <h1>Man of The Match</h1>
                  <p>{TeamItems.latestMatchDetails.man_of_the_match}</p>
                  <h1>Umpires</h1>
                  <p>{TeamItems.latestMatchDetails.umpires}</p>
                </div>
              </div>
              <ul>
                {TeamItems.latestMatchDetails.map(eachMatchDetail => (
                  <MatchCard CardDetails={eachMatchDetail} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default TeamMatches
