import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {mainReducer} from './redux/reducer';
import thunk from 'redux-thunk';
import {fetchDog} from './redux/actionCreator';

const store = createStore(mainReducer, applyMiddleware(thunk));
const mapStateToProps = state => ({
    imageLink: state.imageLink,
    loading: state.loading,
    error: state.error
});
const mapDispatchToProps = dispatch => ({
    fetchDog: () => dispatch(fetchDog())
});
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('root'));