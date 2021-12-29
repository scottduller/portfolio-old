import React from 'react';
import SplitText from './SplitText';

const Hero = () => {
	return (
		<div className='h-screen w-full'>
			<section className='h-full flex items-center py-[100px]'>
				<div>
					<h1 className='flex flex-col-reverse'>
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
					<p className='text-white ml-1 opacity-50 z-[-1]'>
						Full-Stack Web Developer and Tinkerer
					</p>
					<div className='mb-10'></div>
					<a href='/contact'>
						<button className='ctaBtn'>
							Get in Contact!
						</button>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Hero;
