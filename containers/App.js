import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';
import * as PostActions from '../actions'

class App extends Component {
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
        <AddPost onAddClick={actions.addPost}/>
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
