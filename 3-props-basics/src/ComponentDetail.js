import React from 'react'
import faker from 'faker'

const ComponentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 4:00PM</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

export default ComponentDetail;

