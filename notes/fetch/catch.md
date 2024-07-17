# Catching Errors

1. catches any kind of network error as a function. (can't even connect to json server)

```
.catch((err) => {
})

```

however if we have request denied, endpoints not existing... The same method won't be valid anymore, so, we need to check that response object has the **right state** because there will still be the same object sent back.

2. the OK property
   this says about whether the response object is okay, if it is false meaning the endpoint does not exist.

   ```
     if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
   ```

   so we check by checking manually and make up our own error msg.
