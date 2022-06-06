
import React from 'react';
import Post from './Post/Post';
import PostReduxForm from './PostForm/PostForm';
import './Posts.scss';

function Posts(props) {
    let postsElement = props.postsData.map(post => <Post key={post.id} img={post.img} text={post.text} likes={post.likes} />);

    const onHandleSubmit = (formData) => {
        props.addPost(formData.post);
    }

    return (
        <div className="proffile__posts posts">
            <PostReduxForm onSubmit={onHandleSubmit} />
            {postsElement}
        </div>
    )
}

export default Posts;