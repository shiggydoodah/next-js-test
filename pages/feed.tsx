import type { NextPage } from "next";
import Container from '@mui/material/Container';
import Post from "../Components/Post";
import Head from "next/head";

const Feed: NextPage<{ posts: IPost[] }> = (props) => {
  return (
    <>
      <Head>
        <title>Fanvue Dev Test</title>
        <meta name="description" content="Fanvue Dev Test" />
      </Head>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}>
        {props.posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} body={post.body} comments={post.comments} />
        ))}
      </Container>
    </>
  )
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json() as IPost[];
  const postPromises = posts.map(async post => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const comments = await res.json();
    return { ...post, comments };
  });
  const postsWithComments = await Promise.all(postPromises);
  return {
    props: {
      posts: postsWithComments
    }
  }
}

export default Feed;
