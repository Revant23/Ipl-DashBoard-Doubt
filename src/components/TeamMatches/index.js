// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class TeamMatches extends Component {
  state = {TeamItems: []}

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
    this.setState({TeamItems: UpdatedData})
  }

  render() {
    const {TeamItems} = this.state
    console.log(TeamItems)

    return (
      <>
        <div className="TeamMatches">
          <img
            src={TeamItems.teamBannerUrl}
            alt="TeamName"
            className="TeamBanner"
          />
          <p className="Latesh-head">Latesh Matches</p>
          <div className="Latesh-Match-Details">
            <h1>{TeamItems.latestMatchDetails.competing_team}</h1>
          </div>
        </div>
      </>
    )
  }
}

export default TeamMatches
