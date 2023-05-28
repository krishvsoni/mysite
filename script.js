
window.onload = function() {
  // Add an event listener to the "Contact Me" link.
  document.querySelector("a[href='mailto:email@address.com']").addEventListener("click", function() {
    // Open the user's email client.
    window.open("mailto:email@address.com");
  });
};
