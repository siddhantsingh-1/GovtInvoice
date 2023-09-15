const fetch = require('node-fetch');
// Define the URL where you want to send the POST request
const url = 'http://localhost:3000/api/v1/files';

// Define the data to be sent in the request body
const data = {
  filename: 'example.txt',
  content: 'This is the sample content of the file.'
};

// Create the request options
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type as JSON
  },
  body: JSON.stringify(data), // Convert the data to JSON format
};

// Send the POST request
fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON (if applicable)
  })
  .then(data => {
    console.log('Response data:', data); // Handle the response data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
