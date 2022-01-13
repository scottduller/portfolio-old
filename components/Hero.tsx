import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import SplitText from './SplitText';

const Hero = () => {
	const section = classNames(
		'h-screen w-full flex items-center py-[100px]'
	);
	const title = classNames('flex flex-col-reverse');
	const tagLine = classNames('text-white ml-1 opacity-50 z-[-1]');

	return (
		<section className={section}>
			<div>
				<h1 className={title}>
					<SplitText
						textComponent='Web&nbsp;Developer'
						textStyling='headerContainer'
						letterStyling='headerStyling'
						reverse
					/>
					<div className='mb-1'></div>
					<SplitText
						textComponent="I'm&nbsp;Scott"
						textStyling='headerContainer'
						letterStyling='headerStyling'
						reverse
					/>
					<SplitText
						textComponent='Hey!'
						textStyling='headerContainer'
						letterStyling='headerStyling'
						reverse
					/>
					<div className='mb-1'></div>
				</h1>
				<div className='mb-4'></div>
				<p className={tagLine}>
					Full-Stack Web Developer and Tinkerer
				</p>
				<div className='mb-10'></div>
				<a href='/contact'>
					<motion.button
						className='ctaBtn'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Get in Contact!
					</motion.button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
