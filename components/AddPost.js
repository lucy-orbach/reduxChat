import React, { PropTypes, Component, findDOMNode } from 'react';

export default class AddPost extends Component {
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
  	let node = findDOMNode(this.refs.postInput);
  	let newPost = node.value.trim();
  	this.props.onAddClick(newPost);
  	node.value = '';
  }
  render() {
  	let containerStyle = {
			marginTop: '20px',
			borderTop: '1px dotted cyan',
			padding: '20px 0px',
			textAlign: 'center'
		};
		let inputStyle = {
      padding: '20px',
      borderRadius: '7px',
      borderColor: '#c3c3c3',
      resize: 'none',
      width: '260px',
      margin: '20px 0px'
    };
    let btnStyle = {
  		padding: '7px 30px',
  		backgroundColor: 'transparent',
  		border: '2px solid cyan'
  	};
		return (
			<div style={containerStyle}>
				<input type="text" ref="postInput" placeholder="Have something to say?" autofocus style={inputStyle} />
        <button onClick={(e) => this.handleClick(e)} style={btnStyle}>Post</button>
			</div>
		);
	}
}

AddPost.propTypes = {
	onAddClick: PropTypes.func.isRequired
};
