# Router

## How normal websites handle url?

when url is typed into the search bar, the server receives a request from us, then it sends back the webpage in html as an object.

if the user clicks a link on the page, the same happens again..

## In React

delegate all the routing / changing pages to the browser only.
request to server
server sends html page back (empty) + js bundle that controls our application
now react has full control of our app
react then injects the components dynmaically

when a new link is clicked,
react will step in and inject the contents into that page rather than sending a new request.
