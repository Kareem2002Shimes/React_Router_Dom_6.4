import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import PostsLayout from "./pages/PostsLayout";
import PostsPage from "./pages/Posts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import { loader as postsLoader } from "./pages/Posts";
import { loader as postLoader } from "./pages/PostDetail";
import ErrorPage from "./pages/Error";
import { action as newPostAction } from "./pages/NewPost";
import DeferedPosts from "./pages/DeferedPosts";
import { loader as DeferedpostsLoader } from "./pages/DeferedPosts";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<WelcomePage />} />
        <Route path="/posts" element={<PostsLayout />}>
          <Route index element={<DeferedPosts />} loader={DeferedpostsLoader} />
          <Route path=":id" element={<PostDetailPage />} loader={postLoader} />
        </Route>
        <Route
          path="/post/new"
          element={<NewPostPage />}
          action={newPostAction}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
