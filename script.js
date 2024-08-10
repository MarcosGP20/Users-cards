const app = document.querySelector(".container");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((json) => {
    json.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      const phone = document.createElement("p");
      phone.innerHTML = user.phone;

      const email = document.createElement("p");
      email.innerHTML = user.email;

      const name = document.createElement("p");
      name.setAttribute("id", user.id);
      name.innerHTML = user.name;
      name.addEventListener("click", function () {
        window.location.href = `./user.html?id=${user.id}`;
      });
      userDiv.appendChild(name);
      userDiv.appendChild(email);
      userDiv.appendChild(phone);

      app.appendChild(userDiv);
    });
  })
  .catch((err) => console.log(err));
