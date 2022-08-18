# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### installation concept
Introduction
In this article, we are going to explore how to deploy a React app to GitHub pages.

What are GitHub pages?
GitHub Pages is a static website hosting service and it is free of charge.
It takes resources like HTML, CSS, and JavaScript files directly from the GitHub repository.
We can host our website on GitHub's with github.io domain or our own custom domain name.
Types of GitHub Pages
There are three types of GitHub Pages sites which are,
User site
Project site
Organization site. 
Project sites are connected to a specific project hosted on GitHub, such as a JavaScript library. 
User and organization sites are connected to a specific GitHub account.
User Site

The user site is connected to a specific GitHub account.
You should have a user account on GitHub.
To publish a user site, you must create a GitHub repo owned by your user account and repo name should be username.github.io. For Example, If your user name is TestName your repo name should be testname.github.io.
If you are not using any custom domain, then your website will be available at https://username.github.io.
Organization Site

The organization site is connected to a specific GitHub account.
To publish an organization site, you must create a repo owned by an organization and the repo name should be organization.github.io.
If you are not using any custom domain, then your website will be available at https://organization.github.io.
You can create only one user or organization site for each user account on GitHub. But we can create unlimited Project sites which can be owned by an organization or a user account.
How to Publish the React application on GitHub Pages
To publish the user site, follow the below steps.

Create an Account in GitHub.
Create Repo in GitHub where the repo name should be username.github.io
Create React Application.
Deploy the React Application using GitHub Pages.
Commit and Push the codebase (React Application) into GitHub repo.
Step 1 - Create an Account in GitHub

Open the GitHub link
Create an account using your personal email
To secure your GitHub account, you can enable MFA (multi-factor authentication) login for your account.
Step 2 - Create Repo in GitHub

Login to your GitHub account.
Create the new repo by clicking the "+" icon at the right top of the page.


Enter the repo name as yourusername.github.io and choose whether the repo should be public or private.


Click on the "Create repository" button.
Now your repo has been created.
Step 3 - Create React Application

Create the react application which you want to host as a website. In this article, I am mainly focusing on how to deploy the react application on GitHub Pages. So please refer to this link to create React application.

Step 4 - Deploy the React Application

To deploy the application, follow the below steps.

1) Add GitHub Pages dependency package

Install "gh-pages" package using the below command.

npm install gh-pages — save-dev
Makefile
2) Add homepage property to package.json file

Add the below property to your package.json file.
For a GitHub user site: 
"homepage": "https://{username}.github.io"
For a custom domain: 
"homepage": "https://testwebsite.com"


3) Add deploy scripts to package.json file

Add both predeploy and deploy property scripts to the package.json file as below,

"predeploy": "npm run build",
"deploy": "gh-pages -d build"
Makefile
  The "predeploy" command is used to bundle the react application and the "deploy" command helps to deploy the bundled file.



4) Create a remote GitHub repository

Initialize the Git using "git init" command.
Add it as remote using "git remote add origin your-github-repository-url.git" command.
5) Deploy the Application to GitHub Pages

Now run the below command to deploy your react application to GitHub Pages.

npm run deploy
Makefile
6) Access deployed site

To get the published URL, 

Go to your GitHub Repo.
Click Settings menu.