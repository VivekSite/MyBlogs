import React from "react";
import './card.css';

function Card(props) {
    return (
        <>
            <div className="blog-post">
                <img src={props.blogImg} alt="blog-img" className="blog-img"/>
                <div className="blog-info">
                    <h2 className="blog-title">{props.blogTitle}</h2>
                    <p className="blog-text">{props.blogText}</p>
                </div>
            </div>
        </>
    )
}



export default Card;