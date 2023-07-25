import { useLoaderData, defer, Await } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts, getSlowPosts } from "../util/api";

function PostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Posts</h1>
      <Posts Posts={loaderData} />
    </>
  );
}

export default PostsPage;

export function loader() {
  return getSlowPosts();
}
