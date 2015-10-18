import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Rebase from 're-base';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';
import * as PostActions from '../actions';
import { addPost } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //
    //  componentDidMount() {
    //   const { dispatch, selectedReddit } = this.props;
    //   dispatch(fetchPostsIfNeeded(selectedReddit));
    // }
     componentWillReceiveProps(nextProps) {
      if (nextProps.posts !== this.props.posts) {
        let lastMessage = nextProps.posts.slice(-1)[0]
        this.props.dispatch(
          PostActions.savePost(lastMessage.text)
        );
      }
    }


    // componentWillMount() {
    //   const base = Rebase.createClass('https://reactreduxchat.firebaseio.com');
    //  /*
    //   * bindToState: updates
    //   * the 'posts'state  whenever our 'posts'
    //   * Firebase endpoint changes.
    //   */
    //   base.bindToState('posts', {
    //     context: this,
    //     state: 'posts',
    //     asArray: true
    //   });
    // }
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
