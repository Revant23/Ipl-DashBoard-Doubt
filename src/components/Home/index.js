// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import TeamMatches from '../TeamMatches'
import './index.css'

class Home extends Component {
  state = {CardItems: []}

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({CardItems: formattedData})
  }

  render() {
    const {CardItems} = this.state

    return (
      <>
        <div className="ipl-dashboard">
          <div className="ipl-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
          <ul className="cards-container">
            {CardItems.map(eachItem => (
              <TeamCard EachCardDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
