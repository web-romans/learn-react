import React from 'react';
import * as axios from 'axios';
import Users from './Users'
import Preloader from './../common/Preloader/Preloader';
import { connect } from 'react-redux';
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetchingt
} from '../../redux/users-reducer';

const apiUrl = 'https://social-network.samuraijs.com/api/1.0/';

class UsersContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        let getString = `${apiUrl}users?page=${pageNumber}&count=${this.props.pageSize}`;
        this.props.toggleIsFetchingt(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(getString).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetchingt(false);
        });
    }
    componentDidMount() {
        let getString = `${apiUrl}users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetchingt
})(UsersContainer);