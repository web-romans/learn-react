import Post from './Post/Post';

import './Posts.scss';
function Posts() {
    return (
        <div className="proffile__posts posts">
            <form className="posts__form form">
                <textarea className="form__textarea" maxLength="250"></textarea>
                <button className="form__send">Send</button>
            </form>

            <Post
                img='https://dineuron.com/uploads/services/service_5cac7af9a951513.png'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa doloremque similique nam eum suscipit, atque magni provident vero assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla cum facilis reprehenderit illo dolore totam? Mollitia incidunt omnis consequuntur impedit quod aspernatur accusantium nihil ullam illo dignissimos aliquam laboriosam facere eum amet similique animi quibusdam nesciunt, in neque dicta!'
                likes='3'
            />
            <Post
                img='https://dineuron.com/uploads/services/service_5cac7af9a951513.png'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                likes='2'
            />
            <Post
                img='https://dineuron.com/uploads/services/service_5cac7af9a951513.png'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                likes='1'
            />
        </div>
    )
}

export default Posts;