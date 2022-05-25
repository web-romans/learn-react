import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IF_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 9,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_USERS_COUNT: {
            return { ...state, totalUserCount: action.userCount }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }

        default:
            return state;

    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users) => ({
    type: SET_USERS, users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});
export const setTotalUsersCount = (userCount) => ({
    type: SET_USERS_COUNT, userCount
});
export const toggleIsFetchingt = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});
export const togglefollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {

    dispatch(toggleIsFetchingt(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetchingt(false));
    });
}
export const follow = (userId) => (dispatch) => {

    dispatch(togglefollowingInProgress(true, userId));
    usersAPI.followUser(userId).then(resultCode => {
        if (resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(togglefollowingInProgress(false, userId));
    });
}
export const unfollow = (userId) => (dispatch) => {

    dispatch(togglefollowingInProgress(true, userId));
    usersAPI.unfollowUser(userId).then(resultCode => {
        if (resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(togglefollowingInProgress(false, userId));
    });
}


export default usersReducer; 