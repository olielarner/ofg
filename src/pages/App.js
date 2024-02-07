import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import Home from '../pages/Home/Home';
import Privacy from './Privacy/Privacy';
import Cookies from './Cookies/Cookies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Terms from './Terms/Terms';
import ScrollToTop from '../utils/ScrollToTop';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/privacy-policy" element={<Privacy />} />
				<Route exact path="/cookies-policy" element={<Cookies />} />
				<Route exact path="/terms-and-conditions" element={<Terms />} />
			</Routes>
			<CookieConsent
				location="bottom"
				buttonText="Sure man!!"
				cookieName="myAwesomeCookieName2"
				style={{ background: '#2B373B' }}
				buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
				expires={150}
			>
				This website uses cookies to enhance the user experience.{' '}
			</CookieConsent>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
