import React from "react";
import PropTypes from "prop-types";

const Card = ({ blog }) => {
  const {
    author,
    author_img,
    cover,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;

  return (
    <div className="card">
      <div className="img">
        <img src={cover} alt="" />
      </div>
      <div className="author flex justify-between gap-4">
        <div className="left flex">
          <img src={author_img} alt="" className="w-10" />
          <div className="s flex flex-col">
            <div className="auth"> {author}</div>
            <div className="date"> {posted_date}</div>
          </div>
        </div>
        <div className="right flex gap-4">
          <div className="read">{reading_time} Minutes Read</div>
          <div className="bkmark">BK</div>
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="tags flex gap-4">
        {hashtags.map((item, idx) => {
          return (
            <a key={idx} href={item}>
              {item}
            </a>
          );
        })}
      </div>
      <div className="More">
        <button>Mark as read</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  blog: PropTypes.object,
  author: PropTypes.string,
};
export default Card;
