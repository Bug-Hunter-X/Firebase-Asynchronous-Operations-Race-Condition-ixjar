The solution involves using `.then()` to chain asynchronous operations or using `async/await` for cleaner code:

```javascript
async function updateDatabase(data) {
  try {
    await firebase.database().ref('/myData').set(data);
    console.log('Data updated successfully!');
    // ... code that depends on data being updated ...
  } catch (error) {
    console.error('Error updating data:', error);
  }
}
```

This revised code ensures that the subsequent code will only run after the database update completes successfully. The `async/await` syntax makes the code easier to read and understand.  For a more complex scenario, consider using Promise.all to wait for multiple asynchronous operations to complete.