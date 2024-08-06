// Variable to store the currently logged-in user
let loggedInUser = null;

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Implement backend login functionality here
  // You can use fetch API to send the email and password to the server for authentication
  // For now, let's assume a successful login and set the loggedInUser variable
  loggedInUser = email;

  // Update the UI to show the dashboard and hide the login section
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('loggedInUser').innerText = email;
}

function showYearPage() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('yearPage').style.display = 'block';
}

function showSemesterPage() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('semesterPage').style.display = 'block';
}

function showSubjectPage() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('subjectPage').style.display = 'block';
}

function showDashboard() {
  document.getElementById('yearPage').style.display = 'none';
  document.getElementById('semesterPage').style.display
