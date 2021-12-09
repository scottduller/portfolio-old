import React, { useEffect, useLayoutEffect } from 'react';
import ReactSparkle from 'react-sparkle';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Space = () => {
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#space',
				start: 'top center',
				end: 'bottom center',
				scrub: 1,
			},
		});

		tl1.fromTo(
			'#plane1',
			{ x: '-20vw', y: '-20vh' },
			{ x: '100vw', y: '70vh' }
		);
	}, []);
	return (
		<section
			id='space'
			className='flex w-screen h-screen relative items-center'
		>
			<div className='absolute w-full h-full z-0'>
				<ReactSparkle />
			</div>
			<div className='h-3/4'>
				<div id='plane1' className='relative w-72 h-52'>
					<Image
						className=''
						src='/paper.png'
						alt='Paper Plane'
						layout='fill'
					/>
				</div>
			</div>
		</section>
	);
};

export default Space;
