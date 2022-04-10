import { Route, Routes } from 'react-router-dom';
import BeerDetails from '../pages/BeerDetails';
import Beers from '../pages/Beers';
import NewBeers from '../pages/New-Beer';
import RandomBeers from '../pages/Random-Beer';
import AppHeader from '../components/AppHeader';


const AppMain = () => {
	return (
		<>
			<AppHeader />
			<Routes>
				<Route path="/beers/:id" element={<BeerDetails />} />
				<Route path="/beers" element={<Beers />} />
				<Route path="/new-beer" element={<NewBeers />} />
				<Route path="/random-beer" element={<RandomBeers />} />
				<Route path="/*" element={<h1>404</h1>} />
			</Routes>
		</>
	)
}

export default AppMain
