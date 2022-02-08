import Post from './Post/Post';

import './Posts.scss';
function Posts() {

    let postData = [
        {
            id: '0',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa doloremque similique nam eum suscipit, atque magni provident vero assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla cum facilis reprehenderit illo dolore totam? Mollitia incidunt omnis consequuntur impedit quod aspernatur accusantium nihil ullam illo dignissimos aliquam laboriosam facere eum amet similique animi quibusdam nesciunt, in neque dicta!',
            likes: '3'
        },
        {
            id: '1',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            likes: '2'
        },
        {
            id: '2',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla cum facilis reprehenderit illo dolore totam? Mollitia incidunt omnis consequuntur impedit quod aspernatur accusantium nihil ullam illo dignissimos aliquam laboriosam facere eum amet similique animi quibusdam nesciunt, in neque dicta!',
            likes: '1'
        },
        {
            id: '3',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            likes: '24'
        },

    ];


    return (
        <div className="proffile__posts posts">
            <form className="posts__form form">
                <textarea className="form__textarea" maxLength="250"></textarea>
                <button className="form__send">Send</button>
            </form>

            <Post
                img={postData[0].img}
                text={postData[0].text}
                likes={postData[0].likes}
            />
            <Post
                img={postData[1].img}
                text={postData[1].text}
                likes={postData[1].likes}
            />
        </div>
    )
}

export default Posts;