/**** REDUCER  function(state + action) =>  new state  ****/
import {ADD_POST, ADD_BASE_POST} from '../constants/ActionTypes.react';
import ref from '../firebaseUtil.js';
import * as firebase from '../firebaseUtil.js';


const initialState = [{
  text: 'Hi ...'
}];

export default function posts(state = [], action) {
  switch (action.type) {
  case ADD_POST:
    return state = [ ...state, {
      text: action.newPost
    }];
  case ADD_BASE_POST:
    return state = [ ...state, {
      text: action.basePost
    }];
  default:
    return state;
  }
}

/*
reducer post ( state, action) => newState
case ADD_POST
default
	load messages from 
*/