import Header from '../components/Header';
import Head from 'next/head';
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import classNames from 'classnames';

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

	const handleClickOff = () => {
		setActive(false);
	};

	const bodyContainer = classNames(
		'container transition-all duration-500',
		{
			blur: active,
		}
	);
	const interactionBlock = classNames(
		'fixed top-0 left-0 right-0 bottom-0 h-full',
		{ hidden: !active }
	);

	return (
		<div>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<div className={bodyContainer}>
				<div
					className={interactionBlock}
					onClick={handleClickOff}
				></div>
				<Hero />
			</div>
			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default Index;
