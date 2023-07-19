function Submissions(props) {
  const listOfSubmissions = props.data.map((item, key) => (
    <div class="submission">
      <iframe width="420" height="315" src={item.url} title="Demo"></iframe>
      <p>{item.description}</p>
      <p>Created by: {item.creator_name}</p>
    </div>
  ));
  return listOfSubmissions;
}

export default Submissions;
