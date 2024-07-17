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

   the console.log at the end with the catch will catch this error and display the msg after we threw it.

3. make the states

   ```
   const [error, setError] = useState(null);
   ```

   then we can set the err message

   ```
   .catch((err) => {
        setError(err.message);
      });
   ```

   and we can display this err variable (state) on screen

lastly, don't remember to set the err message to "null" once the data is confirmed being valid.
