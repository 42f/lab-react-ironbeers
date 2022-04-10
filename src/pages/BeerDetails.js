import { fetchData } from '../api/beer-api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import BeerCardDetails from '../components/BeerCardDetails'


const BeerDetails = () => {
	const { id } = useParams();
	const [beerDetails, setBeerDetails] = useState();
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchData(`https://ih-beers-api2.herokuapp.com/beers/${id}`, setBeerDetails, setError);
	}, [id]);

	return (
		<>
			{
				(error && <h2>Could not load details for this beer :(</h2>)
				|| ((beerDetails && <BeerCardDetails {...beerDetails} />)
					|| <h2>Loading...</h2>)
			}
		</>
	)
}

export default BeerDetails
