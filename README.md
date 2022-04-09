# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run/work on this project:

Make sure you have **npm, yarn and git** installed.
https://git-scm.com/downloads
https://nodejs.org/en/download/
https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

1) Clone the repo: ```git clone https://github.com/SeanOverton/CSIT314-Frontend.git```
2) Run ```yarn install``` inside root directory.
3) Copy the contents of .env-example file in the root directory into a new file in the root directory and save as .env filetype. Make sure it does not save as a text file.
Note: this file stores some important configuration values and keys for testing and production.

3.1) [Optional] Create an account on Google cloud platform:
    1) Create an API key within 'credentials'.
    2) Enable "Maps Javascript API"
    3) Enable "Geocoding API"
Warning: this could result in some billing. I think you receive $200 AUD upon your first sign up? But use at your own risk. Otherwise for now, we will make sure the app is fully functional for testing purposes without enabling any google API's. 

4) Run ```yarn start``` to start the local server.

## For adding new features to the repo (Workflow for version control):

1) ```git checkout -b "feature/the_feature_you_are_working_on"```
Will create a new branch and switch over to it. 

2) Complete whatever you are working on with git add and commit. 
```git add .``` Prepares your changes for a commit.
```git commit -m "your commit message"``` actually makes the commit (only locally at this point).

3) ```git push``` Will push your changes to the same branch you created on the remote repository.

4) Once you are happy with your changes and want to introduce them to the master branch. Create a pull request (on github). Fix any merge conflicts or get help.

5) Someone, will review and approve and then successfully merge into master. Make sure to delete branches that have been merged.

## Further info on version control:
I have set up according to this methodology so it is most similar to a workplace team environment: https://dev.to/profydev/professional-git-workflow-github-setup-for-react-developers-pfj

## Styling (WIP: still discussing, team has suggested Sass):
1) Bootstrap has been imported in the App.tsx file, meaning the classes should be accessible from anywhere in the project. This might be a useful resource https://bootstrapshuffle.com/classes
2) Otherwise please use the ```./src/styles/<specific_component_name>.css``` to store any other specific component styles. 
3) If it is a style that should be used across the whole project. eg. fonts and colours, add them to the ./src/App.css

## For adding packages
1) Please use ```yarn add <package_name>``` and remember with typescript you will also have to install the type declarations with ```yarn add @types/<package_name>```

## Best practices and code style:
1) Use the modern arrow funcitons ```const function_name = () => {}```
2) Use Capitalises on component names eg. SignUp
3) use **camelCase** on all other functions and variable names. 

## Deploying to heroku:
1) Need to be signed in to heroku and have access to our heroku repo:
2) Add the heroku repo as a remote. 
3) ```git push heroku master``` And it will build/deploy as their is a build pack already on the heroku repo. 
