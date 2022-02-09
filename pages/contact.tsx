import React from 'react';

const contact = () => {
	return (
		<div>
			<Head>
				<title>Scott Duller | Full Stack Web Developer</title>
			</Head>
			<div className={bodyContainer}>
				<div
					className={interactionBlock}
					onClick={handleClickOff}
				></div>
				<Hero />
			</div>
			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default contact;
