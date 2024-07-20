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

less requests, faster

### Implementation

```
npm install react-router
or
npm install react-router-dom
```

the dom specifically works for web applications

under our main file: App.jsx

import the resources

```
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
```

using the BrowserRouter with the name - Router

now, surrounds app component with router component. So, we can use the router in the application because all components are arranged in App.jsx.

### Routes (Switch) component

The <Routes> component ensures that only one of the routes is rendered at a time, based on the current URL path.

```
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
```

This means we want to show the <Home/> component only when the path "/" is visited.
