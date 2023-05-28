// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // You can perform further validation or data processing here
  
  // Send the form data to a server or perform any desired action
  // For this example, let's log the form data to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  // Optionally, display a success message or redirect the user to a thank you page
  alert('Message sent successfully!');
  
  // Clear the form fields
  document.getElementById('

