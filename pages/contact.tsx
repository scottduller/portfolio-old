import classNames from 'classnames';
import Head from 'next/head';
import Contact from '../components/Contact';

const contact = () => {
	const section = classNames('h-screen w-full flex items-center');

	return (
		<>
			<Head>
				<title>Scott Duller | Contact Me</title>
			</Head>
			<Contact />
		</>
	);
};

export default contact;
