import { approveDemo, denyDemo } from "../api-fetch";

function PendingSubmissions(props) {

    function approveSubmission(creator_name, description, url, uid){
        approveDemo(creator_name, description, url)
        denyDemo(uid)
        console.log('Submission Approved..')
        window.location.reload();

    }

    function denySubmission(uid){
        denyDemo(uid)
        console.log('Submission Denied..')
        window.location.reload();

    }

    const listOfSubmissions = props.data.map((item, key) => (
      <div class="submission">
        <iframe width="420" height="315" src={item.url} title="Demo"></iframe>
        <p>{item.description}</p>
        <p>Created by: {item.creator_name}</p>
        <p>UID: {item.uid}</p>
        <button onClick={() => approveSubmission(item.creator_name, item.description, item.url, item.uid) }>LGTM+</button>
        <button onClick={() => denySubmission(item.uid)}>DENY</button>
      </div>
    ));
    return listOfSubmissions;
  }
  
  export default PendingSubmissions;
  