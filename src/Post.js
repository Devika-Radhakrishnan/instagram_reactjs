import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';



function Post() {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar className="post__avatar" src="/static/images/avatar/1.jpg" alt="Devika"></Avatar>
            <h3>Username</h3>
            </div>
            
            {/* header+avatar+username */}
            <img className="post__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJZlDVUEdSV2nk8rVT6zqtz-C_eybL6I9_Hg&usqp=CAU" alt="post"/>
            {/* Image */}
            <h4 className="post__text"><strong>Devika:</strong>Hey!that's the nice pic</h4>
            {/* username+caption */}
        </div>
    )
}

export default Post
