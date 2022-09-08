import './App.css';
const axios = require('axios');

//CREATE
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Cats',
  body: 'Cats are lovely',
  userId: 10,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

//READ
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  //UPDATE
  axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Lions',
    body: 'Lions are not lovely',
    userId: 1,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  //DELETE
 axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
function App() {
  return (
    <div className="App">
       <h1>Welcome</h1>
       <p>Kindly open the developer console to view output.</p>      
    </div>
  );
}

export default App;
