# Whispr
This is a ReactJS based social media website consisting of a frontend and API, as well as
a socket for a message service. Consisting of a clean designed frontend with an API to
communicate with an instance of MongoDB to store data.

## Features:
- Dark and light mode with a navbar toggle
- Friending system and basic social features
- Timeline of all your (and your friends) posts
- Support for image types such as JPG or PN

## Tech Stack
React, Axios, Chakra

![alt_text](https://github.com/Aimireal/React-Whispr/blob/master/public/images/whispr.png)

## To Run:
Currently only available for self-hosting

- CD into the main and API folder
- Add .env into mai whispr folder with 
    "REACT_APP_PUBLIC_FOLDER = http://localhost:5000/images/"
- Add .env into main with MongoDB API = 
    "MONGO_URL = mongodb+srv://blahblah.yours.mongodb.net/whispr?retryWrites=true&w=majority"
- Run the "npm i" command in both of them to install required dependencies
- Launch both with "npm start" (Defaults to localhost:3000 for main and 5000 for API)

## To-Do:
- Ongoing: Adding new features to website
