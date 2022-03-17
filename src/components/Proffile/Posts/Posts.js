import React from 'react';
import Post from './Post/Post';
import './Posts.scss';



function Posts(props) {
    let postsElement = props.postsData.map(post => <Post key={post.id} img={post.img} text={post.text} likes={post.likes} />);

    let newPostEl = React.createRef();

    let onAddPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="proffile__posts posts">
            <form className="posts__form form">
                <textarea ref={newPostEl} onChange={onPostChange} className="form__textarea" maxLength="250" value={props.newPostText}></textarea>
                <button type='button' onClick={onAddPost} className="form__send">Send</button>
            </form>
            {postsElement}
        </div>
    )
}

export default Posts;