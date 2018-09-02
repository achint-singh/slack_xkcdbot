# xkcd Slackbot
A Slackbot that returns the most recent or a random xkcd comic. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need to have a Slack account to install this. You will also need to have a workspace to install the Slackbot. Since it is not a deployed application, you will need to do some setup within Slack to run the application.

### Setup
In order to run this app, please go to https://api.slack.com/apps to manually add the application. An ```"Add features and functionality"``` page will appear. Click on ```"Bots"``` and add the bot user to the Slack workspace you desire. 

After this setup, make sure to go into the .env file and add your ```BOT_TOKEN```. On https://api.slack.com/apps, there is a section called ```OAuth & Permission```, you want to copy and paste the ```Bot User OAuth Access Token```. 

Go into your Slack workspace, and make sure to add the bot user. Under the Apps section select the plus button and your bot user should be present. 

In order to run the application, go into the directory and type ```npm start```
