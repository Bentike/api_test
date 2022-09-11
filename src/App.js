import { useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';
import Button from './Button';
import './App.css';
const axios = require('axios');

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [createdPostTitle, setCreatedPostTitle] = useState("");
  const [createdPostBody, setCreatedPostBody] = useState("");
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [updatePostTitle, setUpdatePostTitle] = useState("");
  const [updatePostBody, setUpdatePostBody] = useState("");
  const [updatePostId, setUpdatePostId] = useState("");
  const [updatedPostTitle, setUpdatedPostTitle] = useState("");
  const [updatedPostBody, setUpdatedPostBody] = useState("");
  const [isUpdatingPost, setIsUpdatingPost] = useState(false);
  const [deletePostId, setDeletePostId] = useState("");
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const setTitle = e => {
     setPostTitle(e.target.value);
  }

  const setBody = e => {
    setPostBody(e.target.value);
  }

  const updateTitle = e => {
    setUpdatePostTitle(e.target.value);
  }

  const updateBody = e => {
    setUpdatePostBody(e.target.value);
  }

  const updateId = e => {
     setUpdatePostId(e.target.value);
  }

  const setDeletePost = e => {
    setDeletePostId(e.target.value);
  }

  const getPost = () => {
    setPosts([]);
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
       setPosts(response.data);
       setIsLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const setPost = (e) => {
    e.preventDefault();
    if(postTitle.length !== 0 && postBody.length !== 0){
      setIsCreatingPost(false);
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: `${postTitle}`,
        body: `${postBody}`,
        userId: 1,
      })
      .then(function (response) {
        setCreatedPostTitle(response.data.title);
        setCreatedPostBody(response.data.body);
        setPostBody('');
        setPostTitle('');
        setIsCreatingPost(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return
  }

  const updatePost = (e) => {
    e.preventDefault();
    if(updatePostId.length !== 0 && updatePostTitle.length !== 0 && updatePostBody.length !== 0){
      setIsUpdatingPost(false);
      axios.put(`https://jsonplaceholder.typicode.com/posts/${updatePostId}`, {
      title: `${updatePostTitle}`,
      body: `${updatePostBody}`,
      userId: 1,
      })
      .then(function (response) {
        console.log(response);
        setUpdatedPostTitle(response.data.title);
        setUpdatedPostBody(response.data.body);
        setUpdatePostId('');
        setUpdatePostTitle('');
        setUpdatePostBody('');
        setIsUpdatingPost(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return
  }

  const deletePost = (e) => {
     e.preventDefault();
     if(deletePostId.length !== 0){
      setIsDeleteSuccess(false);
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${deletePostId}`)
     .then(function (response) {
       console.log(response);
       setDeletePostId('');
       setIsDeleteSuccess(true);
     })
     .catch(function (error) {
       console.log(error);
     });
     }
     return;
  }

  return (
    <div className="App">
       <h1>Welcome</h1>
       <Button handleClick={getPost} text="Get Posts" bg="blue"/>
       {isLoading && <p>Loading...</p>}
       <div className='post__wrap'>
        {posts.map(post => {
          return <Post key={post.id} title={post.title} body={post.body}/>
        })}   
       </div>

       <CreatePost
         title={postTitle}
         body={postBody}
         handleTitleChange={setTitle}
         handleBodyChange={setBody}
         createPost={setPost}
         isSuccess={isCreatingPost}
         newTitle={createdPostTitle}
         newBody={createdPostBody}
       />

       <UpdatePost
          title={updatePostTitle}
          body={updatePostBody}
          postId={updatePostId}
          handleIdChange={updateId}
          handleBodyChange={updateBody}
          handleTitleChange={updateTitle}
          isSuccess={isUpdatingPost}
          updatePost={updatePost}
          newTitle={updatedPostTitle}
          newBody={updatedPostBody}
       />

       <DeletePost
         id={deletePostId}
         handleChange={setDeletePost}
         deletePost={deletePost}
         isSuccess={isDeleteSuccess}
       />
    </div>
  );
}

export default App;
