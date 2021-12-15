import React from 'react';
import Header from './Header';

const Hero = (props: any) => {
	return (
		<div className='section h-full align-top'>
			<Header
				fullpageApi={props.fullpageApi}
				active={props.active}
				setActive={props.setActive}
			/>
			<div
				className={`container h-full mx-auto ${
					props.active ? 'filter blur-[3px]' : ''
				} flex items-center justify-center transition-all ease-in-out duration-100`}
			>
				<div>
					<h1 className=''>Hi, my name is</h1>
					<h2>Scott Duller.</h2>
					<h3 className='opacity-70'>
						I build web applications.
					</h3>
					<p className='opacity-70'>
						I am a full-stack developer specialising in
						creating web applications with Javascript,
						ReactJS and NodeJS. I am currently looking for
						work after graduating university.
					</p>
					<div className='flex flex-row mt-10 gap-4'>
						<a className='heroBtn' href='#about'>
							Learn More
						</a>
						<a className='heroBtn' href='#contact'>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
