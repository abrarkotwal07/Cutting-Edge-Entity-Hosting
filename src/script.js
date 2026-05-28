// This script runs automatically when the HTML file loads
document.addEventListener('DOMContentLoaded', () => {
    
    // Function to update the server status badge with a live clock
    function updateServerTime() {
        const statusBadge = document.getElementById('server-status');
        const now = new Date();
        
        // Format the time nicely
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        // Update the HTML element
        statusBadge.innerHTML = `EC2 Node Active • Live Server Time: ${timeString}`;
    }

    // Run immediately, then update every 1 second (1000 milliseconds)
    updateServerTime();
    setInterval(updateServerTime, 1000);
});

// Function connected to the primary button in the HTML
function showAlert() {
    alert("Connection Successful! Your JavaScript, CSS, and HTML are working perfectly on the EC2 web server.");
}