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
const client = yelp.client(access_token);



const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
});

/* function to get all specialties related to physicans */
let specialties = [];
(() => {
	const categories = require('./dist/categories.json');
	let count = 0;
	categories.forEach((category) => {
		if (category.parents && category.parents.indexOf("physicians") > -1) {
			specialties.push({id: count++, name: category.title})
		}
	})
})();

// API Routes

// initial request, get all 'specialties' from THIS server
app.get('/api/specialtyList', (req, res) => {
	res.json(specialties);
});

// get doctors by specialty, area and rating from yelp api
app.get('/api/findDoctors/:specialtyName/:area/:rating', (req, res) => {
	const searchRequest = {
	"term": req.params.specialtyName,
	"location": req.params.area
	};
	console.log(searchRequest);
	client.search(searchRequest).then(response => {
		const allDoctors = response.jsonBody.businesses.filter((doctor) => (doctor.rating >= req.params.rating));
    res.json(allDoctors);
	});
});

// get one single doctor detail information and similar doctors from yelp api
app.get('/api/doctorName/:name', (req, res) => {
	const searchRequest = {
	"term": req.params.name
	};
	console.log(searchRequest);
	client.search(searchRequest).then(response => {
		console.log(response.jsonBody.businesses);
    res.json("hi");
	});
})

// get other routes, send back 404 info
app.get('*', (req, res) => {
	console.log("hi, it's 404")
	res.status(404).send('Sorry, we cannot find that!');
});

app.listen(port);
console.log(`API running at localhost:${port}`);
