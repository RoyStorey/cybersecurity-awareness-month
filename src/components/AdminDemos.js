import { deleteDemo } from "../api-fetch";

function AdminDemos(props) {

    function removeDemo(uid){
        deleteDemo(uid)
        console.log('Demo Removed..')
        window.location.reload();
    }

    const listOfDemos = props.data.map((item, key) => (
      <div class="submission">
        <iframe width="420" height="315" src={item.url} title="Demo"></iframe>
        <p>{item.description}</p>
        <p>Created by: {item.creator_name}</p>
        <p>UID: {item.uid}</p>
        <button onClick={() => removeDemo(item.uid)}>DELETE</button>
      </div>
    ));
    return listOfDemos;
  }
  
  export default AdminDemos;