/**** actions  *****/
import * as types from '../constants/ActionTypes.react';
import Firebase from 'firebase';
// import Rebase from 're-base';

export function savePost(newPost) {
  const chatRef = new Firebase('https://reactreduxchat.firebaseio.com/posts');
  chatRef.push({ 'post': newPost });
}

export function addPost(newPost) {
  savePost(newPost);
  return {
    type: types.ADD_POST, 
    newPost
  };
}

export function loadPostsfromData() {

}



// export function addAndSaveNewPost(newPost) {
//   return dispatch => {
//     return savePost(newPost).then
//     (newPost => dispatch(addPost(newPost)));
//   };
// }


