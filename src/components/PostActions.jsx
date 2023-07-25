import { Link } from "react-router-dom";

import classes from "./PostActions.module.css";

function PostActions() {
  return (
    <div className={classes.actions}>
      <Link className={classes.button} to="/post/new">
        Add Post
      </Link>
    </div>
  );
}

export default PostActions;
