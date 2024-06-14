import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not post the data for that resource");
        }
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setAuthor("mario");
        setBody("");
        setTitle("");
      });
  };

  return (
    <div className="create">
      <h2>Add Blog</h2>
      {error && <div class="error">{error}</div>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          name="blog-body"
          id="blog-body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="luigi">Luig</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
