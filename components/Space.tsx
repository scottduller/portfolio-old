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
				trigger: '#space',
				start: 'center center',
				end: 'bottom top',
				scrub: 1,
				pin: true,
				markers: true,
			},
		});

		tl1.fromTo(
			'#plane1',
			{ x: '-20vw', y: '30vh' },
			{ x: '100vw' }
		);
	}, []);
	return (
		<section id='space' className='w-screen h-screen'>
			<div className='absolute w-full h-full z-0'>
				<ReactSparkle />
			</div>
			<div id='plane1' className='relative w-72 h-52'>
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
