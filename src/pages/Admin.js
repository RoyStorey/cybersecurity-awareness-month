import Header from "../components/Header";
import "../css/styles.css";
import { useQuery } from "react-query";
import { getUnapprovedDemos } from "../api-fetch";
import PendingSubmissions from "../components/PendingSubmissions";

function Admin() {

  let { data, error, isError, isLoading } = useQuery("demos", getUnapprovedDemos);

  if (isError) return "Error!";
  if (isLoading) return "Loading...";
  if (error) return `There was an error! ${error}`;
  return (
    <body>
    <div class="page-container">
      <div class="content-container">
        <div class="hero">
          <h1>Admin</h1>
        </div>
        <Header />
        <div class="body-container">
          <div className="submissions">
            <PendingSubmissions data={data} />
          </div>
        </div>
      </div>
    </div>
  </body>
  );
}

export default Admin;
