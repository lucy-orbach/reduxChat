/**** actions  *****/
import * as types from '../constants/ActionTypes.react';
import Firebase from 'firebase';
//import Rebase from 're-base';

export function addPost(newPost) {
  savePost(newPost);
  return {
    type: types.ADD_POST, 
    newPost
  };
}
export function savePost(newPost) {
  const chatRef = new Firebase('https://reactreduxchat.firebaseio.com/posts');
  chatRef.push({ 'post': newPost });
}
export function addExternalPost(basePost) {
  console.log('inside addExternalPost');
  console.log('and the basePost is...');
  console.log(basePost)
  return {
    type: types.ADD_BASE_POST, 
    basePost
  };
}


function shouldAddPost(state, basePost) {
  console.log('inside shouldAddPost');
  const posts = state.posts;
  if (posts.length !=0) {
    let i = posts.length - 1;
    let lastPostOnState = posts[i].text;
    console.log('lastPostOnState');
    console.log(lastPostOnState);
    console.log('basePost');
    console.log(basePost.post);
    if ( lastPostOnState !== basePost.post) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function addPostIfNeeded(basePost) {
  console.log('addPostIfNeeded?');
  console.log(basePost);
  console.log(basePost);
  console.log(basePost);
  return (dispatch, getState) => {
    if (shouldAddPost(getState(), basePost)) {
      console.log('ADD THE POST!!!!');
      return dispatch(addExternalPost(basePost));
    } else {
      console.log('post will be added with ADD_POST');
      return null;
    }
  };
}

/*
Warning: Any use of a keyed object should be wrapped in React.addons.createFragment(object) before being passed as a child.
*/



