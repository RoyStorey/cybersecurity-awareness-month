import axios from "axios";

const postUrl = `http://172.16.220.218:8420/api/`;
const endpoint = ["get-demos","approve-demo", "get-unapproved-demos", "post-demo", "deny-demo"];

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


async function approveDemo(creator_name, description, url) {
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

async function getUnapprovedDemos() {
  try {
    const response = await axios.get(postUrl + endpoint[2]);
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
    const response = await axios.post(postUrl + endpoint[3], {
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

async function denyDemo(uid) {
  console.log(uid);
  try {
    const response = await axios.post(postUrl + endpoint[4], {
      uid
    });
    return response.data.data;
  } catch (error) {
    console.error("Error posting demo:", error);
    throw error;
  }
}

export { getDemos, postDemo, getUnapprovedDemos, approveDemo, denyDemo};
