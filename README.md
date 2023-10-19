## Problem Statement: 
Build a Node.js and Express API that returns a random inspirational quote when a specific route “/get-quote” is accessed.

## Contents:
- **Client**
  - **index.html**
  - **quote.js**: The code fetches a quote from a server at "http://localhost:3000/get-quote" and displays it in an HTML element
  - **randomImg.js**: fetches a random image from the Unsplash API and sets it as the background of the site.
  - **style.css**
- Server
  - **randomQuote.js**: creates a simple Express.js server that listens on port 3000, provides a single GET endpoint at '/get-quote', and fetches a random quote from 'https://zenquotes.io/api/random' using Axios.

## Commands
Open the files in Git Bash:
1. To run all, use the following command:
```terminal
npm i
npm run all
````
2. To run client, use the following command:
```terminal
npm i
npm run client
````
2. To run server, use the following command:
```terminal
npm i
npm run server
````
