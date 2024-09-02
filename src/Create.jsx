const Create = () => {
  return (
    <div>
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <inputt type="text" required />
        <label>Blog Body:</label>
        <textarea>required</textarea>
        <label>Blog Author:</label>
        <select>
          <option value="ray">ray</option>
          <option value="nate">nate</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
