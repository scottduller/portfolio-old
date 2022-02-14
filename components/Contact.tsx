import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from './ContactForm';
import SplitText from './SplitText';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	const section = classNames(
		'w-full pt-[4em] flex flex-col gap-8 items-center'
	);
	const link = classNames(
		'relative mt-0 mx-auto flex flex-row items-center justify-center gap-2 text-white opacity-50 hover:opacity-25 transition-opacity text-xl'
	);
	const title = classNames('flex flex-col-reverse');
	return (
		<section className={section}>
			<h1 className={title}>
				<SplitText
					textComponent='Contact&nbsp;Me.'
					textStyling='headerContainer'
					letterStyling='headerStyling'
					reverse
				/>
			</h1>
			<div className='flex flex-row items-center justify-center gap-8 py-10'>
				<a
					href='https://www.facebook.com/S.O.Duller'
					className={link}
				>
					<FaFacebookF size='2.5em' />
				</a>
				<a
					href='https://www.linkedin.com/in/scottduller/'
					className={link}
				>
					<FaLinkedinIn size='2.5em' />
				</a>
				<a
					href='https://github.com/scottduller'
					className={link}
				>
					<FaGithub size='2.5em' />
				</a>
			</div>
			<hr className='border-white w-full' />
			<ContactForm />
		</section>
	);
};

export default Contact;
