import React from 'react';
import Post from './Post';
import Button from './Button';

function CreatePost({
  title, 
  body, 
  handleTitleChange,
  handleBodyChange, 
  createPost, 
  isSuccess,
  newTitle,
  newBody}) {
  return (
    <div>
       <h1>Create Post</h1>
        <form>
           <label htmlFor='title'>Post title:</label> {" "}
           <input 
              name='title' 
              placeholder='post title' 
              maxLength='20' 
              required
              value={title}
              onChange={handleTitleChange}  
              />
             <br/> <br/>
           <label htmlFor='body'>Post body:</label> {" "}
           <input 
             name='body' 
             placeholder='post body' 
             maxLength='100' 
             required
             value={body} 
             onChange={handleBodyChange}
             />
           <br/> <br/>
           <Button handleClick={createPost} bg='green' text='Create Post'/>
        </form>
        {isSuccess && <h3 style={{color: 'green'}}>Post Created successfully</h3>}
        {isSuccess && <Post title={newTitle} body={newBody}/>}
    </div>
  )
}

export default CreatePost;