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
        var min;
        var sumResult = [];
        var diffArray = [];
        var counter = 0;
        console.log(req.body.scores);
        compareScores();

        function loopScores() {
            if (counter < friendsData.length) {
                compareScores();
            } else {
                checkMin();
            }
        }
        //pushing score difference between survey input and friends in json
        function compareScores() {
            for (i = 0; i < 10; i++) {
                var diff = Math.abs(req.body.scores[i] - friendsData[counter].scores[i]);
                diffArray.push(diff);
            }
            arrayResult();
        }
        //adding the values between the two to get a difference
        function arrayResult() {
            var result = diffArray.reduce(function (a, b) {
                return a + b;
            });
            sumResult.push(result);
            counter++;
            loopScores();
        }

        function checkMin() {
            min = sumResult.indexOf(Math.min.apply(Math, sumResult));
            console.log('Best match is index of ' + min);
            console.log(friendsData[min]);
            res.json(friendsData[min]);
            friendsData.push(req.body);
        }
    });
};