import React, {
	useRef,
	useEffect,
	useState,
	useLayoutEffect,
} from 'react';
import Image from 'next/image';
import ReactSparkle from 'react-sparkle';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Hero = () => {
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const tl1 = gsap.timeline();

		tl1.from('#heading1', {
			x: 100,
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
		});

		tl1.from('#heading2', {
			x: 100,
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
		});

		tl1.from('#name', {
			x: 100,
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
		});

		tl1.from('#paragraph', {
			x: 100,
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
		});

		gsap.from('#astroContainer', {
			x: -500,
			opacity: 0,
			duration: 3,
			ease: 'power3.out',
		});
	}, []);

	return (
		<section id='hero' className='w-screen h-screen relative'>
			<div className='absolute w-full h-full z-0'>
				<ReactSparkle />
			</div>
			<div className='container grid w-screen h-screen grid-cols-2 gap-10 mx-auto z-10'>
				<div
					id='astroContainer'
					className='flex justify-center relative mx-10'
				>
					<div className='absolute bg-gray-900 opacity-50 rounded-full	w-96 h-96 self-center'></div>
					<Image
						className='astronaut'
						src='/astronaut.svg'
						alt='Astronaut'
						layout='fill'
					/>
				</div>
				<div className='flex justify-center items-center px-20'>
					<div className=''>
						<h1 id='heading1' className='text-8xl'>
							Hi!
						</h1>
						<h2 id='heading2' className='text-3xl py-5'>
							My name is <br />
							<span
								id='name'
								className='text-8xl uppercase text-illuminating'
							>
								SCOTT DULLER
							</span>
						</h2>
						<p id='paragraph' className='text-3xl mt-12'>
							I am a{' '}
							<span className='text-3xl text-illuminating'>
								FULL-STACK
							</span>{' '}
							developer specialising in{' '}
							<span className='text-3xl text-illuminating'>
								Javascript
							</span>
							,{' '}
							<span className='text-3xl text-illuminating'>
								ReactJS
							</span>{' '}
							and{' '}
							<span className='text-3xl text-illuminating'>
								NodeJS
							</span>
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
