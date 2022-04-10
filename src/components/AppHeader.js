import { Link } from 'react-router-dom'
import home from '../assets/home.svg'
import './AppHeader.css'
const AppHeader = () => {
	return (
		<header>
			<Link className='AppHeader' to='/'><img src={home} alt="home icon" /></Link>
		</header>
	)
}

export default AppHeader
