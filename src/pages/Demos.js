import Header from "../components/Header";
import { useQuery } from "react-query";
import { getDemos } from "../api-fetch";
import Submissions from "../components/Submissions";

function Demos() {
  let { data, error, isError, isLoading } = useQuery("demos", getDemos);

  if (isError) return "Error!";
  if (isLoading) return "Loading...";
  if (error) return `There was an error! ${error}`;
  return (
    <body>
      <div class="page-container">
        <div class="content-container">
          <div class="hero">
            <h1>Uploaded Demos</h1>
          </div>
          <Header />
          <div class="body-container">
            <Submissions data={data} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Demos;
