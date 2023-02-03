import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`posts/${id}/like`, {userId: userId})
export const emoji=(id, userId)=>API.put(`posts/${id}/emojie`, {userId: userId})
export const emoji1=(id, userId)=>API.put(`posts/${id}/emojie1`, {userId: userId})
export const updatePost=(id, userId)=>API.put(`posts/${id}/update`, {userId: userId})
export const deletePost=(id, userId)=>API.delete(`posts/${id}/delete`, {userId: userId})
