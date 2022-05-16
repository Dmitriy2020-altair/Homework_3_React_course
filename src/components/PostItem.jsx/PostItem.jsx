import React from 'react';
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import './PostItem.css'

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
            ],
            title: ''
        };
    }

    render() {
        const posts = this.props.posts;

        return (
            posts.map((post) => {
                const { id, body, title } = post;
                return (
                    <div
                        key={id}
                        className='post-item-wrapper'
                    >
                        <div><span className='post-item-number'>Post #{id}</span></div>
                        {this.props.isEdit ? <input
                            id={id}
                            className='post-item-content'
                            onChange={(e) => this.setState({ title: e.target.value })}
                            type="text"
                            value={this.state.title}
                            placeholder='type new title'
                        />
                            :
                            <div className='post-item-content'>{this.state.title ? this.state.title : title}</div>
                        }
                        <div className='post-item-content'>{body}</div>
                        <div className='button-block'>
                            <EditButton
                                editePostTitle={() => this.props.editePostTitle()}
                                isEdit={this.props.isEdit}
                            />
                            <DeleteButton
                                deletePost={() => this.props.deletePost(id)} />
                        </div>
                    </div>
                )
            })
        );
    }
}
export default PostItem;