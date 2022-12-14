const api = require("node-fetch");

let getData = api("https://jsonplaceholder.typicode.com/userss");
getData
  .then((res) => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then((user) => {
    user.map((e) => {
      console.log(`Name : ${e.name}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
