import classNames from 'classnames';
import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';

interface ContactFormProps {}

const ContactForm: FunctionComponent<ContactFormProps> = () => {
	const initialState = {
		name: '',
		email: '',
		msg: '',
	};

	const [payload, setPayload] = useState(initialState);

	const onChange = (e: { target: { name: any; value: any } }) => {
		setPayload({ ...payload, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		if (res.status === 200) {
			setPayload(initialState);
		}
	};

	const wrapper = classNames(
		'md:w-[45rem] w-full mx-auto py-12 mb-8'
	);

	const formTitle = classNames('text-3xl text-white font-bold');

	const formWrapper = classNames(
		'mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start'
	);

	const form = classNames('grid grid-cols-1 gap-6');

	const formLabel = classNames('block');

	const formSpan = classNames('text-white opacity-50');

	const formInput = classNames('mt-1 block w-full');

	const { name, email, msg } = payload;

	return (
		<div className={wrapper}>
			<h2 className={formTitle}>Email Me.</h2>
			<div className={formWrapper}>
				<div className={form}>
					<label className={formLabel}>
						<span className={formSpan}>Name</span>
						<input
							className={formInput}
							type='text'
							name='name'
							value={name}
							onChange={onChange}
						/>
					</label>
					<label className={formLabel}>
						<span className={formSpan}>
							Email Address
						</span>
						<input
							className={formInput}
							type='email'
							name='email'
							value={email}
							onChange={onChange}
						/>
					</label>
				</div>
				<div className={form}>
					<label className={formLabel}>
						<span className={formSpan}>Message</span>
						<textarea
							className={formInput}
							rows={5}
							name='msg'
							value={msg}
							onChange={onChange}
						/>
					</label>
					<a className='mt-3 md:ml-auto' href='contact '>
						<motion.button
							className='ctaBtn w-full md:w-auto '
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={onSubmit}
						>
							Send email
						</motion.button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
