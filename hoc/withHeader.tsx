import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';
import classNames from 'classnames';
import { Subtract } from 'utility-types';

interface Props {
	title: string;
}

function withHeader<T extends Props>(
	Component: React.ComponentType<T>
) {
	return class extends React.Component<Subtract<T, Props>> {
		state = { active: false, windowWidth: 0 };
		
    handleResize() {
			this.setState({ windowWidth: window.innerWidth });
		}
		componentDidMount(): void {
			window.addEventListener('resize', this.handleResize);
		}
		componentDidUpdate(): void {
			if (this.state.active) {
				if (this.state.windowWidth < 768) {
					disableBodyScroll(document.body);
				} else {
					this.setState({ active: false });
				}
			} else {
				enableBodyScroll(document.body);
			}
		}
		componentWillUnmount(): void {
			window.removeEventListener('resize', this.handleResize);
		}
		render(): React.ReactNode {
			const bodyContainer = classNames(
				'container transition-all duration-500',
				{
					blur: this.state.active,
				}
			);
			const interactionBlock = classNames(
				'fixed top-0 left-0 right-0 bottom-0 h-full',
				{ hidden: !this.state.active }
			);
			const handleClickOff = () => {
				this.setState({ active: false });
			};
			const setActive = ({
				isActive,
			}: {
				isActive: boolean;
			}) => {
				this.setState({ active: isActive });
			};
			return (
				<div>
					<Head>
						<title>{title}</title>
					</Head>
					<div className={bodyContainer}>
						<div
							className={interactionBlock}
							onClick={handleClickOff}
						></div>
						{WrappedComponent}
					</div>
					<Header
						active={this.state.active}
						setActive={setActive}
					/>
				</div>
			);
		}
	};
}

export default withHeader;
