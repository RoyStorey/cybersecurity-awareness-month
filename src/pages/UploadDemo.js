import Header from "../components/Header";
import "../css/styles.css";
import { postDemo } from "../api-fetch";

function UploadDemo() {
  function getEmbed(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const creator_name = document.getElementById("upload_creator_name").value;
    const description = document.getElementById("upload_description").value;
    const url =
      "https://youtube.com/embed/" +
      getEmbed(document.getElementById("upload_url").value);
    postDemo(creator_name, description, url);

    alert("Demo submitted successfully..");
    window.location.reload();
  };

  return (
    <body>
      <div class="page-container">
        <div class="content-container">
          <div class="hero">
            <h1>Upload Demo</h1>
          </div>
          <Header />
          <div class="body-container">
            <form
              className="upload-demo-form"
              onSubmit={(e) => handleFormSubmit(e)}
              method="post"
            >
              <input
                name="creator_name"
                id="upload_creator_name"
                placeholder="Creator Name"
                required
              ></input>
              <textarea
                name="description"
                id="upload_description"
                placeholder="Description"
                required
              ></textarea>
              <input
                name="url"
                id="upload_url"
                placeholder="Youtube URL"
                required
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default UploadDemo;
