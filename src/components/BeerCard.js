import { Link } from 'react-router-dom'
import './Beer.css'


const BeerCard = ({ beer }) => {
	return (
		<Link className="beer-card" to={'/beers/' + beer._id}>
			<picture>
				<img src={beer.image_url} alt={beer.name} />
			</picture>
			<div className="beer-card-infos">
				<h2>{beer.name}</h2>
				<h3>{beer.tagline}</h3>
				<p><b>Created by:</b> {beer.contributed_by}</p>
			</div>
		</Link>
	)
}

export default BeerCard
