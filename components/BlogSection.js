import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import { right } from "@popperjs/core";

const BlogSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  user,
  handleDelete,
}) => {
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Blogs</div>
      {blogs?.map((item) =>(
    <div className="row pb-4" key={item.id}>
      <div className="col-md-5">
        <div className="hover-blogs-img">
          <div className="blogs-img">
            <img src={item.imgUrl} alt={item.title} />
            <div></div>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="text-start">
          <h6 className="category catg-color">{category}</h6>
          <span className="title py-2">{title}</span>
          <span className="meta-info">
            <p className="author">{author}</p> -&nbsp;
            {timestamp.toDate().toDateString()}
          </span>
        </div>
        <div className="short-description text-start">
          {excerpt(description, 120)}
        </div>
        <Link to={`/detail/${item.id}`}>
          <button className="btn btn-read">Read More</button>
        </Link>


        {user && user.uid === userId && (
          <div style={{ float: "right" }}>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to={`/update/${item.id}`}>Edit</Link>
            <div style={{float: "right"}}>
          <FontAwesomeIcon
          name="trash"
          style={{margin :"15px",cursor: "pointer"}}
          size="2x"
          onClick={()=> handleDelete(item.id)}
        />
        <Link to={/update/$(item.id)}>
        <FontAwesomeIcon
        name="edit"
        style={{cursor: "pointer"}}
        size="2x"
        />
        </Link>
        </div>

          </div>
        )}
      </div>
    </div>
  ))}
  </div>
  );
};

export default BlogSection;
