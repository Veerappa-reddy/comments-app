import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, likeComment, deleteComment} = props
  const {name, isLiked, comment, id, date} = commentDetails

  const onClickLike = () => {
    likeComment(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const postedTime = formatDistanceToNow(date)

  const likeBtn = isLiked ? 'liking-btn' : 'normal-like-btn'
  const likeImgurl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="comment-container-1">
        <div className="name-container">
          <h1 className="name">
            <span className="name-logo">{name[0].toUpperCase()}</span>
            {name}
          </h1>
          <p className="time">{postedTime} ago</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="like-delete-container">
          <div className="like-container">
            <img src={likeImgurl} className="like-image" alt="like" />
            <button type="button" className={likeBtn} onClick={onClickLike}>
              like
            </button>
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={onDeleteComment}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="delete-btn"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
