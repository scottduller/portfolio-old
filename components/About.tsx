import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import ReactSparkle from 'react-sparkle';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
	gsap.registerPlugin(ScrollTrigger);
	useLayoutEffect(() => {
		// gsap.to('#leftAbout', {
		// 	scrollTrigger: {
		// 		trigger: '#about',
		// 		scrub: true,
		// 		start: 'top bottom',
		// 		end: '30% center',
		// 		markers: true,
		// 	},
		// 	x: 0,
		// 	yoyoEase: 'power2.in',
		// });
		gsap.to('#rightAbout', {
			scrollTrigger: {
				trigger: '#about',
				scrub: true,
				start: 'top bottom',
				end: '30% center',
				markers: true,
			},
			x: 0,
			yoyoEase: 'power2.in',
		});
		// gsap.to('#leftAbout', {
		// 	scrollTrigger: {
		// 		trigger: '#about',
		// 		scrub: true,
		// 		start: '70% center',
		// 		end: 'bottom top',
		// 		markers: true,
		// 	},
		// 	x: '-=100%',
		// 	yoyoEase: 'power2.in',
		// });
		gsap.to('#rightAbout', {
			scrollTrigger: {
				trigger: '#about',
				scrub: true,
				start: '70% center',
				end: 'bottom top',
				markers: true,
			},
			x: '+=100%',
			yoyoEase: 'power2.in',
		});
	});

	return (
		<section
			id='about'
			className='w-screen h-screen relative flex flex-col justify-center'
		>
			<div
				id='gradientSparkle'
				className='absolute w-full h-full z-0'
			>
				<ReactSparkle />
			</div>
			<div className='container flex w-screen h-3/5 z-10 mx-auto'>
				<div
					id='leftAbout'
					className='astronaut flex items-center justify-center w-4/6 h-full '
				>
					<Image
						src='/me.jpg'
						alt='Me'
						layout='fill'
						objectFit='contain'
					/>
				</div>
				<div
					id='rightAbout'
					className='flex flex-col justify-center w-full h-full  p-20'
				>
					<h2 className='text-xl'>More About Me...</h2>
					<h3 className='text-4xl mb-8 text-illuminating'>
						Hello, I'm Scott!
					</h3>
					<p className='text-md mb-4'>
						I'm a hard and dependable worker who values
						honesty above all else. Once I set my mind to
						something I do not stop until I can guarantee
						I have created the best product I possibly
						can.
					</p>
					<p className='text-md'>
						I studied a masters in computer science at the
						University of Sussex where I achieved a first
						class degree. I learn't many of the
						fundamentals of computer science at
						university, including data structures and
						algorithms and the concepts of human computer
						interaction. However, I discovered my love for
						web design and development through various
						online courses.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
