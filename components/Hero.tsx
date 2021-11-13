import React, { useRef } from 'react';
import Image from 'next/image';
import ReactSparkle from 'react-sparkle';

const Hero = () => {
	return (
		<section className='w-screen h-screen'>
			<div className='absolute w-screen h-screen z-0'>
				<ReactSparkle
					overflowPx={20}
					fadeOutSpeed={5}
					flicker={false}
				/>
			</div>
			<div className='container grid w-screen h-screen grid-cols-2 gap-10 mx-auto z-10'>
				<div className='flex justify-center relative'>
					<div className='absolute bg-gray-900 rounded-full	w-96 h-96 self-center'></div>
					<Image
						id='astronaut'
						src='/astronaut.svg'
						alt='Astronaut'
						layout='fill'
					/>
				</div>
				<div className='flex justify-center items-center'>
					<div className=''>
						<h1 className='text-6xl'>Hi!</h1>
						<h2 className='text-3xl py-10'>
							My name is <br />
							<span className='text-8xl uppercase text-illuminating'>
								SCOTT DULLER
							</span>
						</h2>
						<p className='text-3xl'>
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
