var friendsData = require("../data/friends.js");
//Routing
module.exports = function (app) {
    //visit page shown JSON
    app.get("/api/friends", function (req, res) {
        //response with all data from array of object in friends.js from require
        res.json(friendsData);
    });
    // API POST Requests
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        //setting variables
        var min;
        var sumResult = [];
        var diffArray = [];
        var counter = 0;
        //object created in form and sent with post
        console.log(req.body.scores);
        compareScores();
        //loops through calculating until goes through all friend objects
        function loopScores() {
            if (counter < friendsData.length) {
                compareScores();
            } else {
                //once reaches last friend object check for the minmum value in the sumResult array
                checkMin();
            }
        }
        //pushing score difference between survey input from post request and friends in json
        function compareScores() {
            //looping through all 10 questions calculating the absolute value difference
            for (i = 0; i < 10; i++) {
                var diff = Math.abs(req.body.scores[i] - friendsData[counter].scores[i]);
                //pushing difference of each friend's score array to an array
                diffArray.push(diff);
            }
            arrayResult();
        }
        //adding the values between the two to get a difference
        function arrayResult() {
            //adding result of array storing calculated differences
            var result = diffArray.reduce(function (a, b) {
                return a + b;
            });
            diffArray = [];
            //push additive result to another array that stores total score
            sumResult.push(result);
            //add to counter to loop through next friend in object
            counter++;
            loopScores();
        }

        function checkMin() {
            console.log(sumResult);
            //gets the index of the smallest value in the array
            min = sumResult.indexOf(Math.min.apply(Math, sumResult));
            console.log('Best match is index of ' + min);
            console.log(friendsData[min]);
            //send response of the best match
            res.json(friendsData[min]);
            //push the object sent with the request to the friend array
            friendsData.push(req.body);
        }
    });
};