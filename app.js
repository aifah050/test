const log = console.log;
// document.querySelector('.bullet').addEventListener(
// 	'click',
// 	(e) => {
// 		e.target.classList.toggle('redtext');
// 	},
// 	true
// );

// document.getElementById('b1').addEventListener('click', (e) => {
// 	e.target.classList.toggle('redtext');
// });
// document.getElementById('b2').addEventListener('click', (e) => {
// 	e.target.classList.toggle('redtext');
// });
// document.getElementById('b3').addEventListener('click', (e) => {
// 	e.target.classList.toggle('largeFont');
// 	// e.stopPropagation();
// });

// document.querySelector('#grandparent').addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('grandparent');
// 	},
// 	true
// );
// document.querySelector('#parent').addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('parent');
// 	},
// 	true
// );
// document.querySelector('#child').addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('child');
// 	},
// 	true
// );

// const queryStr = 'name=John&age=45&occupation=software+developer&price>30';

// const url = new URL('https://www.google.com/');
// log(url);
// const usp = new URLSearchParams({
// 	name: 'Kojo',
// 	age: 50,
// 	occupation: 'software developer',
// });
// log(usp);

// const my_name = usp.get('name');

// log(my_name);
// for (const [key, value] of usp) {
// 	log(key, value);
// }
// console.log(usp.toString());
// class CustomAPIError extends Error {
// 	constructor(message, status_code) {
// 		super(message);
// 		this.status_code = status_code;
// 	}
// }
// console.log(new Error('Sorry', 401));
// const create_custom_error = (message, status_code) => {
// 	return new CustomAPIError(message, status_code);
// };
// console.log(create_custom_error('Task not found', 404));

// function Car(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// }

// function Carr(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// }
// const auto = new Carr('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
// expected output: true

// console.log(auto instanceof Object);
// expected output: true

// async function namee(params) {
// 	await new Promise((resolve) => setTimeout(resolve, 5000));
// 	log('running');
// }

// function testt() {
// 	console.log('second');
// }

// basic vanilla javaScript lodash times method clone
// let times = (count, func) => {
// 	let i = 0,
// 		results = [];
// 	while (i < count) {
// 		results.push(func(i));
// 		i += 1;
// 	}

// 	return results;
// };

// const arr = times(4, (i) => i);
// console.log(arr);

// const test = ['Fufu', 'Rice'];
// const a = 'hjhnm';
// console.log(Array.isArray(a));
const data = [
	{
		respondentDetails: {},
		volunteerDetails: {},
		surveyDetails: {},
		answers: [
			{
				questionIndex1: ['yes', 'no', 'nie'],
				questionIndex2: ['yes', 'no', 'nie'],
			},
		],
	},
	{
		respondentDetails: '',
		volunteerDetails: '',
		surveyDetails: {},
		answers: [
			{
				questionIndex1: ['yes', 'no', 'nie'],
				questionIndex2: ['yes', 'no', 'nie'],
			},
		],
	},
];

//Group with reduce

const response = [
	{
		answer: 'No',
		answerAt: '2021-12-16T12:18:13.071536',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: '4376da96f15b46d99ac2400090131eae',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Rice',
		answerAt: '2021-12-16T12:18:13.071583',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: '53522354650f4b558c7ec53238e7db8f',
		question: 'Choose at least 1 from these foods',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Cassava',
		answerAt: '2021-12-16T12:18:13.07156',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: '8bbe0c739f954a579610e7d9ec96e6d3',
		question: 'Choose at least 1 from these foods ',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Maize',
		answerAt: '2021-12-16T12:18:13.071571',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: '8cd45572245c4251a5548b6e26e5c79e',
		question: 'Choose at least 1 from these foods ',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Neither',
		answerAt: '2021-12-16T12:18:13.071548',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: 'c53a02f430a54c798dc51ba14cfdfbe5',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Yes',
		answerAt: '2021-12-16T12:18:13.071512',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0549798150',
		canvassContactPollingStation: null,
		id: 'e70de5d89c1c48529ea7e1ee76c26c49',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},

	{
		answer: 'No',
		answerAt: '2021-12-16T12:18:13.071536',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: '4376da96f15b46d99ac2400090131eae',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Rice',
		answerAt: '2021-12-16T12:18:13.071583',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: '53522354650f4b558c7ec53238e7db8f',
		question: 'Choose at least 1 from these foods',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Cassava',
		answerAt: '2021-12-16T12:18:13.07156',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: '8bbe0c739f954a579610e7d9ec96e6d3',
		question: 'Choose at least 1 from these foods ',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Maize',
		answerAt: '2021-12-16T12:18:13.071571',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: '8cd45572245c4251a5548b6e26e5c79e',
		question: 'Choose at least 1 from these foods ',
		questionId: 'd3d7550666534adf9cd114794e75083f',
		questionIndex: 2,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Neither',
		answerAt: '2021-12-16T12:18:13.071548',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: 'c53a02f430a54c798dc51ba14cfdfbe5',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
	{
		answer: 'Yes',
		answerAt: '2021-12-16T12:18:13.071512',
		canvassContactId: null,
		canvassContactName: null,
		canvassContactPhone: '0572643050',
		canvassContactPollingStation: null,
		id: 'e70de5d89c1c48529ea7e1ee76c26c49',
		question: 'Do you like fufu?',
		questionId: 'c6142e52f9274af8b9edf7cb8ae969af',
		questionIndex: 1,
		subTitle:
			'Another Sample Survey Another Sample Survey Another Sample Survey Another Sample Survey',
		surveyId: 'ed3290dd15614d94b2655bd9d4dddbfc',
		surveyTitle: 'new if two questions',
		volunteerId: null,
		volunteerIdName: null,
	},
];

const products = [
	{ color: 'blue', type: 'tie' },
	{ color: 'blue', type: 'pants' },
	{ color: 'red', type: 'tie' },
];

// const groupBy = (key, arr) =>
// 	arr.reduce(
// 		(cache, product) => ({
// 			...cache,
// 			[product[key]]:
// 				product[key] in cache ? cache[product[key]].concat(product) : [product],
// 		}),
// 		{}
// 	);

// const groupByContact = groupBy('canvassContactPhone', response);
// let groupedByQuestionIndx = [];
// for (const property in groupByContact) {
// 	const singleContactGroup = groupByContact[property];
// 	const singleGroupByIndex = groupBy('questionIndex', singleContactGroup);
// 	groupedByQuestionIndx.push({ [property]: singleGroupByIndex });
// }
// log(groupedByQuestionIndx);
function normaliseResponse(responseArr) {
	const groupBy = (key, arr) =>
		arr.reduce(
			(cache, product) => ({
				...cache,
				[product[key]]:
					product[key] in cache
						? cache[product[key]].concat(product)
						: [product],
			}),
			{}
		);

	const groupByContact = groupBy('canvassContactPhone', responseArr);
	let groupedByQuestionIndx = [];
	for (const property in groupByContact) {
		const singleContactGroup = groupByContact[property];
		const singleGroupByIndex = groupBy('questionIndex', singleContactGroup);
		groupedByQuestionIndx.push({ [property]: singleGroupByIndex });
	}

	log('return', groupedByQuestionIndx);
	return groupedByQuestionIndx;
}
normaliseResponse(response);
