# SMOK95 (under construction)

This projec uses [React95](https://github.com/arturbien/React95).

SMOK95 is a React app with Windows 95 theme where users can control their expenses.

![SMOK95 Screenshot](/public/example1.png)

## Technical Details

This project was created with React and Electron. The idea is for this to start as a
desktop application with an SQLite database.

* React
* Electron
* SQLite - local db
* Foreman - Foreman is a manager for Procfile-based applications. Used here for dev purposes (see `yarn start` bellow).

## Next Steps

[] - Refactoring of Calendar95 to use the calendar from React95 calendar. 
[] - Add Context + Reduce: at the moment, the components were added just to test the layout structure. 
[] - Create database: add basic tables and connect components to use it.

## How To Run?
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode both on Electron and on Web.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-react`

Run only the web version.

### `yarn start-electron`

Run the electron version, with the build/index.html version.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
