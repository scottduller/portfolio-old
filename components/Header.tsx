import React from 'react';
import classNames from 'classnames';
import { motion, Variants } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Props = {
	active: boolean;
	setActive: any;
};

const Header = ({ active, setActive }: Props) => {
	const handleCheck = () => {
		setActive(!active);
	};

	const handleNav = () => {
		setActive(false);
	};

	const wrapper = classNames(
		'bg-secondary fixed w-screen select-none top-0 left-0 right-0'
	);
	const container = classNames(
		'container  flex flex-row flex-wrap justify-between items-center py-4'
	);
	const nav = classNames(
		'w-full relative flex flex-row justify-between items-center text-white'
	);
	const logo = classNames('flex gap-[20px] items-center group');
	const logoContent = classNames(
		'hidden sm:flex flex-col font-black'
	);
	const logoJob = classNames('text-xs font-normal opacity-75');
	const navLinksContainer = classNames(
		'hidden md:flex items-center'
	);
	const navLinks = classNames(
		'flex items-center p-0 m-0 list-none'
	);
	const navLink = classNames(
		'relative my-0 mx-[10px] hover:opacity-50 transition-opacity'
	);
	const socialLinks = classNames(
		'flex justify-between items-center p-0 m-0 list-none'
	);
	const socialLink = classNames(
		'relative my-auto mx-[10px] hover:opacity-50 transition-opacity'
	);
	const hamburger = classNames(
		'hamburger relative flex md:hidden flex-col hover: w-[50px] cursor-pointer py-[10px] pl-[20px]  z-[10]'
	);
	const hamburgerLine = classNames('hamburgerLine', {
		active: active,
	});
	const sideNavContainer = classNames(
		{ 'translate-x-full': !active, 'translate-x-0': active },
		'flex w-full sm:w-3/5 z-[9] justify-center items-center bg-tertiary overflow-x-hidden fixed top-0 right-0 h-screen md:hidden whitespace-nowrap shadow-2xl transition-transform duration-500'
	);
	const sideNav = classNames(
		'w-full flex flex-col items-center justify-between text-white '
	);
	const sideLogo = classNames(
		'flex flex-col sm:flex-row gap-[20px] items-center group'
	);
	const sideLogoContent = classNames(
		'flex flex-col font-black items-center sm:items-start'
	);
	const sideLinks = classNames(
		'flex flex-col justify-between items-center p-0 m-0 mb-10 list-none'
	);
	const sideLink = classNames(
		'relative mt-0 mb-[40px] mx-auto hover:opacity-50 transition-opacity'
	);
	const sideSocials = classNames(
		'flex flex-row justify-center items-center p-0 m-0 list-none'
	);
	const sideSocial = classNames(
		'relative my-0 mx-[20px] hover:opacity-50 transition-opacity'
	);

	const linkVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 50,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	return (
		<>
			<div className={wrapper}>
				<header className={container}>
					<nav className={nav}>
						<a href=''>
							<div className={logo}>
								<div className='logo' />
								<div className={logoContent}>
									<h1 className='text-lg'>
										Scott Duller
									</h1>
									<span className={logoJob}>
										Web Developer
									</span>
								</div>
							</div>
						</a>
						<div className={navLinksContainer}>
							<ul className={navLinks}>
								<li className={navLink}>
									<a
										className='font-normal'
										href='about'
									>
										about
									</a>
								</li>
								<li className={navLink}>
									<a
										className='font-normal'
										href='portfolio'
									>
										portfolio
									</a>
								</li>
								<li className={navLink}>
									<a
										className='font-normal'
										href='contact'
									>
										contact
									</a>
								</li>
							</ul>
						</div>
						<div className={navLinksContainer}>
							<ul className={socialLinks}>
								<li className={socialLink}>
									<a href='https://www.facebook.com/S.O.Duller'>
										<FaFacebookF size='1.75em' />
									</a>
								</li>
								<li className={socialLink}>
									<a href='https://www.linkedin.com/in/scottduller/'>
										<FaLinkedinIn size='1.75em' />
									</a>
								</li>
								<li className={socialLink}>
									<a href='https://github.com/scottduller'>
										<FaGithub size='1.75em' />
									</a>
								</li>
							</ul>
						</div>
						<label className={hamburger} htmlFor='check'>
							<input
								className='hamburgerCheck'
								type='checkbox'
								id='check'
								checked={active}
								onChange={handleCheck}
							/>
							<span
								className={`${hamburgerLine} w-2/4`}
							></span>
							<span
								className={`${hamburgerLine} w-full`}
							></span>
							<span
								className={`${hamburgerLine} w-3/4`}
							></span>
						</label>

						<aside
							className={sideNavContainer}
							id='sidebar'
						>
							<nav className={sideNav}>
								<a className='mb-[50px]' href=''>
									<div className={sideLogo}>
										<div className='logo' />
										<div
											className={
												sideLogoContent
											}
										>
											<h1 className='text-lg'>
												Scott Duller
											</h1>
											<span className={logoJob}>
												Web Developer
											</span>
										</div>
									</div>
								</a>
								<ul className={sideLinks}>
									<li className={sideLink}>
										<a
											href='about'
											onClick={handleNav}
										>
											about
										</a>
									</li>
									<li className={sideLink}>
										<a
											href='portfolio'
											onClick={handleNav}
										>
											portfolio
										</a>
									</li>
									<li className={sideLink}>
										<a
											href='contact'
											onClick={handleNav}
										>
											contact
										</a>
									</li>
								</ul>
								<ul className={sideSocials}>
									<li className={sideSocial}>
										<a
											onClick={handleNav}
											href='https://www.facebook.com/S.O.Duller'
										>
											<FaFacebookF size='1.5em' />
										</a>
									</li>
									<li className={sideSocial}>
										<a
											onClick={handleNav}
											href='https://www.linkedin.com/in/scottduller/'
										>
											<FaLinkedinIn size='1.5em' />
										</a>
									</li>
									<li className={sideSocial}>
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
		</>
	);
};

export default Header;
