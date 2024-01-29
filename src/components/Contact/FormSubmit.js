import axios from 'axios';

const handler = async (event, context) => {
	const listId = '971b86e2e4';
	const apiKey = '87a2bd06d8b61faf97923b186ed99b80-us21';

	const body = JSON.parse(event.body);

	const { email_address, merge_fields } = body;

	if (!email_address) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: 'Please submit email address' }),
		};
	}

	try {
		const payload = {
			email_address,
			merge_fields,
			status: 'subscribed',
		};
		const { data } = await axios.post(
			`https://us21.api.mailchimp.com/3.0/lists/${listId}/members`,
			payload,
			{
				headers: {
					Authorization: `Basic ${apiKey}`,
				},
			}
		);
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.log('function error: ' + error);
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};

export default handler;
