import React from 'react';
import * as axios from 'axios';
import Users from './Users'
import Preloader from './../common/Preloader/Preloader';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingtAC } from '../../redux/users-reducer';


class UsersContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        let getString = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
        this.props.toggleIsFetchingt(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(getString).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetchingt(false);
        });
    }
    componentDidMount() {
        let getString = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        this.props.toggleIsFetchingt(true);
        axios.get(getString).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetchingt(false);
        });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispathToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetchingt: (isFetching) => {
            dispatch(toggleIsFetchingtAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(UsersContainer);