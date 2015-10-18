import Firebase from 'firebase';

const database = new Firebase('https://reactreduxchat.firebaseio.com');
// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function savePost(action.text) {
  database.push({ 'post': newPost });
}


