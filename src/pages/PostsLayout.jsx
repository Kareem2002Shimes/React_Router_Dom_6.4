import { Outlet } from "react-router-dom";

import PostActions from "../components/PostActions";

function PostsLayout() {
  return (
    <>
      <PostActions />
      <Outlet />
    </>
  );
}

export default PostsLayout;
