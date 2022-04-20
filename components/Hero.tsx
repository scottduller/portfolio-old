import React from 'react';
import SplitText from './SplitText';

const Hero = () => {
	return (
		<section>
			<div>
				<h1>
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
				<p>Full-Stack Web Developer and Tinkerer</p>
				<div className='mb-10'></div>
				<a href='contact'>
					<button className='ctaBtn'>
						Get in Contact!
					</button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
