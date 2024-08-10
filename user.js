const app = document.querySelector("container");
const url = "https://jsonplaceholder.typicode.com/users";
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get("id");
console.log(`${url}/${id}`);
fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
