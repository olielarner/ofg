import './Home.css';
import Hero from '../../components/Hero/Hero';
import Experience from '../../components/Experience/Experience';
import GreenToTan from '../../components/Spacers/GreenToTan';
import Contact from '../../components/Contact/Contact';
import TanToGreen from '../../components/Spacers/TanToGreen';
import Footer from '../../components/Footer/Footer';
import GreenToClay from '../../components/Spacers/GreenToClay';
import Header from '../../components/Header/Header';

function Home() {
	return (
		<div className="bg-ofg-light-green">
			<Header />
			<Hero />
			<GreenToTan />
			<Experience />
			<TanToGreen />
			<Contact />
			<GreenToClay />
			<Footer />
		</div>
	);
}

export default Home;
