fetch("http://localhost:8080/account")
  .then(res => res.json())
  .then(data => {
    const body = document.getElementById("listAccount");
    data.forEach(item => {
      let row = document.createElement("tr");

      let idTd = document.createElement("td");
      idTd.innerHTML = item.id;
      let nameTd = document.createElement("td");
      nameTd.innerHTML = item.name;
      let emailTd = document.createElement("td");
      emailTd.innerHTML = item.email;
      let passTd = document.createElement("td");
      passTd.innerHTML = item.pass;

      row.appendChild(idTd);
      row.appendChild(nameTd);
      row.appendChild(emailTd);
      row.appendChild(passTd);
      body.appendChild(row);
    });
  })