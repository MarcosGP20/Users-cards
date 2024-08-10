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

      const company = document.createElement("div");
      company.innerHTML = `<strong>Company: </strong> ${user.company.name}`;

      const name = document.createElement("p");
      name.setAttribute("id", user.id);
      name.innerHTML = user.name;
      name.addEventListener("click", function () {
        window.location.href = `./user.html?id=${user.id}`;
      });
      userDiv.appendChild(name);
      userDiv.appendChild(email);
      userDiv.appendChild(phone);
      userDiv.appendChild(company);

      app.appendChild(userDiv);
    });
  })
  .catch((err) => console.log(err));
