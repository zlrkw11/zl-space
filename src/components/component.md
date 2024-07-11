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
