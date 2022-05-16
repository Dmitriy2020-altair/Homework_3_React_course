import React from 'react';
import PostItem from '../PostItem.jsx/PostItem';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
      ],
      isEdit: false,
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }))
  };

  deletePost = (postId) => {
    const filteredPosts = this.state.posts.filter((post) => post.id !== postId)
    this.setState({ posts: filteredPosts })
  }

  editePostTitle = () => {
    this.setState({ isEdit: !this.state.isEdit })
  };

  render() {
    return (
      <div>
        <PostItem
          posts={this.state.posts}
          deletePost={this.deletePost}
          editePostTitle={this.editePostTitle}
          isEdit={this.state.isEdit}
        />
      </div>
    );
  }
}

export default PostList;