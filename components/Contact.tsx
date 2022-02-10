import classNames from 'classnames';
import { FunctionComponent } from 'react';
import SplitText from './SplitText';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	const section = classNames('w-full pt-[4em] flex items-center');
	const title = classNames('flex flex-col-reverse');
	return (
		<section className={section}>
			<h1 className={title}>
				<SplitText
					textComponent='Contact&nbsp;Me'
					textStyling='headerContainer'
					letterStyling='headerStyling'
					reverse
				/>
			</h1>
		</section>
	);
};

export default Contact;
