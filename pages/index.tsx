import Header from '../components/Header';
import Head from 'next/head';
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
const Index = () => {
	const [active, setActive] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (active) {
			if (windowWidth < 768) {
				disableBodyScroll(document.body);
			} else {
				setActive(false);
			}
		} else {
			enableBodyScroll(document.body);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [active, windowWidth]);

	return (
		<div>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
				<script
					src='https://platform.linkedin.com/badges/js/profile.js'
					async
					defer
					type='text/javascript'
				></script>
			</Head>
			<div className={`container ${active ? 'blur' : ''}`}>
				{active && (
					<div className='fixed top-0 left-0 right-0 bottom-0 h-full'></div>
				)}
				<Hero />
			</div>
			<div
				className='badge-base LI-profile-badge fixed bottom-3 right-[-2.75rem]'
				data-locale='en_US'
				data-size='medium'
				data-theme='light'
				data-type='VERTICAL'
				data-vanity='scottduller'
				data-version='v1'
			>
				<a
					className='badge-base__link LI-simple-link'
					href='https://uk.linkedin.com/in/scottduller?trk=profile-badge'
        ></a>
        
			</div>

			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default Index;
