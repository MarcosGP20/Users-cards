const app = document.querySelector(".container");
const url = "https://jsonplaceholder.typicode.com/users";
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get("id");

fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((json) => {
    const name = document.createElement("p");
    name.innerHTML = json.name;

    app.appendChild(name);
    app.appendChild(company);
  })

  .catch((err) => console.log(err));
