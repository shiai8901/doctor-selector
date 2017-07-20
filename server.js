const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const request = require('request');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
});

const specialty = [
	{id: 0, name: 'alternative medicine'},
	{id: 1, name: 'anesthesiology'},
	{id: 2, name: 'cardiovascular health'},
	{id: 3, name: 'dematology'},
	{id: 4, name: 'emergency medicine'},
	{id: 5, name: 'endocrinology'},
	{id: 6, name: 'gastroenterology'},
	{id: 7, name: 'genetics'},
	{id: 8, name: 'hematology'},
	{id: 9, name: 'hospital medicine'},
	{id: 10, name: 'immunology/rheumatology'},
	{id: 11, name: 'infectious diseases'},
	{id: 12, name: 'mental and behavioral health'},
	{id: 13, name: 'nephrology'},
	{id: 14, name: 'obstetrics and gynecology'},
	{id: 15, name: 'oncology'},
	{id: 16, name: 'ophthalmology'},
	{id: 17, name: 'orthopaedics'},
	{id: 18, name: 'otolaryngology'},
	{id: 19, name: 'pain management'},
	{id: 20, name: 'palliative medicine'},
	{id: 21, name: 'pathology'},
	{id: 22, name: 'padiatry'},
	{id: 23, name: 'pulmonology'},
	{id: 24, name: 'radiology'},
	{id: 25, name: 'sleep medicine'},
	{id: 26, name: 'surgery'},
	{id: 27, name: 'transplant'},
	{id: 28, name: 'trauma'},
	{id: 29, name: 'urology'},
	{id: 30, name: 'vascular medicine'}
];


// API Routes
router.get('/', (req, res) => {
	res.send("hi!");
});

router.get('/specialtyList', (req, res) => {
	console.log('Response: ', specialty);
	res.json(specialty);
});

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
