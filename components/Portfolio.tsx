import classNames from 'classnames';
import { FunctionComponent } from 'react';
import SplitText from './SplitText';

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
	const section = classNames('w-full pt-[4em] flex flex-col gap-8');
	const title = classNames('flex flex-col-reverse');
	const subTitle = classNames(
		'text-3xl text-white font-bold opacity-75'
	);
	const paragraph = classNames(
		'w-full md:w-1/3 text-md text-white opacity-50'
	);

	return (
		<section className={section}>
			<h1 className={title}>
				<SplitText
					textComponent='Portfolio.'
					textStyling='headerContainer'
					letterStyling='headerStyling'
					reverse
				/>
			</h1>
			<h2 className={subTitle}>
				Here are a few of latest and greatest projects.
			</h2>
			<p className={paragraph}>
				I am on beginning of my web development career.
				However, I spend any spare time I have working on my
				own passion projects including front-end, back-end and
				full-stack apps{' '}
			</p>
		</section>
	);
};

export default Portfolio;
