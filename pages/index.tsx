import Navbar from '../components/Navbar';
import Head from 'next/head';
import Hero from '../components/Hero';
import Space from '../components/Space';
import About from '../components/About';
import Skyscrapers from '../components/Skyscrapers';
import Projects from '../components/Projects';
import Ground from '../components/Ground';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
	return (
		<>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<Navbar />
			<Hero />
			<Space />
			<About />
			<Skyscrapers />
			<Projects />
			<Ground />
			<Contact />
			<Footer />
		</>
	);
};

export default Index;
