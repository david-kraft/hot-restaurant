// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Reservation Data
// ===========================================================
var reservations = [
    {
        name: "Jonathon",
        phone_number: 7153237601,
        email: "jonathon.engelien@gmail.com",
        unique_id: 1
    }
];

var waitlist = []


// Routes 
// =========================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});



// Displays all tables in API 
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

// Displays wait list in API
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});



// Create New Reservations - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;


    console.log(newReservation);

    if (reservations.length >= 5) {
       waitlist.push(newReservation); 
    } else {
        reservations.push(newReservation)
    };

    res.json(newReservation);
});








app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


