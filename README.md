# Packaging Project: 
# Evaluate a news article with Natural Language Processing 
Applying Webback, loaders, configurations

## Requirements

Building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting api, this tool give you information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

# Tools:
Node and express is the webserver and routing, and webpack is the building tool. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.

We use Jest to test.

## How to run the project

To start the webpack dev server at port 8081
` $ npm run start`

### run in development mode
` $ npm run build-dev`

### run in production mode
` $ npm run build-prod`

## Configs
We have two webpack config files 
Development mode(`webpack.config.dev.js`) 
Production mode(`webpack.config.prod.js` )

We also have a `package.json` to manage dependencies


## Offline Functionality
The project have service workers set up in webpack to provide the offline functionality of our app. When the service worker is functioning correctly, you will see the below message when you inspect the browser.



## Testing

Testing is done with Jest. To run test, use the command 

`npm run test`. 


## Interactions

### Home page

It is a single page web app. It has a single form input field that accepts user input(URL), then runs a check to make sure it is a valid URL. If it is not a valid URL, the error message will be displayed as alert.


If the URL is valid, an api call will be initiated and the result displayed on the web page as shown below;

### API response

if the url is valid, then an api call is performed and the result displayed on the page.


