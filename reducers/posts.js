/**** REDUCER  function(state + action) =>  new state  ****/
import {ADD_POST, SAVE_POST} from '../constants/ActionTypes.react';
import ref from '../firebaseUtil.js';
import * as firebase from '../firebaseUtil.js';


const initialState = [{
  text: 'Hi ...'
}];

export default function posts(state = initialState, action) {
  switch (action.type) {
  case ADD_POST:
    let state = [ ...state, {
      text: action.newPost
    }];
    console.log('reducer post');
   //  const chatRef = new Firebase('https://reactreduxchat.firebaseio.com/posts');
  	// chatRef.push({ 'post': action.newPost});
    return state

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