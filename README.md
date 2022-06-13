# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### `yarn install`

Installs all necessary dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technologies Used

- Front-end: JavaScript/React
- Back-end: Ruby on Rails
- Database: PostgresQL

## Requirements

- frontend should request notifications from an API (fetch request from resilia-notitifcations-api)
- notifications​ should be housed in a persistent store (stored in state with useState hook)
- persistent store that can survive the API server restarting (localStorage)
- notification​ objects contain arbitrary domain data along with attributes that allow it to function as a “notification” a user is intended to receive
