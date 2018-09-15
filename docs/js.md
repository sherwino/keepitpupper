# Using JavaScript
This project is going to try its best to use ES6+ or ES2016+ whatever you want to call it, and I am going to use very strict linting rules, mainly because I got used to these rules and can't work without them. For more information on that check out [Linting](#Linting)

## Service Workers

## Realtime DB integrations

## Linting
So this is not that important for a small project like this, but since I would like to use these thngs in all of my projects from now on, I am going to set it up so that I could refer back to it later on. 

In this project going to use Eslint to make sure I have some kind of code writing style guide. I am extending Airbnb's linting standards, with some slight modifications of my own.

The linting could be executed several ways, if you use an text IDE like VSCode you could have it lint on the fly, and highlight the issues right in IDE.

You could also run an npm script to lint and tell you all of the issues you have with your code by running:
```sh 
npm run lint
```

Now this only works if you install all of the crap I added to the project. 

*Oh boy...this is how we start complicating everything*

### Setting Up Linting

1. First and foremost, I had a [.gitignore](../.gitignore) file setup already so that github doesn't commit all of the crap that I was getting ready to install. This file defines all of the folders and files that you are not going to keep track of in git. Very important if you are going to use node. I am not going to explain how to get node installed cause we are past that.

2. Initialize the project, with a [package.json](../package.json) file. You could press enter the whole way down if you want because it automatically makes some assumptions about the project based on the directory and its contents.
```sh 
npm init
```

3. Now you could install some node packages. In order for Eslint to work you are going to need to install it locally or globally, and any plugins you are going to use. In this case I am going to use Eslint with the Airbnb standards and settings along with their linting plugins/packages for node, importing, promises, react.

Basically ran these commands
```sh
npx install-peerdeps --dev eslint-config-airbnb

```

Which installed these packages to my project, and added them as dev dependencies to the package.json:
```sh
+ eslint-plugin-import@2.14.0
+ eslint-plugin-jsx-a11y@6.1.1
+ eslint-plugin-react@7.11.1
+ eslint-config-airbnb@17.1.0
+ eslint@5.6.0
```

In addition I wanted to add some other plugins just in case, or cause I don't know what linting settings are contained in each of these packages. 
```sh
npm i eslint-plugin-node@latest --save-dev
npm i eslint-plugin-promise@latest --save-dev
```

4. Make sure that linting script is added to the package.json file. With this now you could run `npm run lint` to lint/check your project for any linter errors.

```js
  "scripts": {
    "lint": "eslint .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

5. Before you do that, make sure that you make a [.eslintrc](../.eslintrc) file. If you just wanted to keep it simple with only airbnb standards you just add this to the file.
```js
// Use this file as a starting point for your project's .eslintrc.
// Copy this file, and add rule overrides as needed.
{
  "extends": "airbnb"
}
```

...but that is no fun, I want MORE:
```js
{
    "extends": "airbnb",
    "plugins": [
        "node",
        "promise",
        "react"
      ],
      "env": {
        "jest": true
      },
      "globals": {
        "__STATE__": true
      },
      "rules": {
        "func-names": ["error", "never"],
        "padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": "*", "next": "return" },
          { "blankLine": "always", "prev": "*", "next": "block-like" },
          { "blankLine": "always", "prev": "block-like", "next": "*" },
          { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
          { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
        ],
        "object-curly-newline": 0,
        "promise/prefer-await-to-then": 1,
        "promise/prefer-await-to-callbacks": 1,
        "node/no-unpublished-require": 0,
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "FunctionDeclaration": {
              "parameters": 1,
              "body": 1
            },
            "FunctionExpression": {
              "parameters": 1,
              "body": 1
            },
            "CallExpression": {
              "arguments": 1
            },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false,
            "ignoreComments": false
        }]
      }
    }
  ```

  Much more.

  Now you have some world class linting set up in your project,if you run the linting script `npm run lint` you could see some linting magic.

  ![Executing npm run lint, and seeing its results](https://i.gyazo.com/36b19196cca33c361c734143a33feb68.gif)

  That's cool but I want more. Well, me too random reader, me too. So lets step it up a notch and bring this linting to your IDE.

  6. In order to have Eslint highlight syntax and linting errors with your code on the fly you are going to have to install a package on your IDE. I am going to show you how to do it with Visual Studio Code, mainly because I am not going to open Atom / Sublime just to show you how to do this there. If you are hot stuff using VSCode you probably already know this but if you press `CMD + SHIFT + P` you get to open a little command menu in VSCode, and you could click on 'Install Extensions' or you could be lame and click on the icon on the right. Your call. 
  ![VSCode Command Menu](https://i.gyazo.com/a1e3b055fa8b60e7a835522f52cfae79.gif)

  7. Search for `eslint` install that package, and you are done after a reload. Now you have text highlighting. Cool beans.
  ![Linter highlighting](https://i.gyazo.com/d7ec009d4c6db8bcfd05ce57fbca0c19.gif)
  
  ...but you want **MORE**, hahahah, yes you do. You want so much more. What if I could told you could have Eslint fix your stupid linting errors automagically. Interested? Well then lets move on to step number eight.

  8. Lets go into your VSCode settings and change some stuff. Press `CMD + ,` and open your user settings.json ...wait a minute they changed the interface. You are on your own. Ok fine I will show you. You will have to open the settings menu > extensions > eslint > AutoFix on Save. This guy will let your code automagically be fixed for simple linter errors.
  ![Autofix on save settings](https://i.gyazo.com/522a9882daa625f2b668503dbf8b532b.gif)

  Here is the magic in motion, use const if the variable is not going to be changed or re-assigned.
  ![Eslint doing its magic](https://i.gyazo.com/10ccb8ef8f4f6a3127a6ebc6addb138c.gif)



## Editable Fields for Mods and Admins

## Retrieve Data from Last.fm

## Search

## Now Playing