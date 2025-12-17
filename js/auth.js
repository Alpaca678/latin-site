function login() {
  let users = JSON.parse(localStorage.getItem("latinData")).users;
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  let valid = users.find(user => user.username === u && user.password === p);

  if (valid) {
    localStorage.setItem("currentUser", u);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}
