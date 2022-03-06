# Github User Repository Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Things I'd Improve

- Do more thorough testing. Right now the application is only smoke testing different scenarios. I'd need to research some better, more thorough testing practices to apply here.
- Retrieve all of a users repositories, right now Github API limits by 100, and I'm only pulling in the first 100 repos. Ideally i'd pull in every page and sort through the data by stars
- Show more information, possibly develop the results into full fledged cards you can interact with
- improve search features, things like typeahead, autocomplete, search after the user is done typing rather than clicking search / enter

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
