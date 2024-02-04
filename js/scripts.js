// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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

// Show All Services 
window.onload = function() {
  var showAllButton = document.querySelector('.show-all');
  if (showAllButton) {
    showAllButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the link from triggering its default behavior
      var dashboard = document.querySelector('.dash-items');
      if (dashboard) {
        dashboard.style.maxHeight = dashboard.scrollHeight + "px";
      }
    });
  }
};

 
  // JavaScript for toggling views with animation
  const listViewBtn = document.getElementById('list-view-btn');
  const gridViewBtn = document.getElementById('grid-view-btn');
  const dashboardItems = document.getElementById('services-item-wrapper');
  
 if(listViewBtn){
  listViewBtn.addEventListener('click', () => {
    dashboardItems.classList.remove('card-view');
    dashboardItems.classList.add('list-view');
    gridViewBtn.classList.remove('active');
    listViewBtn.classList.add('active');
});
 }
 if(gridViewBtn){
  gridViewBtn.addEventListener('click', () => {
      dashboardItems.classList.remove('list-view');
      dashboardItems.classList.add('card-view');
      listViewBtn.classList.remove('active');
      gridViewBtn.classList.add('active');
  });
 }


 
// Tasks handle Events

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Function to show details of the task
  function showTaskDetails(taskId) {
    // Hide all detail sections
    document.querySelectorAll('.detail-section').forEach(section => {
      section.style.display = 'none';
    });
    // Show the specified task's detail section
    const detailSection = document.getElementById('detail-section-' + taskId);
    if (detailSection) {
      detailSection.style.display = 'block';
    }
    // Add 'active' class to the clicked task and remove from others
    document.querySelectorAll('.task-item').forEach(item => {
      item.classList.remove('active');
    });

    if(document.querySelector(`[data-task-id="${taskId}"]`)){
      document.querySelector(`[data-task-id="${taskId}"]`).classList.add('active');
    }
    
  }
  
  // Initialize the view with the first task's details
  showTaskDetails('1');
  
  // Setup click event listeners for all task items
  document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', function() {
      const taskId = this.getAttribute('data-task-id');
      showTaskDetails(taskId);
    });
  });
});

