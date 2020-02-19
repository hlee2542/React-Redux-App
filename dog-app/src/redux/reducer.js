import {LOADING, RECEIVED, ERROR} from './constant';

const initialState = {
    imageLink: '',
    loading: false,
    error: false
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {imageLink: '', loading: true, error: false};
        case ERROR:
            return {imageLink: '', loading: false, error: true};
        case RECEIVED:
            return {imageLink: action.data.message, loading: false, error: false};
        default:
            return state;
    }
};