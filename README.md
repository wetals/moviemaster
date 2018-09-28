# Movie Master listings

Built with React using:
* Create React App
* Jest
* PostCSS

## Features

* Displays a list of movies - showing title, genres and poster image.
* The movies are ordered by popularity.
* Movies are filterable by multiple genres
* Movies are filterable by their rating.
* The input API's is only called once.

## Getting started
Install packages:
```
yarn install
```
Create .env file in the root folder and set your api key as REACT_APP_API_KEY variable
[You’ll need an TMDb account][tmdb-signup] to request an API key

```
// .env
REACT_APP_API_KEY=1234567890
```

Run the app:
```
yarn start
```

Run tests:
```
yarn test
```

Run coverage:
```
yarn coverage
```


