// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {EachCardDetails} = props
  const {id, name, teamImageUrl} = EachCardDetails

  return (
    <>
      <Link to={`/teams/${id}`} className="blog-item-link">
        <li className="Team-card">
          <div className="items-container">
            <img src={teamImageUrl} alt={name} />
            <p className="team-heading">{name}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default TeamCard
