import React from 'react';
import Button from './Button';

function DeletePost({id, handleChange, isSuccess, deletePost}) {
  return (
    <div>
        <h1>Delete Post</h1>
        <form>
            <label htmlFor='id'>Post Id:</label> {" "}
            <input 
               type='number'
               name='id'
               value={id}
               onChange={handleChange} 
               />
               <br/><br/>
               <Button handleClick={deletePost} text="Delete Post" bg="red"/>
        </form>
        {isSuccess && <h3 style={{color: 'red'}}>Post Deleted successfully</h3>}
    </div>
  )
}

export default DeletePost;