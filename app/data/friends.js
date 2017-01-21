// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [{
    name: "Batman",
    photo: "http://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
    scores: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
}, {
    name: "Spiderman",
    photo: "http://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1dbrp13_eb85ac7e.png?region=0%2C0%2C300%2C300",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;