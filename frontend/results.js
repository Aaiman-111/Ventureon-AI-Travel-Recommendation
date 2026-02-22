document.addEventListener("DOMContentLoaded", function () {

   
    const data = JSON.parse(localStorage.getItem("tripData"));

    if (!data) {
        window.location.href = "index.html";
        return;
    }

 
    const loadingScreen = document.getElementById("loadingScreen");
    const heroSection = document.getElementById("heroSection");
    const resultsContainer = document.getElementById("resultsContainer");
    const overviewBtn = document.getElementById("overviewBtn");

    const destinationName = document.getElementById("destinationName");
    const budgetCategory = document.getElementById("budgetCategory");
    const daysText = document.getElementById("daysText");
    const itineraryText = document.getElementById("itineraryText");
    const activitiesList = document.getElementById("activitiesList");
    const mapContainer = document.getElementById("map");

  
    const imageMap = {
        "Goa Beach": "images/goa.jpg",
        "Manali Mountains": "images/manali.jpg",
        "Kerala Backwaters": "images/kerala.jpg",
        "Ladakh Adventure": "images/ladakh.jpg",
        "Dubai Luxury": "images/dubai.jpg",
        "Switzerland": "images/switzerland.jpg",
        "Tokyo": "images/tokyo.jpg",
        "Turkey": "images/turkey.jpg",
        "Jaipur": "images/jaipur.jpg",
        "Canada": "images/canada.jpg",
        "Australia": "images/australia.jpg",
        "Africa": "images/africa.jpg",
        "South Korea": "images/south korea.jpg",
        "China": "images/china.jpg",
        "Malaysia": "images/malaysia.jpg",
        "Sri Lanka": "images/sri lanka.jpg"
    };

    const themeMap = {
        "Goa Beach": "#ff9966",
        "Manali Mountains": "#4facfe",
        "Kerala Backwaters": "#43e97b",
        "Ladakh Adventure": "#8e2de2",
        "Dubai Luxury": "#f7971e",
        "Switzerland": "#00c6ff",
        "Tokyo": "#e94e77",
        "Turkey": "#f7b42c",
        "Jaipur": "#ffb347",
        "Canada": "#4e54c8",
        "Australia": "#43cea2",
        "Africa": "#f7971e",
        "South-Korea": "#00c6ff",
        "China": "#e94e77",
        "Malaysia": "#43e97b",
        "Sri Lanka": "#ff9966"
    };

    document.documentElement.style.setProperty(
        "--theme-color",
        themeMap[data.destination] || "#333"
    );

    if (heroSection) {
        const bgImage = imageMap[data.destination] || "images/default.jpg";
        heroSection.style.backgroundImage = `url(${bgImage})`;
    }

    if (loadingScreen && resultsContainer) {
        setTimeout(() => {
            loadingScreen.style.opacity = "0";

            setTimeout(() => {
                loadingScreen.style.display = "none";
                resultsContainer.style.opacity = "1";
            }, 600);

        }, 1200);
    }

    if (destinationName) destinationName.innerText = data.destination || "";
    if (budgetCategory) budgetCategory.innerText = data.budget_category || "";
    if (daysText) daysText.innerText = data.days || "";
    if (itineraryText && data.itinerary) itineraryText.innerText = data.itinerary;


    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.95)";
    document.body.style.transition = "all 0.8s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transform = "scale(1)";
    }, 100);

   
    if (mapContainer) {
        mapContainer.innerHTML = `
            <iframe
                width="100%"
                height="250"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps?q=${data.destination}&output=embed"
                allowfullscreen>
            </iframe>
        `;
    }

    if (activitiesList && data.activities) {
        activitiesList.innerHTML = "";

        data.activities.forEach((activity, index) => {
            const li = document.createElement("li");
            li.innerText = "✈ " + activity;
            li.style.opacity = "0";
            li.style.transform = "translateY(20px)";
            li.style.transition = "all 0.5s ease";

            activitiesList.appendChild(li);

            setTimeout(() => {
                li.style.opacity = "1";
                li.style.transform = "translateY(0)";
            }, 300 + index * 200);
        });
    }

   
    if (overviewBtn) {
        overviewBtn.addEventListener("click", function () {
           
            localStorage.setItem("tripData", JSON.stringify({ destination: data.destination }));
            window.location.href = "overview.html";
        });
    }

});


function goBack() {
    window.location.href = "index.html";
}
