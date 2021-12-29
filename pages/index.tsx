import Header from '../components/Header';
import Head from 'next/head';
import { useState } from 'react';
import Hero from '../components/Hero';
const Index = () => {
	const [active, setActive] = useState(false);

	return (
		<div className='w-screen'>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<div className='container'>
				<Hero />
			</div>
			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default Index;
