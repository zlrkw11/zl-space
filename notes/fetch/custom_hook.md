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
