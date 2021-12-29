import Header from '../components/Header';
import Head from 'next/head';
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';
import { useState } from 'react';
import Hero from '../components/Hero';
const Index = () => {
	const [active, setActive] = useState(false);

	active
		? disableBodyScroll(document.body)
		: enableBodyScroll(document.body);

	return (
		<div>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<div
				className={`container ${
					active ? 'blur h-full overflow-y-hidden' : ''
				}`}
			>
				{active && (
					<div className='fixed top-0 left-0 right-0 bottom-0 blur h-full'></div>
				)}
				<Hero />
			</div>
			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default Index;
