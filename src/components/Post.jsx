import classes from "./Post.module.css";

function Post({ title, text }) {
  return (
    <article className={classes.post}>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default Post;
