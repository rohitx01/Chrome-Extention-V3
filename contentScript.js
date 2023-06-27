// Create the assistive ball element
const assistiveBall = document.createElement("div");
assistiveBall.id = "assistiveBall";
assistiveBall.innerHTML =
  '<img src="path/to/your-icon.png" alt="Assistive Ball Icon" />';

// Apply any desired styles to the assistive ball
assistiveBall.style.position = "fixed";
assistiveBall.style.bottom = "20px";
assistiveBall.style.right = "20px";
// Add more CSS properties as needed to style the ball

// Add event listeners or functionality to the assistive ball
assistiveBall.addEventListener("click", function () {
  // Handle click events on the assistive ball
  // Add your custom logic here
});

// Add the ball to the document body
document.body.appendChild(assistiveBall);
