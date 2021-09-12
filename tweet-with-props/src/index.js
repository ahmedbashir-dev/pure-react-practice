import React from "react";
import ReactDOM  from "react-dom";
import moment from "moment";
import PropTypes from 'prop-types';
import './index.css';


const Comment = ({author, message, likes})=>{
  return(
    <div>
      <div className = "author">{author}</div>
      <div className = "message">{message}</div>
      <div className = "likes">{likes > 0? likes: 'No'} likes</div>
    </div>
  );
}
Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes:PropTypes.number
}

const Tweet = ({tweet})=>{
  return(
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /><Time />
        <Message text = {tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

const Avatar = ({hash}) => {
  const url = `https://www.gravatar.com/avatar/${hash}`
  return(
    <img
      src = {url}
      className = "avatar"
      alt="avatar"
    />
  );
}

const Message = ({text})=>{
  return(
    <div className="message">
      {text}
    </div>
  );
}

const Author = ({author})=>{
  const {name, handle} = author;
  return(
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({time})=>{
  const timeString = moment(time).fromNow();
  return(
      <span className="time">{timeString}</span>
  );
}

const ReplyButton = ()=>(
  <i className="fas fa-reply reply-button"></i>
);

function Count({count}){
  if(count>0){
    return(
      <span className = "retweet-count">
        {count}
      </span>
    );
  }
  else{
    return null;
  }
}


const RetweetButton = ({count})=>(
  <span className = "retweet-count">
    <i className="fas fa-retweet retweet-button"></i>
    <Count count={count}/>
  </span>
);

const LikeButton = ({count})=>(
  <span className="like-button">
    <i className="fas fa-heart like-button"></i>
    {count > 0 && 
      <span className = "like-count">{count}</span>
    }
  </span>
);

const MoreOptionsButton = ()=>(
  <i className="fas fa-ellipsis-h more-options-button"></i>
);

const testTweet = {
  message: "Something about cats.",
  gravatar: "115664db2439fda3b201825d8c5d320a",
  author:{
    handle: "catperson",
    name:"IAMA car person"
  },
  likes:2,
  retweets: 2,
  timestamp: "2019-07-30 21:32:22"
}

function RenderComments(){
  return(
    <>
  <Comment author='somebody' message='a likable message' likes={1}/>
  <Comment author='mr_unpopular' message='unlikable message'/>
  <Comment author='mr_unpopular' message='another message' likes={0}/>
  <Comment author='error_missing_message'/>
  <Comment message='mystery author'/>
  </>
  );
}

ReactDOM.render(<RenderComments />, document.querySelector("#root"));