// Select the elements to display the advice ID and advice text
const adviceId = document.getElementById('advice_id');
const advice = document.getElementById('advice');

// API endpoint to fetch random advice
const link = 'https://api.adviceslip.com/advice';

// Asynchronous function to fetch and display advice
async function getAdvice() {
    try {
        // Fetch the advice from the API
        const response = await fetch(link);
        
        // Parse the JSON response
        const data = await response.json();
        
        // Display the advice ID and advice text in the respective elements
        adviceId.textContent = data.slip.id;
        advice.textContent = `“${data.slip.advice}”`;
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching advice:', error);
    }
}


// ~~ NOTE 🎤🎤 ~~\\

//  adviceId and advice are variables that store references to HTML elements with the IDs advice_id and advice, respectively. These elements will display the advice ID and the advice text fetched from the API.

// link stores the URL of the API endpoint. This particular API provides random advice in JSON format. When a request is made to this URL, it returns a random piece of advice.

// getAdvice is an asynchronous function, indicated by the async keyword. Asynchronous functions allow for non-blocking code execution, meaning the function can wait for operations like fetching data from an API without stopping other code from running.

// The fetch function sends a request to the API endpoint specified in link. The await keyword pauses the function until the request is completed and a response is received.

// The response.json() method parses the response data as JSON. This method also returns a promise, so await is used to wait for the parsing to complete. The parsed JSON data is stored in the data variable.