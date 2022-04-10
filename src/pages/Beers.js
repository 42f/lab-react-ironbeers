import { fetchData } from '../api/beer-api'
import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

const Beers = () => {

	const [beers, setBeers] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchData('https://ih-beers-api2.herokuapp.com/beers', setBeers, setError);
	}, []);

	return (
		<>
			{
				(error && <h2>Could not load beers :(</h2>)
				|| ((beers.length && beers.map(beer => <BeerCard key={beer._id} beer={beer} />))
					|| <h2>Loading...</h2>)
			}
		</>
	)
}

export default Beers
