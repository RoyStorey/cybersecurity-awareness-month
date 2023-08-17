import Header from "../components/Header";
import "../css/styles.css";
import { useQuery } from "react-query";
import { getDemos } from "../api-fetch";
import PendingSubmissions from "../components/PendingSubmissions";
import AdminDemos from "../components/AdminDemos";

function HomeAdmin() {

  let { data, error, isError, isLoading } = useQuery("demos", getDemos);

  if (isError) return "Error!";
  if (isLoading) return "Loading...";
  if (error) return `There was an error! ${error}`;
  return (
    <body>
    <div class="page-container">
      <div class="content-container">
        <div class="hero">
          <h1>Homepage Admin</h1>
        </div>
        <Header />
        <div class="body-container">
          <div className="submissions">
            <AdminDemos data={data} />
          </div>
        </div>
      </div>
    </div>
  </body>
  );
}

export default HomeAdmin;