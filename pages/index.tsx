import Head from 'next/head';
import Hero from '../components/Hero';
import { CssBaseline } from '@mui/material';

const Index = () => {
	return (
		<>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<CssBaseline />
			<Hero />
		</>
	);
};

export default Index;
