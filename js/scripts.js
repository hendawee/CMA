function togglePasswordVisibility() {
  var passwordField = document.getElementById("login-password");
  var toggleIcon = document.getElementById("togglePassword");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
  } else {
      passwordField.type = "password";
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
  }
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

  // show all services in hr page
document.querySelector('.show-all').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the link from triggering its default behavior
  var dashboard = document.querySelector('.dash-items');
  dashboard.style.maxHeight = dashboard.scrollHeight + "px";
});


function toggleHeart(event, element) {
  // Prevent default action (if any)
  event.preventDefault();
  
  // Toggle classes
  if (element.classList.contains('fa-regular')) {
    element.classList.remove('fa-regular');
    element.classList.add('fa-solid');
  } else {
    element.classList.remove('fa-solid');
    element.classList.add('fa-regular');
  }
}