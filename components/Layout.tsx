import {
	FunctionComponent,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';
import classNames from 'classnames';
import Header from './Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	const [active, setActive] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (active) {
			if (windowWidth < 768) {
				disableBodyScroll(document.body);
			} else {
				setActive(false);
			}
		} else {
			enableBodyScroll(document.body);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [active, windowWidth]);

	const handleClickOff = () => {
		setActive(false);
	};

	const bodyContainer = classNames(
		'container transition-all duration-500',
		{
			blur: active,
		}
	);
	const interactionBlock = classNames(
		'fixed top-0 left-0 right-0 bottom-0 h-full',
		{ hidden: !active }
	);

	return (
		<div>
			<div className={bodyContainer}>
				<div
					className={interactionBlock}
					onClick={handleClickOff}
				></div>
				{children}
			</div>
			<Header active={active} setActive={setActive} />
		</div>
	);
};

export default Layout;
