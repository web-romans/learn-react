import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e7ed6daa-91fb-4af8-b953-1f33e98ea0ae"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    followUser(id = 1) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode;
        });
    },
    unfollowUser(id = 1) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode;
        });
    },
    getProfile(profileId = 1) {
        return profileAPI.getProfile(profileId);
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me');
    }
}

export const profileAPI = {
    getProfile(profileId = 1) {
        return instance.get(`profile/${profileId}`);
    },
    getStatus(profileId = 1) {
        return instance.get(`profile/status/${profileId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    }
}