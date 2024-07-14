# Template

## Components

- Template
- Logic

renders App to dom. Everything inside App component will be shown in the browser.
className (jsx) -> class (html)

in earlier versions, before 17, we import React from 'react'

component = function returning a jsx element, to be re-used elsewhere

## Dynamic values

React converts data to a **string** for displaying to the browser.
excepts for Boolean & objects

dynamic value can be stored in a variable:

```
const link = "http://www.google.com";
```

and used like:

```
<a href={link}></a>
```
