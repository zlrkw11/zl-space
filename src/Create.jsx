import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("ray");
  return (
    <div className="create">
      <h2>Add Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>{title}</p>

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="ray">ray</option>
          <option value="nate">nate</option>
        </select>
        <p>{author}</p>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
