import React from "react";
import ReactDOM  from "react-dom";
import './index.css';

const Tweet = ()=>{
  return(
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author /><Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

const Avatar = () => {
  return(
    <img
      src = "https://www.gravatar.com/avatar/nothing"
      className = "avatar"
      alt="avatar"
    />
  );
}

const Message = ()=>{
  return(
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

const Author = ()=>{
  return(
    <span className="author">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = ()=>(
  <span className="time">3h ago</span>
);

const ReplyButton = ()=>(
  <i className="fas fa-reply reply-button"></i>
);

const RetweetButton = ()=>(
  <i className="fas fa-retweet retweet-button"></i>
);

const LikeButton = ()=>(
  <i className="fas fa-heart like-button"></i>
);

const MoreOptionsButton = ()=>(
  <i className="fas fa-ellipsis-h more-options-button"></i>
);



ReactDOM.render(<Tweet />, document.querySelector("#root"));