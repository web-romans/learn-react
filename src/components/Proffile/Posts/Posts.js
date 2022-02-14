import Post from './Post/Post';
import './Posts.scss';

function Posts(props) {

    let postsElement = props.postsData.map(post => <Post img={post.img} text={post.text} likes={post.likes} />);

    return (
        <div className="proffile__posts posts">
            <form className="posts__form form">
                <textarea className="form__textarea" maxLength="250"></textarea>
                <button className="form__send">Send</button>
            </form>
            {postsElement}
        </div>
    )
}

export default Posts;