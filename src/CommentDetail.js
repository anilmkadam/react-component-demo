import React from 'react';
import faker from 'faker';

const CommentDetail = (prop) => {
    let comment = prop.comment;
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={comment.avatar || faker.image.avatar() } />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {comment.author || 'user'}
                </a>
                <div className="metadata">
                    <span className="date">{comment._timestamp || '1 min ago'}</span>
                </div>
                    <div className="text">{comment.text || 'Cool'}</div>
            </div>
        </div>
    );
}

export default CommentDetail;