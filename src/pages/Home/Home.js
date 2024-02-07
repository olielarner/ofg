import './Home.css';
import Hero from '../../components/Hero/Hero';
import Experience from '../../components/Experience/Experience';
import GreenToTan from '../../components/Spacers/GreenToTan';
import TanToGreen from '../../components/Spacers/TanToGreen';
import Footer from '../../components/Footer/Footer';
import GreenToClay from '../../components/Spacers/GreenToClay';
import Form from '../../components/Contact/Form';

function Home() {
	return (
		<div className="bg-ofg-light-green">
			<Hero />
			<GreenToTan />
			<Experience />
			<TanToGreen />
			<Form />
			<GreenToClay />
		</div>
	);
}

export default Home;
