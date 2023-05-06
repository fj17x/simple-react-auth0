# simple-react-auth0
A React application created with Vite.js which uses Auth0 for authentication.

Steps to reproduce:

1.Create a new application on the Auth0 website.
2.In the settings, under "Application URIs", add "http://localhost:5173" to the callback,logout and allowed web origin urls.
3.Clone this repository.
4.Create a new file named ".env" in the root directory with VITE_DOMAIN=yourdomain and VITE_CLIENT_ID=yourclientid.
5.In the terminal run "npm run dev" to run the application.
