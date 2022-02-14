import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
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

let dialogsData = [
  { id: '1', name: 'Роман' },
  { id: '2', name: 'Татьяна' },
  { id: '3', name: 'Анна' },
  { id: '4', name: 'Иван' },
];

let messagesData = [
  { id: '0', message: 'Привет!' },
  { id: '1', message: 'Как дела?' },
  { id: '2', message: 'Хорошо' },
  { id: '3', message: 'Как там реакт?' },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
