# ProPlan

ProPlan is a project planning application designed to make planning and documenting the creative process easier by having all your information in one place. It has allowances for task lists, shopping lists, progress photos, references and supplies.

# Let's get started, shall we?

## Clone the repository
First, run `git clone git@github.com:CassieBoyd/pro-plan.git` in your terminal

## Install dependencies
Then run `npm install`

## Set up the database
Make a copy of database.json.example and remove .example from the copy by running the following command:</br>
`cp api/database.json.example ./api/database.json`

## Run JSON server
In the root directory, run `json-server -p 5002 -w api/database.json`

## Run the app
Open a new tab in your terminal and run `npm start`
This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Have fun planning your projects!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

