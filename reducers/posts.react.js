import {ADD_POST} from '../constants/ActionTypes.react';

const initialState = [{
  // userName: 'Lucy',
  text: 'Hi this is post 1'
}, {text: 'this is post 2'}];

export default function posts(state = initialState, action) {
  switch (action.type) {
  case ADD_POST:
    return [...state, {
      // userName: action.userName,
      text: action.postText
    }];
  default:
    return state;
  }
}
