require("dotenv").config();
// const commandArray = ["concert-this","spotify-this-song","movie-this","do-what-it-says"];
const fs = require("fs");
const request = require('request');
const commandType = process.argv[2];
var spotify = new spotify(keys.spotify);
    switch (commandType){
    case 'concert-this':
    concertThis ();
    break;
    case 'spotify-this-song':
    spotifySong ();
    break;
    case 'movie-this':
    movieThis ();
    break;
    case 'do-what-it-says':
    doWhatever ();
    break;
    }
function concertThis(){
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    let artist = process.argv[3];
        data.split(",");
}
//process.argv.slice(2).join(" ");
function spotifySong(){
    let trackQuery;
    spotify.search({ type: 'track', query: trackQuery },function (error, data) {
        if (err) throw (err)
        else { 
            let results = {"Song Name": songName,
                           "Album Name": data.tracks.items[0].album.name,
                           "Artist's Name": data.tracks.items[0].album.artists[0],}
                           console.log(results)
        }
    });
}


function movieThis(){
    let movieName = parseFloat(process.argv.slice(2).join(" "))
    let queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";

    request(queryURL, function (err, response, body) {
        console.log("Movie Title:" + movie.Title);
        console.log("Release Year:" + movie.Year);
        console.log("Rating:" + movie.imdbRating);
        console.log("Plot:" + movie.Plot)
    }
    )};
function doWhatever(){
}

// var request = require("request");

// // We then run the request module on a URL with a JSON
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });