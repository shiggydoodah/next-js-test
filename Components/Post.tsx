import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Comments from './Comment';
interface PostProps<T> {
  id: number;
  title: string;
  body: string;
  comments: IComment[]
}

const Post = (props: PostProps<any>) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Box
      width="500px"
      maxHeight="100%"
      p={3}
      sx={{
        background: "#f5f5f5",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <Button
        variant="outlined"
        disabled={props.comments.length === 0}
        aria-expanded={showComments}
        onClick={() => setShowComments(!showComments)}>
        {
          props.comments.length > 0 ? `${props.comments.length} comments` : `No comments`
        }
      </Button>
      {
        showComments &&
        <div>
          {props.comments.map((comment) => (
            <Comments key={comment.id} id={comment.id} name={comment.name} email={comment.email} body={comment.body} />
          ))}
        </div>
      }
    </Box >
  )
}

export default Post
