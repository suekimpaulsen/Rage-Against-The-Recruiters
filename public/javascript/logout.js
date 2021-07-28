async function logout() {
    const response = await fetch('/api/users/logout');

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
var logoutHandler = function(event) {
    if (event.target.matches("#logoutButton")) {
        logout();
    }
}
  document.querySelector('#logout-container').addEventListener('click', logoutHandler);
  