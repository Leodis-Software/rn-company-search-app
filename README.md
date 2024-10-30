# RN Company Search App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Important - Before Running the Application - Configure the API Key

Before running the application, create an empty `.env` file in the root of the project and then add an entry as follows:

`API_KEY=******************`, replacing the asterisks with the API Key for the service.

## Important - Running the Application

Run `npm start` to run the application and then navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Reverse Proxy

Please note that a reverse proxy has been implemented to forward requests to the API endpoint to avoid exposing the API Key in the generated static bundle. If the app were to be deployed additional actions would be needed to implement the equivalent of the reverse proxy (such as via NGINX and Node etc).

## Features and Implementation Notes

### Angular Material

Angular Material has been used for styling throughout a subset of the implementation.

### SASS

SASS has been used as the CSS pre-processor.

### Core Features

All core features have been implemented according to the guidance document. The implementation is broken down into a number of components for clarity and re-use.

### Input Validation

Input validation has been implemented on the company search page using Angular Reactive Forms.

### Root Guards

A Root Guard has been applied to the company details page (i.e. subsequent to click a search result). The implements a mock Login Page to authenticate the user. Cookies have been used to store the logged in state. Please clear the cookies for the site if you wish to retest the guard multiple times.

### Paging

Paging has not been implemented as the remote endpoint does not return the total number of results available correctly for the company search query.






