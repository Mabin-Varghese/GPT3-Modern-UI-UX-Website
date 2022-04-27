import React from "react";
import "./article.css";

const Article = ({ imgUrl , date, title }) => {
    return (
        <div className="gpt3__blog-cointainer_ariticle">
            <div className="gpt3__blog-cointainer_ariticle_image">
                <img src={imgUrl} alt="Blog" />
            </div>
            <div className="gpt3__blog-cointainer_ariticle-content">
              <div>
              <p>{date}</p>
              <h3>{title}</h3>
              </div>
              <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
