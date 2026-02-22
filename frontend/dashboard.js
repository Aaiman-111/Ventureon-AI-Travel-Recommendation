
function selectDestination(destination) {
    
    console.log('Selected destination:', destination);
    localStorage.setItem("tripData", JSON.stringify({ destination: destination }));
    window.location.href = "overview.html";
}

function goToPlanner() {
    window.location.href = "index.html";
}



