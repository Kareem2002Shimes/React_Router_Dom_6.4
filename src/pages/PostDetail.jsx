import { useLoaderData } from "react-router-dom";

import Post from "../components/Post";
import { getPost } from "../util/api";

function PostDetailPage() {
  const postData = useLoaderData();
  return (
    <>
      <Post title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;
export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
