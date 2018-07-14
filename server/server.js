const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());

const employeelist = 
	[{
		"id": 1,
	    "name": "Ansuman",
	    "email": "ansuman@yahoo.com"
	  },
	  {
	  	"id": 2,
	    "name": "Mark",
	    "email": "mark@hotmail.com"
	  }
	];

app.get('/getEmployess', (req, res) => {
	res.status(200).json(employeelist);
});

app.post('/addEmployee', (req, res) => {
	employeelist.push({
		"id": Math.floor(Math.random() * 1000),
		...req.body
	});

	res.status(200).json({
		'msg': 'Employee added successfully!'
	})
});

app.put('/addEmployee', (req, res) => {
	employeelist.forEach(function(obj) {
	    if (obj.id === req.body.id) {
	        obj.name = req.body.name;
	        obj.email = req.body.email;
	    }
	});

	res.status(200).json({
		'msg': 'Employee updated successfully!'
	})
});

app.delete('/deleteEmployee/:empID', (req, res) => {
	for (var i = 0; i < employeelist.length; i++) {
		if (employeelist[i].id === parseInt(req.params.empID)) {
			employeelist.splice(i,1);
			break;
		}
	}

	res.status(200).json({
		'msg': 'Employee deleted successfully!'
	})
});

app.listen(port, () => console.log(`Server running on port ${port}`));