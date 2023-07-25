import { Link } from "react-router-dom";

import classes from "./Posts.module.css";

function Posts({ Posts }) {
  return (
    <ul className={classes.posts}>
      {Posts.map((post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
