const form = document.getElementById("cont");
form.addEventListener("submit", function(bnb) {
  bnb.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const data = { name, email, pass };
  saveData(data);
})
function saveData(data) {
  fetch("http://localhost:8080/account", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
}
