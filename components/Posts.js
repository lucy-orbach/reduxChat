import React, { PropTypes, Component } from 'react';

export default class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let posts = this.props.posts;
    return (
      <ul style={{
        listStyleType: 'none',
        textAlign: 'left',
        paddingLeft: '0px'
      }}>
        {posts.map((post, i) =>
          <li key={i} style={{
            padding: '20px',
            borderRadius: '7px',
            backgroundColor: '#f3f3f3',
            margin: '20px 0px'
          }}>
            {post.text}
          </li>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

/*
let mapPosts = this.props.posts.map((post, i) => {
      return (
        
        );
    });
    */