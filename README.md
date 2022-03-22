# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run/work on this project:

Make sure you have **npm, yarn and git** installed.
https://git-scm.com/downloads
https://nodejs.org/en/download/
https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

1) Clone the repo: ```git clone https://github.com/SeanOverton/CSIT314-Frontend.git```
2) Run ```yarn install``` inside root directory.
3) Run ```yarn start``` to start the local server.

## For adding new features to the repo (Workflow for version control):

1) ```git checkout -b "feature/the_feature_you_are_working_on"```
2) Complete whatever you are working on with git add and commit. 
3) ```git push --set-upstream origin"your_branch_name"``` and create pull request. Fix any merge conflicts or get help.

## Further info on version control:
I have set up according to this methodology so it is most similar to a workplace team environment: https://dev.to/profydev/professional-git-workflow-github-setup-for-react-developers-pfj

## Styling:
1) Bootstrap has been imported in the App.tsx file, meaning the classes should be accessible from anywhere in the project. This might be a useful resource https://bootstrapshuffle.com/classes
2) Otherwise please use the ```./src/styles/<specific_component_name>.css``` to store any other specific component styles. 
3) If it is a style that should be used across the whole project. eg. fonts and colours, add them to the ./src/App.css

## For adding packages
1) Please use ```yarn add <package_name>``` and remember with typescript you will also have to install the type declarations with ```yarn add @types/<package_name>```

## Best practices and code style:
1) Use the modern arrow funcitons ```const function_name = () => {}```
2) Use Capitalises on component names eg. SignUp
3) use **camelCase** on all other functions and variable names. 
