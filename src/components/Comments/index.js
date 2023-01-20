import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {
    userName: '',
    userComment: '',
    commentsList: [],
  }

  likeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  renderCommentItem = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        likeComment={this.likeComment}
        deleteComment={this.deleteComment}
      />
    ))
  }

  addDetails = event => {
    event.preventDefault()
    const {userName, userComment} = this.state

    const commentDetail = {
      id: uuidv4(),
      name: userName,
      comment: userComment,
      isLiked: false,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentDetail],
      userName: '',
      userComment: '',
    }))
  }

  addUsername = event => {
    this.setState({userName: event.target.value})
  }

  addComment = event => {
    this.setState({userComment: event.target.value})
  }

  render() {
    const {commentsList, userName, userComment} = this.state

    return (
      <div className="app-container">
        <div className="top-section">
          <div className="comment-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 technologies</p>
            <form className="form-container" onSubmit={this.addDetails}>
              <input
                type="text"
                className="input-name"
                placeholder="Your Name"
                value={userName}
                onChange={this.addUsername}
              />
              <textarea
                rows="6"
                cols="40"
                placeholder="Your Comment"
                onChange={this.addComment}
                value={userComment}
              />

              <button className="add-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <div className="bottom-section">
          <p>
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul className="list-item">{this.renderCommentItem()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments

// {
//   /* <ul>
//             {commentsList.map(eachComment => (
//               <CommentItem commentDetails={eachComment} />
//             ))}
//           </ul> */
// }

//  <div className="comment-item-container">
//             <div className="comment-user">
//               <h1 className="user-icon">R</h1>
//               <h1>Richard Branson</h1>
//               <p>2 minutes ago</p>
//             </div>
//             <p>
//               Thanks for being so typically supportive and such a good freind
//             </p>
//             <div className="like-delete-container">
//               <button type="button">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
//                   alt="like"
//                   className="like-btn"
//                 />
//                 Like
//               </button>
//               <button type="button" data-testid="delete">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
//                   alt="delete"
//                   className="delete-btn"
//                 />
//               </button>
//             </div>
//           </div>
