import Head from 'next/head';
import React from 'react';
import Portfolio from '../components/Portfolio';

const portfolio = () => {
	return (
		<>
			<Head>
				<title>Scott Duller | Project Portfolio</title>
			</Head>
			<Portfolio />
		</>
	);
};

export default portfolio;
