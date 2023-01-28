
import { Grid, Avatar } from '@mui/material';

interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments(props: CommentProps) {
  return (
    <Grid container wrap="nowrap" spacing={2} pt={5}>
      <Grid item>
        <Avatar alt={props.name} src={""} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0 }}>{props.name}</h4>
        <p>{props.body}</p>
      </Grid>
    </Grid>
  )
}
