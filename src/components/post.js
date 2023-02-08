import React from "react";

class Post extends React.Component {
    render() {
        return(
            <div className='text'>
                <h1 className="post_title">{this.props.title}</h1>
                <h2 className="post_subtitle">{this.props.subtitle}</h2>
            </div>
        )
    }
}

export default Post
