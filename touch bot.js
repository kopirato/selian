const { auth } = require('./config.js');

const client = auth();

client.stream('statuses/filter', { track: '#FilterMe' }, function (stream) {
  console.log("Searching for tweets...");

  // when a tweet is found
  stream.on('data', function (tweet) {
    console.log("Found one!");
    console.log("Recieved tweet reading...", tweet.text);

    // some code to respond to the tweet

    stream.on('error', function (error) {
      console.log(error);
    });
  });
});
