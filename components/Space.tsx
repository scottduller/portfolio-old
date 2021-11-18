import React, { useEffect } from 'react';
import ReactSparkle from 'react-sparkle';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Space = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				markers: true,
				trigger: '#space',
				start: '-=40%',
				end: 'bottom',
				scrub: true,
			},
		});

		tl1.fromTo(
			'#plane1',
			{ x: '-10vw', y: '-300%' },
			{ x: '100vw', y: '300%' }
		);
	}, []);
	return (
		<section id='space' className='flex w-screen h-screen'>
			<div className='absolute w-full h-full z-0'>
				<ReactSparkle />
			</div>
			<div
				id='plane1'
				className='relative w-72 h-52 self-center'
			>
				<Image
					className=''
					src='/paper.png'
					alt='Paper Plane'
					layout='fill'
				/>
			</div>
		</section>
	);
};

export default Space;
