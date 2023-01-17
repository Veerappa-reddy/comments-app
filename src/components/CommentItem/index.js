const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails

  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
    </li>
  )
}

export default CommentItem
