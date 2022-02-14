const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const contact = async (req: any, res: any) => {
	const { name, email, msg } = req.body;

	const message = `
  Name: ${name}\r\n
  Email: ${email}\r\n
  Message: ${msg}
`;

	const data = {
		to: 's.o.duller@gmail.com',
		from: 's.o.duller.burner@gmail.com',
		subject: `Portfolio message from ${name}`,
		text: message,
		html: message.replace(/\r\n/g, '<br />'),
	};

	await mail.send(data);

	res.status(200).json({ status: 'OK' });
};

export default contact;
