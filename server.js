const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const https = require('https');
const querystring = require('querystring');

const yelp = require('yelp-fusion');

const client_id = "6p3bSON7IBTS4AG4IFZG8w";
const client_secret = "qeSwDxnDBrwmMm9aMhPMfX8KAuBIdEbJkxaEby50EWzQ0WlAUlw97kK5qTfGYF5O";
const access_token = "bQzvX6U3XCb0cCxrmDRopHG2GetJRMQy062jGDqEhUaLmkbzAT_O07rNW88STrPNhpBSn_P7sNjO5ThOGof77jjbM1nNrMcYJ32V1LZJxE6SamrX_xUyANvO9BBxWXYx";



const port = process.env.PORT || 8080;
// const api_url = "https://api.yelp.com/v3/businesses/search";

app.use(express.static(__dirname + '/dist'));

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
});

const specialties = [
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
// initial request, get all 'doctors' from yelp api
router.get('/', (req, res) => {
	const searchRequest = {
	"term": 'Doctor',
	"location": 'San Francisco, CA'
	};

	const client = yelp.client(access_token);
		client.search(searchRequest).then(response => {
			const allDoctors = response.jsonBody.businesses;
	    console.log(allDoctors.length);
	    res.json(allDoctors);
		});
});

// initial request, get all 'specialties' from THIS server
router.get('/specialtyList', (req, res) => {
	// console.log('Response: ', specialties);
	res.json(specialties);
});

// get doctors by specialty from yelp api
router.get('/specialty/:specialtyName', (req, res) => {
	const specialtyName = req.params.specialtyName;
	// const specialtyId = specialties.filter((specialty) => (specialty.name === specialtyName));
	// console.log("specialtyId",specialtyId);
	const searchRequest = {
	"term": specialtyName,
	"location": 'San Francisco, CA'
	};

	const client = yelp.client(access_token);
		client.search(searchRequest).then(response => {
			const allDoctors = response.jsonBody.businesses;
	    console.log(allDoctors.length);
	    res.json(allDoctors);
		});
})

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
