import {LOADING, RECEIVED, ERROR} from './constant';

export const loading = () => ({
    type: LOADING
});

export const error = () => ({
    type: ERROR
});

export const received = data => ({
    type: RECEIVED,
    data
});

export const fetchDog = () => {
    return dispatch => {
        dispatch(loading());
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json(), err => dispatch(error()))
                .then(data => dispatch(received(data)));
    };
};