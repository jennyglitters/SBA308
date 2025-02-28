
let users = JSON.parse(localStorage.getItem('users')) || [];


document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  if (users.some(user => user.username === username)) {
    document.getElementById('registerMessage').textContent = 'Username already exists!';
  } else {
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users)); 
    document.getElementById('registerMessage').textContent = 'Registration successful!';
    document.getElementById('registerForm').reset();
  }
});


document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;


  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    document.getElementById('loginMessage').textContent = 'Login successful! Redirecting...';
    localStorage.setItem('loggedInUser', username); 
    setTimeout(() => {
      window.location.href = 'appointment.html'; 
    }, 1000); 
  } else {
    document.getElementById('loginMessage').textContent = 'Invalid username or password!';
  }
});


function checkLoggedIn() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    
    const nav = document.querySelector('nav ul');
    if (nav) {
      nav.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="appointment.html">Appointment</a></li>
        <li><a href="#" id="logout">Logout</a></li>
      `;
      document.getElementById('logout')?.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser'); 
        window.location.href = 'index.html'; 
      });
    }
  }
}


checkLoggedIn();
