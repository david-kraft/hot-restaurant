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


// Routes 
// ============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});



// Displays all tables in API 
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

// Displays wait list in API
app.get("/api/waitlist", function (req, res) {
    return res.json(reservations);
});



// Create New Reservations - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.unique_id = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});








app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


