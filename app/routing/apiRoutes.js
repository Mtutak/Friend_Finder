var friendsData = require("../data/friends.js");
//Routing
module.exports = function (app) {
    //visit page shown JSON
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate Javascript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        var currentUserData = parseInt(req.body.scores);
        console.log(req.body.scores);
        console.log(friendsData[0].scores);
        console.log(currentUserData.length * friendsData.length);
        // function compareScores(){
        //     currentUserData[i] - friendsData.scores[i];
        // }
        for (i = 0; i < currentUserData.length; i++) {}
        // friendsData.push(req.body);
        //incoming survey results and handle compatibility logic
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // if (true) {
        //     res.json(true);
        // } else {
        //     res.json(false);
        // }
    });
};