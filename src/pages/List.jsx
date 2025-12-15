import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data.slice(0, 10)));
  }, []);

  return (
    <div className="page">
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="list-item"
          onClick={() => navigate(`/detail/${post.id}`)}
        >
          <h4>{post.title}</h4>
          <p>{post.body.slice(0, 60)}...</p>
        </div>
      ))}
    </div>
  );
}

export default List;