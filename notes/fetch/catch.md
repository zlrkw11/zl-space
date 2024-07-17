# Catching Errors

1. catches any kind of network error as a function. (can't even connect to json server)

```
.catch((err) => {
})

```

however if we have request denied, endpoints not existing... The same method won't be valid anymore, so, we need to check that response object has the **right state** because there will still be the same object sent back.
