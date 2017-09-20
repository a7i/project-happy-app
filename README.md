#Predix Experience Seed
Dashboard Seed is an application that uses Px Web Components and <a href="https://github.com/PredixDev/px-library-design/" target="_blank">Px UI Elements</a> inside an Angular application.

## To Run the Dashboard Seed

### Get the source code
Make a directory for your project.  Clone or download and extract the seed in that directory.
```
git clone
```

### Install the dependencies
```
npm install
bower install
```

### Create a dist version
Use grunt to create a distribution version of your app, which will be located in the dist folder along with the nginx configuration files.  You will need to run this command during development every time before you cf push to make the latest dist.
```
grunt dist
```

### Run locally
```
grunt serve
```