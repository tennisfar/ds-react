# DS React

## Install
Fix base path to match the path to where you've installed danskespil-website in `./config.js`.

Install dependencies, import styles from danskespil-website, make routes, and start up hot relload:
```
npm install
npm run generate:styles
npm run generate:routes
npm run dev
```

Setup a component to display, in `./src/routes`. If you add a new component, remember to run this again:
```
npm run generate:routes
```

Now you can edit JS and CSS in your develop-website project, while having the changes load instantly in this project. No need to build, compile and deploy, until you're satisfied with your changes.