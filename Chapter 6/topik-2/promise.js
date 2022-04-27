const axios = require("axios");

// promise
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    throw error;
  });

// async/await
async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}
getUsers();

(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    console.log(response.data);
  } catch (error) {
    throw error;
  }
})();
