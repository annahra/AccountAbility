# AccountAbility

AccountAbility is a concept for a social media mobile application where users are dedicated to fact-checking news claims/sources and general media. The first tab of the app allows users to sort media by different categories, the second tab allows the user to read different news articles and comment on them, and the third tab shows a user's profile which allows other users to comment on the user's method of claim evaluation.

## Getting Started

You will need Node.js (at least v), npm (at least v), Angular (at least v), and Ionic (at least version 5) properly running on your machine.

You will also need to grab a free API Key from [News API](https://newsapi.org/docs), create a config.json file and put the api key in a NEWS_API_KEY variable. 

### Prerequisites

To install Node.js and npm, follow this [link](https://www.npmjs.com/get-npm). Verify you've correctly installed both Node.js and npm by opening GitBASH and running the following commands:

```
node --version
npm --version
```

To install the [Angular CLI](https://angular.io/guide/setup-local) and to verify that the installation was successful, run the following :

```
npm install -g @angular/cli
ng --version
```

To install the [Ionic CLI](https://ionicframework.com/docs/intro/cli) and to verify that the installation was successful, run the following:

```
npm -g install -g @ionic/cli
ionic --version
```

## Deployment

To deploy this application on your localhost, cd into the project directory and run

```
ionic serve
```

## Built With

* [Ionic](https://ionicframework.com/docs) - The web framework used
* [Angular](https://angular.io/docs) - The framework with which Ionic is built upon
* [News API](https://newsapi.org/docs) - Used to generate news articles
* [Random User API](https://randomuser.me) - Used to generate random users for show

