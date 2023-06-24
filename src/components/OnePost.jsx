const OnePost = ({post}) => {
  return (
    <div className="card">
      <div className="card-header">{post.category.name}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
         {post.body}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-muted">{post.user.name}</div>
    </div>
  );
};

export default OnePost;
