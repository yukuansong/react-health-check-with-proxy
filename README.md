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


## `setup proxy for resolving the CORS issue`
From the localhost:3000 to call an external URL like www.example will cause CORS issues. The same issue happens when calling a non-3000 port within localhost. To solve the issue, a proxy server need to be setup in the localhost, which forward the exteral request and response.

+ To add "proxy": "localhost:8090" in the package.js file. This will forward the request (for example /users) to localhost:8090/users.
+ Instead of add the proxy configuration in the package.js file, an alternative is to create an JavaScript file "setupProxy.js" under /src folder, which will be called automatically when the application is launched.
+ The second steop is to setup a reverse proxy server that is running in localhost with a port 8090. 
+ To install nginx on Macbook: brew install nginx
+ The nginx config file should be in the folder "/usr/local/etc/nginx. Check the file /usr/local/etc/nginx/nginx.conf to see which coniguration folder is inclued (include servers/*, for example)
+ Put the following in the file /usr/local/etc/nginx/servers/default.conf:
```
server {
listen 8090;
server_name localhost;

location /example {
proxy_pass http://www.example.com/;
}

}
```
+ To launch nginx services after the configuration update: brew services restart nginx