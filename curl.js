const request = require('request');

module.exports = function (url, done) {
  request(url, function (err, response, body) {
  if (err) {
    done('Something went wrong!');
  }
  done(`statusCode: ${response} ${response.statusCode}`); // Print the response status code if a response was received
  done(`body: ${body}`); // Print the HTML for the Google homepage.
});
};
