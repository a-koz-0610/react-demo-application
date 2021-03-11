This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run this project

### `npm install`

Will load the dependencies in the `package.json` and get the application ready.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Dependencies installed in this project
- `npm install react-router-dom`: To manage custom endpoints(urls)
- `npm install node-sass`: Needed for CSS Modules to work
- `npm install react-css-modules`: Allows a custom/unique stylesheet for each component or page that you build..no need to worry if you duplicate `classNames`

### What this demo app covers

#### Custom Routing to the following endpoints
- ` localhost:3000/` takes you `HomeScreen`
- ` localhost:3000/contact` takes you to the `ContactScreen`
- ` localhost:3000/people` takes you to the `PeopleScreen`
- `localhost:3000/people/alan-k` and `localhost:3000/people/joe-k` take you to the singular `PersonScreen` with a customized slug for routing 

#### Component Types
- Presentational (Dumb) Components (do not manage data(state))
- Stateful (Smart) Components (manage data(state))

#### CSS Modules
custom style sheets for each page or component! 

#### State Management
- Take a look at the `People` and `Person` components for an example of managing state via `props` 
- The `useState` react hook is also used to manipulate the age attribute through user interaction with a button `onClick` 

