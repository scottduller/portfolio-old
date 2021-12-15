import React, { useState } from 'react';

const Header = (props: any) => {
	const handleCheck = () => {
		props.setActive(!props.active);
		props.fullpageApi.setAllowScrolling(props.active);
		document.querySelector('#fp-nav').toggleAttribute('hidden');
	};

	const handleNav = () => {
		props.setActive(false);
		props.fullpageApi.setAllowScrolling(true);
		document.querySelector('#fp-nav').toggleAttribute('hidden');
	};

	return (
		<>
			<div className='bg-transparent absolute w-screen'>
				<header className='container flex flex-row flex-wrap justify-between mx-auto items-center py-2'>
					<nav className='w-full relative flex flex-row justify-between items-center'>
						<span className=''>Scott Duller</span>
						<div className='hidden md:flex items-center'>
							<ul className='flex justify-between items-center p-0 m-0 list-none'>
								<li className='relative my-0 mx-[5px]'>
									<a href='#welcome'>Welcome</a>
								</li>
								<li className='relative my-0 mx-[5px]'>
									<a href='#about'>About Me</a>
								</li>
								<li className='relative my-0 mx-[5px]'>
									<a href='#projects'>Projects</a>
								</li>
								<li className='relative my-0 mx-[5px]'>
									<a href='#archives'>Archives</a>
								</li>
								<li className='relative my-0 mx-[5px]'>
									<a href='#contact'>Contact Me</a>
								</li>
							</ul>
						</div>
						<div>
							<label
								className='relative flex flex-col bg-white w-[60px] cursor-pointer py-[10px] pl-[20px] md:hidden z-[10]'
								htmlFor='check'
							>
								<input
									className='hamburgerCheck '
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
								className={`z-[9] justify-center items-center  fixed top-0 bottom-0 right-0 w-full sm:w-3/5 h-screen bg-illuminating ${
									props.active ? 'flex' : 'hidden'
								} md:hidden`}
								id='sidebar'
							>
								<nav className='w-full'>
									<ul className='flex flex-col justify-between items-center p-0 m-0 list-none'>
										<li className='relative mt-0 mb-[20px] mx-auto'>
											<a
												href='#welcome'
												onClick={handleNav}
											>
												Welcome
											</a>
										</li>
										<li className='relative mt-0 mb-[20px] mx-auto'>
											<a
												href='#about'
												onClick={handleNav}
											>
												About Me
											</a>
										</li>
										<li className='relative mt-0 mb-[20px] mx-auto'>
											<a
												href='#projects'
												onClick={handleNav}
											>
												Projects
											</a>
										</li>
										<li className='relative mt-0 mb-[20px] mx-auto'>
											<a
												href='#archives'
												onClick={handleNav}
											>
												Archives
											</a>
										</li>
										<li className='relative mt-0 mb-[20px] mx-auto'>
											<a
												href='#contact'
												onClick={handleNav}
											>
												Contact Me
											</a>
										</li>
									</ul>
								</nav>
							</aside>
						</div>
					</nav>
				</header>
			</div>
			{/* <div
				className={`absolute top-0 right-0 h-screen flex bg-red-500 ${
					active ? 'w-screen' : 'w-0'
				} z-0 transition-all duration-150 ease-in-out`}
			></div> */}
		</>
	);
};

export default Header;
