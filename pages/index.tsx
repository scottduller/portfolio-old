import Header from '../components/Header';
import Head from 'next/head';
import { useState } from 'react';
const Index = () => {
	const [active, setActive] = useState(false);

	return (
		<div className='w-screen'>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<Header active={active} setActive={setActive}></Header>
		</div>
	);
};

export default Index;
