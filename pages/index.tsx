import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';

import ReactFullpage from '@fullpage/react-fullpage';
import Projects from '../components/Projects';
import Archives from '../components/Archives';
import Contact from '../components/Contact';
import { useState } from 'react';

const Index = () => {
	const anchors = [
		'welcome',
		'about',
		'projects',
		'archives',
		'contact',
	];

	const [active, setActive] = useState(false);

	return (
		<>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<ReactFullpage
				anchors={anchors}
				navigation
				navigationTooltips={anchors.map(
					(anchor) =>
						anchor.charAt(0).toUpperCase() +
						anchor.slice(1)
				)}
				scrollOverflow
				verticalCentered={false}
				render={({ state, fullpageApi }) => {
					return (
						<>
							<Hero
								fullpageApi={fullpageApi}
								active={active}
								setActive={setActive}
							/>
							<About />
							<Projects />
							<Archives />
							<Contact />
						</>
					);
				}}
			/>
		</>
	);
};

export default Index;
