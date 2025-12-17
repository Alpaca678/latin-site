function teacherLogin() {
  let data = JSON.parse(localStorage.getItem("latinData"));
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === data.teacher.username && p === data.teacher.password) {
    window.location.href = "teacher-dashboard.html";
  } else {
    alert("Invalid");
  }
}
