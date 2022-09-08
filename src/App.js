import './App.css';
const axios = require('axios');

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   title: 'Cats',
//   body: 'Cats are lovely',
//   userId: 10,
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

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

//  axios.delete('https://jsonplaceholder.typicode.com/posts/1')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
 
function App() {
  return (
    <div className="App">
       <h1>Hello</h1>      
    </div>
  );
}

export default App;
