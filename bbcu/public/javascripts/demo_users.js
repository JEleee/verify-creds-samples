/**
 © Copyright IBM Corp. 2019, 2019

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const demo_users = [
	{
		name: 'Alice Garcia',
		attributes: {
			first_name: 'Alice',
			last_name: 'Garcia',
			phone_number: '123-456-7000',
			email: 'alice@example.com',
			agent_name: 'alice',
			password: 'alicepw',
			confirm_password: 'alicepw'
		}
	},
	{
		name: 'John Doe',
		attributes: {}
	},
	{
		name: 'Andrew Adams',
		attributes: {
			first_name: 'Andrew',
			last_name: 'Adams',
			phone_number: '123-456-7891',
			email: 'aadams@example.com'
		}
	},
	{
		name: 'Allison Hunter',
		attributes: {
			first_name: 'Allison',
			last_name: 'Hunter',
			phone_number: '123-456-7892',
			email: 'ahunter@example.com'
		}
	},
	{
		name: 'Alvin Hwang',
		attributes: {
			first_name: 'Alvin',
			last_name: 'Hwang',
			phone_number: '123-456-7893',
			email: 'ahwang@example.com'
		}
	},
	{
		name: 'Adrian Martin',
		attributes: {
			first_name: 'Adrian',
			last_name: 'Martin',
			phone_number: '123-456-7894',
			email: 'amartin@example.com'
		}
	},
	{
		name: 'Brandon Harris',
		attributes: {
			first_name: 'Brandon',
			last_name: 'Harris',
			phone_number: '123-456-7895',
			email: 'bharris@example.com'
		}
	}
];

const default_attributes = {
	'email': 'jdoe@example.com',
	'password': 'password',
	'phone_number': '123-456-7890',

	'first_name': 'John',
	'middle_name': '_',
	'last_name': 'Doe',

	'dob': '12-12-2012',
	'ssn': '123456789',

	'address_line_1': '123 Fake St',
	'address_line_2': '_',
	'state': 'TX',
	'postal_code': '12345',

	'account_number': 'abcdefgh12345567890',
	'institution_number': '123123abcabc',
	'transit_number': 'abc123abc123',

	'agent_name': ''
};

$(document).ready(() => {
	let html = '';
	for (const index in demo_users) {
		const user = demo_users[index];

		html += `<option value="${index}">${user.name}</option>`;
	}
	$('#userTemplate').html(html);

	$('#userTemplateForm').submit((event) => {
		event.preventDefault();

		const index = parseInt($('#userTemplate').val());
		const user_data = demo_users[index];
		console.log(`User data: ${JSON.stringify(user_data)}`);

		for (const attr_name in default_attributes) {
			user_data.attributes[attr_name] = user_data.attributes[attr_name] ? user_data.attributes[attr_name] : default_attributes[attr_name];
			$(`input[name="${attr_name}"]`).val(user_data.attributes[attr_name]);
		}
		$('input[name="email"]').val(user_data.attributes.email ? user_data.attributes.email : 'jdoe@example.com');
		$('input[name="confirm_password"]').val(user_data.attributes.password ? user_data.attributes.password : '');
		$('#autofillModal').modal('hide');
	});
});