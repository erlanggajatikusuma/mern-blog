import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title blog</p>
                <p className="author">Author Date Post</p>
                <p className="body">loremNonumy lorem no sadipscing diam eirmod. Kasd voluptua clita voluptua et at kasd justo magna tempor. Dolor takimata duo magna.</p>

            </div>
        </div>
    )
}

export default BlogItem
