import './BeerCardDetails.css'

const BeerCardDetails = (props) => {
	return (
		<div className="BeerCardDetails">
			<img src={props.image_url} alt={props.name} />

			<div><h2>{props.name}</h2>
			<span id="attenuation">{props.attenuation_level}</span></div>
			<div><h3>{props.tagline}</h3>
			<span id="first_brewed">{props.first_brewed}</span></div>
			<p>{props.description}</p>
			<p id="contribution">{props.contributed_by}</p>
		</div>
	)
}

export default BeerCardDetails
