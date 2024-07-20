# Custom Hook

migrate all the parts into a new js file, make some changes to the names as well as importing the useState and useEffect hooks
custom hooks have to start with the word - use

### Return all the properties

return all the props used in the hook as an object overall

```
return { data, isPending, error };
```

### Add conditional prop

accept props like url to make sure it conditionally directs to the link and add it to the dependency list

### Destructuring will not be order-inflenced if object format is used

## Error while updating (switching between routes)

console will give error when there is switching between Home.jsx and NewBlog.jsx pages as the useState hook is trying to update the home component but the page has been changed.

fetch is still going on in the background, tries to update the states in home. But home is not there in the dom anymore.

we wanna stop that fetch by using a cleanup function & abort controller.
