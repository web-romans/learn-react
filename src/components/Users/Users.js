import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import './Users.scss';
import userPhoto from '../../assets/img/users.png';

function Users(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const apiUrl = 'https://social-network.samuraijs.com/api/1.0/';


    return (
        <div className="users">
            <ul className="users__list">
                {
                    props.users.map((u) => <li key={u.id} className="users__item user-block">
                        <NavLink to={'/profile/' + u.id} className="user-block__img">
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
                        </NavLink>
                        <div className="user-block__info">
                            <NavLink to={'/profile/' + u.id} className="user-block__name">{u.name}</NavLink>
                            <NavLink to="#" className="user-block__country">Минск, Беларусь</NavLink>

                            <div className="user-block__status">  {u.status} </div>
                            {
                                (u.followed)
                                    ?
                                    <button onClick={() => {

                                        let getString = `${apiUrl}follow/${u.id}`;
                                        axios.delete(getString, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "e7ed6daa-91fb-4af8-b953-1f33e98ea0ae"
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });

                                    }} className="user-block__btn user-block__btn--unfollow">
                                        <svg width="20" height="20" viewBox="0 0 489.4 489.4" >
                                            <path d="M244.799,326.8c-44.9,0-81.3,36.4-81.3,81.3s36.4,81.3,81.3,81.3s81.3-36.4,81.3-81.3 C326.099,363.2,289.699,326.8,244.799,326.8z M292.299,419.9h-35.7h-23.7h-35.7v-23.7h35.7h23.7h35.7V419.9z" />
                                            <path d="M419.999,325.8c-48.1-39.5-100-65.8-110.6-70.9c-1.2-0.6-1.9-1.8-1.9-3.1v-74.9c9.4-6.3,15.6-17,15.6-29.1V70 c0-38.6-31.3-70-70-70h-8.3h-8.4c-38.6,0-70,31.3-70,70v77.7c0,12.2,6.2,22.9,15.6,29.1v74.9c0,1.3-0.8,2.5-1.9,3.1 c-10.6,5.2-62.4,31.4-110.6,70.9c-8.7,7.1-13.7,17.8-13.7,29.1V408h85l0,0c0-27.8,10.8-53.9,30.4-73.5 c19.6-19.6,45.7-30.4,73.5-30.4s53.9,10.8,73.5,30.4c19.6,19.6,30.4,45.7,30.4,73.5l0,0h85v-53.2 C433.699,343.6,428.699,332.9,419.999,325.8z" />
                                        </svg>
                                    </button>
                                    :
                                    <button onClick={() => {

                                        let getString = `${apiUrl}follow/${u.id}`;
                                        axios.post(getString, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "e7ed6daa-91fb-4af8-b953-1f33e98ea0ae"
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });

                                    }} className="user-block__btn user-block__btn--follow">
                                        <svg width="20" height="20" viewBox="0 0 45.902 45.902">
                                            <path d="M43.162,26.681c-1.564-1.578-3.631-2.539-5.825-2.742c1.894-1.704,3.089-4.164,3.089-6.912 c0-5.141-4.166-9.307-9.308-9.307c-4.911,0-8.932,3.804-9.281,8.625c4.369,1.89,7.435,6.244,7.435,11.299 c0,1.846-0.42,3.65-1.201,5.287c1.125,0.588,2.162,1.348,3.066,2.26c2.318,2.334,3.635,5.561,3.61,8.851l-0.002,0.067 l-0.002,0.057l-0.082,1.557h11.149l0.092-12.33C45.921,30.878,44.936,28.466,43.162,26.681z" />
                                            <path d="M23.184,34.558c1.893-1.703,3.092-4.164,3.092-6.912c0-5.142-4.168-9.309-9.309-9.309c-5.142,0-9.309,4.167-9.309,9.309 c0,2.743,1.194,5.202,3.084,6.906c-4.84,0.375-8.663,4.383-8.698,9.318l-0.092,1.853h14.153h15.553l0.092-1.714 c0.018-2.514-0.968-4.926-2.741-6.711C27.443,35.719,25.377,34.761,23.184,34.558z" />
                                            <path d="M6.004,11.374v3.458c0,1.432,1.164,2.595,2.597,2.595c1.435,0,2.597-1.163,2.597-2.595v-3.458h3.454 c1.433,0,2.596-1.164,2.596-2.597c0-1.432-1.163-2.596-2.596-2.596h-3.454V2.774c0-1.433-1.162-2.595-2.597-2.595 c-1.433,0-2.597,1.162-2.597,2.595V6.18H2.596C1.161,6.18,0,7.344,0,8.776c0,1.433,1.161,2.597,2.596,2.597H6.004z" />
                                        </svg>
                                    </button>
                            }

                            <button className="user-block__btn user-block__btn--message">
                                <svg width="20" height="20" viewBox="0 0 1024 1024">
                                    <path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                    )
                }
            </ul>

            <ul className="pagination">
                {
                    // eslint-disable-next-line array-callback-return
                    pages.map((p) => {
                        if (p === 1) {
                            return <li className="pagination__item">
                                <button onClick={(e) => props.onPageChanged(p)} className={(props.currentPage === p) ? " pagination__btn selected" : "pagination__btn"}>{p}</button>
                            </li>
                        }
                        if (p >= (props.currentPage - 2) && p <= (props.currentPage + 2)) {
                            return <li className="pagination__item">
                                <button onClick={(e) => props.onPageChanged(p)} className={(props.currentPage === p) ? " pagination__btn selected" : "pagination__btn"}>{p}</button>
                            </li>
                        }

                        if (p === pagesCount) {
                            return <li className="pagination__item">
                                <button onClick={(e) => props.onPageChanged(p)} className={(props.currentPage === p) ? " pagination__btn selected" : "pagination__btn"}>{p}</button>
                            </li>
                        }

                    })
                }
            </ul>
        </div>
    );
}

export default Users;