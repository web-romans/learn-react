import './Post.scss';
function Post(props) {
    return (
        <div className="posts__post post">
            <div className="post__ico">
                <img src={props.img} alt='Post icon' />

            </div>
            <div className="post__text">
                {props.text}
            </div>
            <div className="post__social">
                <span className="post__like">{props.likes} Like</span>
            </div>
        </div>
    )
}

export default Post;