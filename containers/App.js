import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
//import Rebase from 're-base';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';
import * as PostActions from '../actions';
import { addPost, addPostIfNeeded } from '../actions';
import Firebase from 'firebase';


class App extends Component {
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  // this.handleExternalPost = this.handleExternalPost.bind(this);
}

componentDidMount() {
  //firebase
  const chatRef = new Firebase('https://reactreduxchat.firebaseio.com/posts');
  
  chatRef.on('child_added', (snapshot, prevChildKey) => {
      let basePost = snapshot.val();
      this.props.dispatch(addPostIfNeeded(basePost));
  });
  
  //re-base
    // const base = Rebase.createClass('https://reactreduxchat.firebaseio.com/posts');
    // base.listenTo('posts', {
    //   context: this,
    //   asArray: true,
    //   then(postsData){
    //     let latestPost = 'yo';
    //     console.log('listening');
    //     console.log(postsData[0]);
    //     this.props.dispatch(addPostIfNeeded(latestPost));
    //   }
    // });
  
  //this.props.dispatch(addPostIfNeeded());
}
       
handleClick(newPost) {
  this.props.dispatch(addPost(newPost));
}

render() {
  const { posts, dispatch } = this.props;
  const actions = bindActionCreators(PostActions, dispatch);
  let containerStyle = {
    width: '340px',
    padding: '40px',
    border: '2px solid cyan',
    textAlign: 'center'
  };
  return (
    <div style={containerStyle}>
      <h1>Let's Chat!</h1>
      <Posts posts={posts} />
      <AddPost onAddClick={(newPost) => this.handleClick(newPost)}/>
    </div>
  );
}

}

App.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
