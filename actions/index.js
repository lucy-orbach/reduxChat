import * as types from '../constants/ActionTypes.react';

export function addPost(postText) {
  return {
    type: types.ADD_POST, postText
  };
}