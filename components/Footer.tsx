import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const wrapper = classNames('bg-secondary w-screen select-none');

	const container = classNames(
		'container flex flex-row flex-wrap justify-between items-center py-4'
	);

	const nav = classNames(
		'w-full relative flex flex-row justify-left md:justify-between items-center text-white'
	);

	const navLinksContainer = classNames('flex items-center ');
	const navLinks = classNames(
		'flex items-center p-0 m-0 list-none '
	);
	const navLink = classNames(
		'hidden md:block relative  my-0 ml-[20px] opacity-50 transition-opacity font-normal '
	);
	const copy = classNames(
		'relative my-0 opacity-50 transition-opacity font-normal '
	);

	return (
		<div className={wrapper}>
			<header className={container}>
				<nav className={nav}>
					<div className={navLinksContainer}>
						<ul className={navLinks}>
							<li className={navLink}>
								<Link href='about'>about</Link>
							</li>
							<li className={navLink}>
								<Link href='portfolio'>
									portfolio
								</Link>
							</li>
							<li className={navLink}>
								<Link href='contact'>contact</Link>
							</li>
						</ul>
					</div>
					<p className={copy}>&copy; 2022 Scott Duller </p>
				</nav>
			</header>
		</div>
	);
};

export default Footer;
