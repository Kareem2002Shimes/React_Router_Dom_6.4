import { useLoaderData, defer, Await } from "react-router-dom";
import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";
import { Suspense } from "react";

function PostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error Loading posts.</p>}
        >
          {(loadedPosts) => <Posts Posts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default PostsPage;

export function loader() {
  // fetch data
  return defer({ posts: getSlowPosts() });
}
