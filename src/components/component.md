# Components

### sfc + tab

creating a stateless functional component

## CSS

this styles will be applied on all components inside the browser.

However, we can use CSS modules to scope into only a single component.

```
main.jsx
```

renders the <App/>, so apply index.css here.

```
* {

}
```

applies to everything

### Referring to the class name when styling

when the navbar links are named in className field:

```
<nav className="navbar">
      <h1>ZL blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
```

always make sure to do

```
.navbar .links {
  margin-left: auto;
}
```

so, the links (name we made) can be targeted

however, for built-in attributes, no need to use the ".":

```
.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
}
```

### Tips on styling

```
.content {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}
```

.content styling (className for home div)
this means, 40px margin top & bottom.
auto margin left & right - centralization

## Inline Styling

outer pair: telling React this is a Dynamic block

inner pair: property:value pairs for an object

```
 <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
```

\*in Jsx(javascript), we use camelCase instead of -.

## Click Events

pass reference, not the invoked version. Otherwise it will be called straight away.

```
{handleClick}
```

### Passing in arguments

if we have a function that requires an argument to be passed in:

```
 const handleClickAgain = (name) => {
    console.log("hello" + name);
  };

```

```
onClick={() => {
          console.log("hello");
        }}
```

an arrow function like this won't invoke the function right away, but as a reference still.

so, using the same concept:

```
  onClick={() => {
          handleClickAgain("Ray");
        }}
```

we passing in the function inside the arrow function.

### Event Object

the onClick event will automatically pass in an event object as the first parameter when an event happens.

```
  const handleClick = (e) => {
    console.log("Hello World", e);
  };
```

## useState
