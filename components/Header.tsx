import React, { useState } from 'react';
import Image from 'next/image';
import {
	FaFacebook,
	FaFacebookF,
	FaFacebookSquare,
	FaGithub,
	FaLinkedin,
	FaLinkedinIn,
} from 'react-icons/fa';

const Header = (props: any) => {
	const handleCheck = () => {
		props.setActive(!props.active);
	};

	const handleNav = () => {
		props.setActive(false);
	};

	return (
		<div className='bg-secondary fixed w-screen select-none top-0 left-0 right-0'>
			<header className='container  flex flex-row flex-wrap justify-between items-center py-4'>
				<nav className='w-full relative flex flex-row justify-between items-center text-white'>
					<a href=''>
						<div className='flex gap-[20px] items-center group'>
							<div className='logo' />
							<div className='hidden sm:flex flex-col font-black '>
								<h1 className='text-lg'>
									Scott Duller
								</h1>
								<span className='text-xs font-normal opacity-75'>
									Web Developer
								</span>
							</div>
						</div>
					</a>
					<div className='hidden md:flex items-center'>
						<ul className='flex items-center p-0 m-0 list-none'>
							<li className='relative my-0 mx-[10px] hover:opacity-50 transition-opacity'>
								<a
									className='font-normal'
									href='about'
								>
									about
								</a>
							</li>
							<li className='relative my-0 mx-[10px] hover:opacity-50 transition-opacity'>
								<a
									className='font-normal'
									href='portfolio'
								>
									portfolio
								</a>
							</li>
							<li className='relative my-0 mx-[10px] hover:opacity-50 transition-opacity'>
								<a
									className='font-normal'
									href='contact'
								>
									contact
								</a>
							</li>
						</ul>
					</div>
					<div className='hidden md:flex items-center'>
						<ul className='flex justify-between items-center p-0 m-0 list-none'>
							<li className='relative my-auto mx-[10px] hover:opacity-50 transition-opacity'>
								<a href='https://www.facebook.com/S.O.Duller'>
									<FaFacebookF size='1.75em' />
								</a>
							</li>
							<li className='relative my-auto mx-[10px] hover:opacity-50 transition-opacity'>
								<a href='https://www.linkedin.com/in/scottduller/'>
									<FaLinkedinIn size='1.75em' />
								</a>
							</li>
							<li className='relative my-auto mx-[10px] hover:opacity-50 transition-opacity'>
								<a href='https://github.com/scottduller'>
									<FaGithub size='1.75em' />
								</a>
							</li>
						</ul>
					</div>
					<label
						className='hamburger relative flex md:hidden flex-col hover: w-[50px] cursor-pointer py-[10px] pl-[20px]  z-[10]'
						htmlFor='check'
					>
						<input
							className='hamburgerCheck'
							type='checkbox'
							id='check'
							checked={props.active}
							onChange={handleCheck}
						/>
						<span
							className={`hamburgerLine w-2/4 ${
								props.active && 'active'
							}`}
						></span>
						<span
							className={`hamburgerLine w-full ${
								props.active && 'active'
							}`}
						></span>
						<span
							className={`hamburgerLine w-3/4 ${
								props.active && 'active'
							}`}
						></span>
					</label>
					<aside
						className={`sidenav flex z-[9] justify-center items-center bg-tertiary overflow-x-hidden fixed top-0 bottom-0  h-screen ${
							props.active ? 'w-full sm:w-3/5' : 'w-0'
						} md:hidden whitespace-nowrap`}
						id='sidebar'
					>
						<nav className='w-full flex flex-col items-center justify-between text-white '>
							<a className='mb-[50px]' href=''>
								<div className='flex gap-[20px] items-center group'>
									<div className='logo' />
									<div className='hidden sm:flex flex-col font-black '>
										<h1 className='text-lg'>
											Scott Duller
										</h1>
										<span className='text-xs font-normal opacity-75'>
											Web Developer
										</span>
									</div>
								</div>
							</a>
							<ul className='flex flex-col justify-between items-center p-0 m-0 mb-10 list-none'>
								<li className='relative mt-0 mb-[40px] mx-auto hover:opacity-50 transition-opacity'>
									<a
										href='about'
										onClick={handleNav}
									>
										about
									</a>
								</li>
								<li className='relative mt-0 mb-[40px] mx-auto hover:opacity-50 transition-opacity'>
									<a
										href='portfolio'
										onClick={handleNav}
									>
										portfolio
									</a>
								</li>
								<li className='relative mt-0 mb-[40px] mx-auto hover:opacity-50 transition-opacity'>
									<a
										href='contact'
										onClick={handleNav}
									>
										contact
									</a>
								</li>
							</ul>
							<ul className='flex flex-row justify-center items-center p-0 m-0 list-none'>
								<li className='relative my-0 mx-[20px] hover:opacity-50 transition-opacity'>
									<a
										onClick={handleNav}
										href='https://www.facebook.com/S.O.Duller'
									>
										<FaFacebookF size='1.5em' />
									</a>
								</li>
								<li className='relative my-0 mx-[20px] hover:opacity-50 transition-opacity'>
									<a
										onClick={handleNav}
										href='https://www.linkedin.com/in/scottduller/'
									>
										<FaLinkedinIn size='1.5em' />
									</a>
								</li>
								<li className='relative my-0 mx-[20px] hover:opacity-50 transition-opacity'>
									<a
										onClick={handleNav}
										href='https://github.com/scottduller'
									>
										<FaGithub size='1.5em' />
									</a>
								</li>
							</ul>
						</nav>
					</aside>
				</nav>
			</header>
		</div>
	);
};

export default Header;
