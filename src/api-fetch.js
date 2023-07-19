import axios from "axios";

const postUrl = `http://192.168.56.1:8420/api/`;
const endpoint = ["get-demos", "post-demo"];

async function getDemos() {
  try {
    const response = await axios.get(postUrl + endpoint[0]);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error;
  }
}

async function postDemo(creator_name, description, url) {
  console.log(creator_name, description, url);
  try {
    const response = await axios.post(postUrl + endpoint[1], {
      creator_name,
      description,
      url,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error posting demo:", error);
    throw error;
  }
}

export { getDemos, postDemo };
