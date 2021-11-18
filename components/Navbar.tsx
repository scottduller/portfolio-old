import Link from 'next/link';
import { useEffect } from 'react';

import { gsap } from 'gsap';

import {
	FaLinkedin,
	FaInstagram,
	FaFacebookSquare,
} from 'react-icons/fa';

const Navbar = () => {
	useEffect(() => {
		gsap.from('#logo', {
			x: -100,
			opacity: 0,
			duration: 2,
			ease: 'power3.out',
		});

		gsap.from('#socials', {
			x: 100,
			opacity: 0,
			duration: 2,
			ease: 'power3.out',
		});
	}, []);

	return (
		<header className='absolute w-screen'>
			<div className='container flex items-center justify-between h-20 mx-auto px'>
				<div
					id='logo'
					className='text-2xl font-black tracking-widest'
				>
					<Link href='/'>SCOTT DULLER</Link>
				</div>
				<div
					id='socials'
					className='flex items-center space-x-4'
				>
					<a href='https://www.facebook.com/S.O.Duller'>
						<FaFacebookSquare size={20} />
					</a>
					<a href='https://www.instagram.com/scott.duller/'>
						<FaInstagram size={20} />
					</a>
					<a href='https://www.linkedin.com/in/scottduller/'>
						<FaLinkedin size={20} />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
