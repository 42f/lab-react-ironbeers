import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeers from '../assets/new-beer.png'
import randomBeers from '../assets/random-beer.png'
import './Home.css'

const Home = () => {
	return (
		<div className="home-container">
			<Link to="/beers">
				<img src={beers} alt="beers" />
				<h2>All Beers</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint voluptate excepturi expedita nulla corrupti magnam? Numquam ad ea, natus praesentium voluptatem reiciendis, velit laboriosam dolorum eligendi officiis dicta a.</p>
			</Link>

			<Link to="/random-beer">
				<img src={randomBeers} alt="random beers" />
				<h2>Random Beer</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint voluptate excepturi expedita nulla corrupti magnam? Numquam ad ea, natus praesentium voluptatem reiciendis, velit laboriosam dolorum eligendi officiis dicta a.</p>
			</Link>

			<Link to="new-beer">
				<img src={newBeers} alt="new beers" />
				<h2>New Beer</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint voluptate excepturi expedita nulla corrupti magnam? Numquam ad ea, natus praesentium voluptatem reiciendis, velit laboriosam dolorum eligendi officiis dicta a.</p>
			</Link>
		</div>
	)
}

export default Home
