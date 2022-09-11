import React from 'react';
import Post from './Post';
import Button from './Button';

function UpdatePost({
  title, 
  body, 
  handleTitleChange,
  handleBodyChange, 
  updatePost, 
  isSuccess,
  newTitle,
  newBody,
  postId,
  handleIdChange
}) {
  return (
    <div>
       <h1>Update Post</h1>
        <form>
           <label htmlFor='id'>Post Id:</label> {" "}
           <input name='id'
            placeholder='post Id'
            maxLength='3'
            type='number'
            required
            onChange={handleIdChange}
            value={postId}
           />
           <br/> <br/>

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
           <Button handleClick={updatePost} text="Update Post" bg="#fcba03"/>
        </form>
        {isSuccess && <h3 style={{color: 'green'}}>Post Updated successfully</h3>}
        {isSuccess && <Post title={newTitle} body={newBody}/>}
    </div>
  )
}

export default UpdatePost;