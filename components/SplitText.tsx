import React from 'react';

interface Props {
	textComponent: string;
	textStyling: string;
	letterStyling: string;
	reverse: boolean;
}

const SplitText = ({
	textComponent,
	textStyling,
	letterStyling,
	reverse,
}: Props) => {
	return (
		<span className={textStyling}>
			{reverse
				? textComponent
						.split('')
						.reverse()
						.map((char, index) => {
							return (
								<span
									className={letterStyling}
									key={index}
								>
									{char}
								</span>
							);
						})
				: textComponent.split('').map((char, index) => {
						return (
							<span
								className={letterStyling}
								key={index}
							>
								{char}
							</span>
						);
				  })}
		</span>
	);
};

export default SplitText;
